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
  