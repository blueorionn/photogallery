import { useState, useCallback } from "react";

export const useFetch = <T>() => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchResource = useCallback(
    async (url: string, signal?: AbortSignal) => {
      if (url.length) {
        setLoading(true);
        try {
          const response = await fetch(url, { signal });

          // if valid response
          if (response.status == 200) {
            const d: T = await response.json();
            setData(d);
          } else {
            setError(true);
          }
        } catch {
          setError(true);
        } finally {
          setLoading(false);
        }
      }
    },
    []
  );

  return { data, loading, error, fetchResource };
};
