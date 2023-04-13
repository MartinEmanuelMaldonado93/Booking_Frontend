import {
  getHotels,
  getHotelsExpress,
  getHotelsFeatured,
  getLocations,
} from './fetchers';
import { useSWRAxios } from '@api';
import { HotelParams } from '@types';

export const useLocationsSWR = (destination: string | null) =>
  useSWRAxios(destination, getLocations);

/** get hotels by destination
 * needs specific params to fetch hotels
 */
export const useHotelsSWR = (destination: string | null, params: any) =>
  useSWRAxios(destination, getHotelsExpress);

/** get featured/deals hotels
 */
export const useHotelsFeaturedSWR = (
  destination: string | null,
  params: HotelParams
) => {
  return useSWRAxios(destination, () => getHotelsFeatured(params));
};
