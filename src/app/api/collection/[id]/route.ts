import { type NextRequest } from "next/server";
import { photoCollections } from "@/data/collections";
import { type PhotoCollectionType } from "@/shared/types/collection";

// cache result
export const dynamic = "force-dynamic";
const revalidate = 604800; // 7 days

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // requesting collection id
  const collectionId = (await params).id;

  // collection of photos
  const collectionOfPhoto = photoCollections as Record<string, string>;

  // checking validity of id
  if (collectionId) {
    if (!Object.values(collectionOfPhoto).includes(collectionId)) {
      return Response.json(
        { message: `Collection with Id ${collectionId} doesn't exist.` },
        { status: 404 }
      );
    }
  }

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

  // fetching data
  const data = await fetch(
    `https://api.pexels.com/v1/collections/${collectionId}?page=${page}`,
    {
      method: "GET",
      headers: { Authorization: `${process.env.PEXELS_APIKEY}` },
      next: { revalidate: revalidate },
    }
  );
  const result: PhotoCollectionType = await data.json();

  // filter result for photo type
  const collection = {
    ...result,
    media: result.media.filter((img) => img.type == "Photo"),
  };

  return Response.json(collection);
}
