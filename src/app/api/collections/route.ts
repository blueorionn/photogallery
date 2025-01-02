import { type NextRequest } from "next/server";
import { photoCollections } from "@/data/collections";
import { PhotoCollectionType } from "@/shared/types/collection";

// cache for 72 hours
export const revalidate = 60 * 60 * 24 * 3;

export async function GET(request: NextRequest) {
  // requesting page number
  const searchParams = request.nextUrl.searchParams;
  let page: string | number | null = searchParams.get("page");

  // converting page query to number type
  page = parseInt(`${page}`) || 1;

  // checking validity of pageNumber
  if (!page || typeof page !== "number") {
    return Response.json(
      { message: `Either page number is missing or not valid.` },
      { status: 415 }
    );
  }

  // number of collections per page.
  const pageSize = 15;

  // list end/start index
  const startIndex = pageSize * (page - 1);
  const endIndex = pageSize * page;

  // if startIndex/endIndex out of range
  if (startIndex >= Object.keys(photoCollections).length) {
    return Response.json({ message: `Content out of range.` }, { status: 400 });
  }

  // photo collection
  const collection = photoCollections as Record<string, string>;
  const collectionNameAndId = Object.keys(collection)
    .slice(startIndex, endIndex)
    .map((name: string) => {
      return { name: name, id: collection[name] };
    });

  // fetching images per collection id
  const collectionImages: {
    name: string;
    id: string;
    images: PhotoCollectionType;
  }[] = [];

  for (let i = 0; i < collectionNameAndId.length; i++) {
    const key = collectionNameAndId[i];
    const data = await fetch(
      `https://api.pexels.com/v1/collections/${key.id}?per_page=4`,
      {
        method: "GET",
        headers: { Authorization: `${process.env.PEXELS_APIKEY}` },
      }
    );
    const result: PhotoCollectionType = await data.json();

    // removing videos media
    const images = result.media
      .filter((image) => image.type == "Photo")
      .slice(0, pageSize);

    // push result
    collectionImages.push({
      name: key.name,
      id: key.id,
      images: { ...result, media: images },
    });
  }

  return Response.json({ result: collectionImages });
}
