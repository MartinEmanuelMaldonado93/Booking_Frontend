import { BookingLocation, HotelParams, HotelsResponse } from "@types";
import { bookingInstance, createParamsHotelsSwr } from "@lib";
import { routes } from "@api";
import { AxiosResponse } from "axios";
import { formatDate } from "@utils";
import { SearchedDestination } from "@context";

/*
 * This file contains basic request declarations
 * (fetcher function that calls an endpoint)
 */

/** get Locations - autocomplete */
export const getLocations = (
  destination: string
): Promise<AxiosResponse<BookingLocation[]>> => {
  return bookingInstance.get(routes.LOCATIONS, {
    params: {
      text: destination,
      languagecode: "en-us",
    },
  });
};

/** get List of hotels */
export const getHotels = (
  paramsHotels: HotelParams
): Promise<AxiosResponse<any>> => {
  return bookingInstance.get(routes.PROPERTIES, {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
      ...paramsHotels,
    },
  });
};

/** get List of hotels featured */
export const getHotelsFeatured = (
  params: HotelParams
): Promise<AxiosResponse<HotelsResponse>> => {
  return bookingInstance.get(routes.PROPERTIES, {
    params: {
      order_by: "deals",
      ...params,
      api_key: import.meta.env.VITE_API_KEY,
    },
  });
};
