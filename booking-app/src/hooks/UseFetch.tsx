import React, { useEffect, useState } from "react";
import axios, { RawAxiosRequestConfig } from "axios";
/** Receive exact route url */
function UseFetch<T>(url: string, options?: RawAxiosRequestConfig) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<Error | unknown>();

  useEffect(() => {
    fetchData();
    // const fetchData = async () => {
    async function fetchData() {
      setLoading(true);
      try {
        if (options) {
          axios
            .request(options)
            .then((response) => setData(response.data))
            .catch((error) => console.log(error));
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
