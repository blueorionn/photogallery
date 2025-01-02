import { useState } from "react";

export const useFetch = <T>(): [
  T | T[],
  boolean,
  boolean,
  (url: string) => Promise<void>
] => {
  const [data, setData] = useState<T | T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchResourse = async (url: string) => {
    if (url.length) {
      setLoading(true);
      try {
        const response = await fetch(url);
        const d: T | T[] = await response.json();
        setData(d);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  };

  return [data, loading, error, fetchResourse];
};
