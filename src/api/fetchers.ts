import { BookingLocation, Hotel, HotelParams, HotelsResponse } from "@types";
import { bookingInstance, createParamsHotelsSwr } from "@lib";
import { routes, routeExpress } from "@api";
import { AxiosResponse } from "axios";

/** Booking express api */

export const getHotelsExpress = (
  paramsHotels: any
): Promise<AxiosResponse<Hotel[]>> => {
  return bookingInstance.get(routeExpress.HOTELS, {
    params: {
      ...paramsHotels,
    },
  });
};

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
