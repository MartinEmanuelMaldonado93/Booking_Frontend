import { BASE_URL } from "@models";
import { RawAxiosRequestConfig } from "axios";

type props = {
  destination: string;
  url: string;
  method: string;
};
function createAxiosOptions({
  destination,
  url,
  method = "GET",
}: props): RawAxiosRequestConfig {
  return {
    method: method,
    url: `${BASE_URL}/${url}`,
    params: { text: destination, languagecode: "en-us" },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": BASE_URL,
    },
  };
}
export default createAxiosOptions;
