import Axios from "axios";
import { addBaseInterceptors } from "./axiosInterceptors";

export const apiDojoConfig = {
  baseURL: "https://apidojo-booking-v1.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Host": "apidojo-booking-v1.p.rapidapi.com",
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
  },
};

export const bookingInstance = Axios.create(apiDojoConfig);

addBaseInterceptors(bookingInstance);
