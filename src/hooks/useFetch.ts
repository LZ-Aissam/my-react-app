import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<T>(url, { signal: controller.signal });
        if (!cancelled) setData(response.data);
      } catch (err: unknown) {
        if (axios.isCancel(err)) return;
        if (!cancelled) {
          if (err instanceof Error) setError(err.message);
          else setError("Internal error occurred");
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    getData();
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [url]);

  return { data, error, isLoading };
};
