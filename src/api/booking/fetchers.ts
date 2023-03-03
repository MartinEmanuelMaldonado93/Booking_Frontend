import { bookingInstance } from "@lib";
import { AxiosResponse } from "axios";

/*
 * This file contains basic request declarations
 * (fetcher function that calls an endpoint)
 */

export const getHotels = (): Promise<AxiosResponse<any>> =>
  bookingInstance.get(`/hotels`, {
    params: { api_key: import.meta.env.VITE_API_KEY },
  });

/** get Locations - autocomplete */

/** Reserve  */