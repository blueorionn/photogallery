import { NextResponse } from "next/server";
import { fetchPhotoById, updatePhotoTag } from "@/lib/fetch";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; // get id param
  const { data, error } = await fetchPhotoById(id); // fetch photo

  // if data is null or empty
  if (!data) {
    return NextResponse.json({ message: "photo not found" }, { status: 404 });
  }

  // if error occur
  if (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }

  // redirect to image endpoint
  const endpoint = `${process.env.CLOUD_OBJECT_STORAGE_LOCATION}${data.photoname}`;
  return NextResponse.redirect(endpoint);
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; // get id param
  const body = await request.json();

  // Validate the data (optional)
  if (!body.tag) {
    return NextResponse.json({ error: "Tag is required" }, { status: 400 });
  }

  const { error } = await updatePhotoTag(body.tag, id);

  // if error occur
  if (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "Photo updated" }, { status: 200 });
}
