import { SWRCacheKey } from "@lib";
import { useSWRAxios } from "../lib/swr/useSWRAxios";
import { getHotels, getLocations } from "./fetchers";

/*
 * This file contains reusable swr hooks
 */
/** first parameter is the `key` */
export const useLocationsSWR = (destination: string | null) =>
  useSWRAxios(destination, getLocations);
export const useHotelsSWR = () => useSWRAxios(SWRCacheKey.Hotels(), getHotels);
