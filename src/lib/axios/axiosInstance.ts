import Axios from "axios";
import { addBaseInterceptors } from "./axiosInterceptors";
import { apiDojoConfig } from "@lib";

export const bookingInstance = Axios.create(apiDojoConfig);

addBaseInterceptors(bookingInstance);
