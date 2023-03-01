import { useEffect, useState } from "react";
import axios, { AxiosError, RawAxiosRequestConfig } from "axios";
type props = {
  options: RawAxiosRequestConfig | null; // to make conditional fetch
  delay?: number;
};
function useFetchBooking<T>({ options, delay }: props) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<AxiosError | unknown>();

  useEffect(() => {
    fetchData();
  }, []);

  const reFetchData = () => fetchData();

  async function fetchData() {
    if (!options) return;
    setLoading(true);
    try {
      const resp = await axios.request(options);
      setData(resp.data);
    } catch (error) {
      console.log("fallo el try , error: ")
      setError(error);
    }
    setLoading(false);
  }
  return { data, loading, error, reFetchData };
}

export default useFetchBooking;
export type ReturnUseFetchBooking<T> = {
  data: T | undefined;
  loading: boolean | undefined;
  error: unknown;
  reFetchData: () => Promise<void>;
};

// url rout and params only change..
