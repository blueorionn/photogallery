import { type NextRequest } from "next/server";
import { photoCollections } from "@/data/collections";
import { type PhotoCollectionType } from "@/shared/types/collection";
import { distributePhotosEvenly } from "@/shared/utils/funcs";

// cache result
export const dynamic = "force-dynamic";
const revalidate = 604800; // 7 days

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // requesting collection id
  const collectionId = (await params).id;

  // requesting search params
  const searchParams = request.nextUrl.searchParams;

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
  let page: string | number | null = searchParams.get("page");

  // converting page query to number type
  page = parseInt(`${page}`) || 1;

  // checking validity of page number
  if (!page || typeof page !== "number") {
    return Response.json(
      { message: `Either page number is missing or not valid.` },
      { status: 415 }
    );
  }

  // requesting column number
  let col: string | number | null = searchParams.get("col");

  // converting col query to number type
  col = parseInt(`${col}`) || 1;

  // checking validity of col
  if (!col || typeof col !== "number") {
    return Response.json(
      { message: "Either column number is missing or not valid" },
      { status: 415 }
    );
  }

  // checking column range.
  if (col > 3 || col < 1) {
    return Response.json({ message: "Column out of range" }, { status: 415 });
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
  const photos = result.media.filter((img) => img.type == "Photo");
  const distributedPhoto = distributePhotosEvenly(photos, col);
  const collections = {
    colOne: distributedPhoto[0],
    colTwo: distributedPhoto.length > 1 ? distributedPhoto[1] : [],
    colThree: distributedPhoto.length > 2 ? distributedPhoto[2] : [],
  };

  return Response.json(collections);
}
