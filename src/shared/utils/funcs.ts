import { type PhotoCollectionMedia } from "@/shared/types/collection";

// Distribute an array evenly.
export function distributePhotosEvenly(array: PhotoCollectionMedia[], chunks: number) {
  return Array.from({ length: chunks }, (_, i) =>
    array.filter((_, j) => j % chunks === i)
  );
}
