import { supabaseDbClient } from "@/shared/supabase";
import type { Photo } from "@/shared/data.types";

export async function fetchPhotos(min: number, max: number) {
  const { data, error } = await supabaseDbClient
    .from("photos")
    .select()
    .is("tag", null)
    .eq("delete", false)
    .range(min, max);

  return { data: data as Photo[] | null, error };
}

export async function fetchHiddenPhotos(min: number, max: number) {
  const { data, error } = await supabaseDbClient
    .from("photos")
    .select()
    .eq("tag", "hidden")
    .eq("delete", false)
    .range(min, max);

  return { data: data as Photo[] | null, error };
}

export async function fetchPhoto(photoname: string) {
  const { data, error } = await supabaseDbClient
    .from("photos")
    .select()
    .eq("photoname", photoname)
    .single();

  return { data: data as Photo | null, error };
}

export async function fetchPhotoById(id: string) {
  const { data, error } = await supabaseDbClient
    .from("photos")
    .select("*")
    .eq("uuid", id)
    .single();

  return { data: data as Photo | null, error };
}

export async function updatePhotoTag(tag: string, uuid: string) {
  const { data, error } = await supabaseDbClient
    .from("photos")
    .update({ tag: tag })
    .eq("uuid", uuid)
    .select();

  return { data: data as Photo | null, error };
}

export async function deletePhoto(uuid: string) {
  const { data, error } = await supabaseDbClient
    .from("photos")
    .update({ delete: true })
    .eq("uuid", uuid)
    .select();

  return { data: data as Photo | null, error };
}
