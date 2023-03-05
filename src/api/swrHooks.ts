import { SWRCacheKey } from "@lib";
import { useSWRAxios } from "../lib/swr/useSWRAxios";
import { getHotels, getLocations } from "./fetchers";
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
