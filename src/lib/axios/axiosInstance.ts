import Axios from "axios";
import { addBaseInterceptors } from "./axiosInterceptors";

export const bookingInstance = Axios.create({
  baseURL: "https://apidojo-booking-v1.p.rapidapi.com",
});

addBaseInterceptors(bookingInstance);
