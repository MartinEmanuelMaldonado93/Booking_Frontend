import {
	getHotels,
	getHotelsExpress,
	getHotelsFeatured,
	getLocations,
} from './fetchers';
import { useSWRAxios } from '@api';
import { HotelParams } from '@types';
type Destination = string | null;

export const useLocationsSWR = (destination: Destination) => useSWRAxios(destination, getLocations);

/** get hotels by destination
 * needs specific params to fetch hotels
 */
export const useHotelsSWR = (destination: Destination) => useSWRAxios(destination, getHotelsExpress);

/** get featured/deals hotels
 */
export const useHotelsFeaturedSWR = (
	destination: Destination,
	params: HotelParams
) => useSWRAxios(destination, () => getHotelsFeatured(params));
