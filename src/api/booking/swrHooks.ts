import { SWRCacheKey } from "@lib";
import { useSWRAxios } from "../../lib/swr/useSWRAxios";
import { getHotels } from "./fetchers";

/*
 * This file contains reusable swr hooks
 */

export const useHotelsSWR = () => useSWRAxios(SWRCacheKey.Hotels(), getHotels);
