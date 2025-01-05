import { type PhotoCollectionMedia } from "@/shared/types/collection";

// Distribute an array evenly.
export function distributePhotosEvenly(array: PhotoCollectionMedia[], chunks: number) {
  return Array.from({ length: chunks }, (_, i) =>
    array.filter((_, j) => j % chunks === i)
  );
}

// Generate random char
export function generateRandomString(length= 7) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
