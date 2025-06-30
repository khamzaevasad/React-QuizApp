import { useEffect, useState } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetData = async () => {
      setIsPending(true);

      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setIsPending(false);
        setData(data);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
        setIsPending(false);
      }
    };
    fetData();
  }, [url]);

  return { data, isPending, error };
}
