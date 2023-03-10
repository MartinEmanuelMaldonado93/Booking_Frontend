import { useEffect, useState } from "react";
import axios, { RawAxiosRequestConfig } from "axios";

/** Receive exact route url */
function UseFetch<T>(url: string, options?: RawAxiosRequestConfig) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<Error | unknown>();

  useEffect(() => {
    fetchData();
    async function fetchData() {
      setLoading(true);
      try {
        if (options) {
          const resp = await axios.request(options);
          setData(resp.data);
        } else {
          const resp = await axios.get(url);
          setData(resp.data);
        }
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    }
  }, []);

  const reFetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetchData };
}

export default UseFetch;
