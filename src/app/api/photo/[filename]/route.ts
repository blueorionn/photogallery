import { supabaseDbClient } from "@/shared/supabase";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ filename: string }> }
) {
  // get filename param
  const { filename } = await params;
  // fetch filename
  const { data, error } = await supabaseDbClient
    .from("photos")
    .select()
    .eq("photoname", filename);

  // if data is null or empty
  if (!data || data?.length < 1) {
    return NextResponse.json(
      { message: "filename not found" },
      { status: 404 }
    );
  }

  // if error occur
  if (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }

  // redirect to image endpoint
  const endpoint = `${process.env.CLOUD_OBJECT_STORAGE_LOCATION}${filename}`;
  return NextResponse.redirect(endpoint);
}
