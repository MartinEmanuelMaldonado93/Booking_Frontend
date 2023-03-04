import { bookingInstance } from "@lib";
import { BookingLocation } from "@types";
import { AxiosResponse } from "axios";

/*
 * This file contains basic request declarations
 * (fetcher function that calls an endpoint)
 */

/** get Locations - autocomplete,  BookingLocation */
export const getLocations = (
  destination: string
): Promise<AxiosResponse<BookingLocation[]>> => {
  return bookingInstance.get("locations/auto-complete", {
    params: {
      text: destination,
      languagecode: "en-us",
    },
  });
};
export const getHotels = (): Promise<AxiosResponse<any>> => {
  return bookingInstance.get("/hotels", {
    params: { api_key: import.meta.env.VITE_API_KEY },
  });
};

/** Reserve  */
