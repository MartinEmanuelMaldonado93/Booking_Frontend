import { getHotels, getHotelsFeatured, getLocations } from "./fetchers";
import { SWRCacheKey, useSWRAxios } from "@lib";
import { HotelParams } from "@types";

/*
 * This file contains reusable swr hooks
 */
/** first parameter is the `key` */
export const useLocationsSWR = (destination: string | null) =>
  useSWRAxios(destination, getLocations);

/** get hotels by destination
 * needs specific params to fetch hotels
 */
export const useHotelsSWR = <T>(
  destination: string | null,
  params: HotelParams
) => {
  return useSWRAxios<T>(destination, () => getHotels(params));
};

/** get featured/deals hotels 
 */
export const useHotelsFeaturedSWR = (
  destination: string | null,
  params: HotelParams
) => {
  return useSWRAxios(destination, () => getHotelsFeatured(params));
};
