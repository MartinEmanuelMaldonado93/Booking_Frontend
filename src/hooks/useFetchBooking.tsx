import { useEffect, useState } from "react";
import axios, { RawAxiosRequestConfig } from "axios";

function useFetchBooking<T>(options: RawAxiosRequestConfig, delay = 0) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<Error | unknown>();
  /**headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
    } */
  useEffect(() => {
    // setTimeout(() => {
    //   console.log("fetching...")
    //   fetchData()
    // }, delay);
    fetchData();
  }, []);

  const reFetchData = () => fetchData();

  async function fetchData() {
    setLoading(true);
    try {
      const resp = await axios.request(options);
      setData(resp.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }
  return { data, loading, error, reFetchData };
}

export default useFetchBooking;
// url rout and params only change..
