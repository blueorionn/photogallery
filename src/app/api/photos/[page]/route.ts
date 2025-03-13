import { supabaseDbClient } from "@/shared/supabase";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ page: number }> }
) {
  // get page param
  const { page } = await params;

  // explicitly checking page type
  if (isNaN(parseInt(`${page}`)))
    return NextResponse.json(
      { message: "Invalid page number" },
      { status: 400 }
    );

  if (page < 1)
    return NextResponse.json(
      { message: "Invalid page number" },
      { status: 400 }
    );

  // pageSize of fetched photos
  const pageSize = 25;
  const min = (page - 1) * pageSize,
    max = page * pageSize;

  // fetch photos
  const { data, error } = await supabaseDbClient
    .from("photos")
    .select()
    .range(min, max);

  // if data is null or empty
  if (!data || data?.length < 1) {
    return NextResponse.json({ message: "list out of range" }, { status: 404 });
  }

  // if error occur
  if (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: { result: data } });
}
