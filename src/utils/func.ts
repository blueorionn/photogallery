// Generate random char
export function generateRandomString(length = 7) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// set localStorage value
export function setLocalStorageFunc(key: string, value: string) {
  if (typeof window === undefined) return;
  localStorage.setItem(key, value);
}

// create photos page size
export function createPhotosSize(page: number, pageSize = 24) {
  return [(page - 1) * pageSize, page * pageSize];
}

// Distribute an array evenly.
export function distributePhotosEvenly<T>(array: T[], chunks: number) {
  return Array.from({ length: chunks }, (_, i) =>
    array.filter((_, j) => j % chunks === i)
  );
}
