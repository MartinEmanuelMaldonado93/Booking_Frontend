import React, { useEffect, useState } from "react";
import axios from "axios";
/** Receive exact route url */
function UseFetch<T>(url: string) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<Error | unknown>();

  useEffect(() => {
    fetchData();
    // const fetchData = async () => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.log(error);
        setError(error);
      }
      setLoading(false);
    }

    return () => {
      //   second;
    };
  }, [url]);

  const reFetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetchData };
}

export default UseFetch;
