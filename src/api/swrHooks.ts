import { SWRCacheKey } from "@lib";
import { useSWRAxios } from "../lib/swr/useSWRAxios";
import { getHotels, getLocations } from "./fetchers";

/*
 * This file contains reusable swr hooks
 */

export const useLocationsSWR = (destination: string) => {
  return useSWRAxios(destination, getLocations);
};

export const useHotelsSWR = () => useSWRAxios(SWRCacheKey.Hotels(), getHotels);
