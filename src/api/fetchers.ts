import { BookingLocation, Hotel, HotelParams, HotelsResponse } from '@types';
import { bookingInstance } from '@api';
import { RapidApi, Express } from '@api';
import { AxiosResponse } from 'axios';

/** Axios Fetchers */

/** Own Booking express api */
export const getHotelsExpress = (
	destination: string
): Promise<AxiosResponse<Hotel[]>> =>
	bookingInstance.get(Express.HOTELS, {
		params: {
			city: destination,
		},
	});

export const getLocations = (
	destination: string
): Promise<AxiosResponse<Hotel[]>> =>
	bookingInstance.get(Express.locationCity +  destination );

/** booking.com official api */

/** get List of hotels */
export const getHotels = (
	paramsHotels: HotelParams
): Promise<AxiosResponse<any>> =>
	bookingInstance.get(RapidApi.PROPERTIES, {
		params: {
			api_key: import.meta.env.VITE_API_KEY,
			...paramsHotels,
		},
	});

/** get List of hotels featured */
export const getHotelsFeatured = (
	params: HotelParams
): Promise<AxiosResponse<HotelsResponse>> =>
	bookingInstance.get(RapidApi.PROPERTIES, {
		params: {
			order_by: 'deals',
			...params,
			api_key: import.meta.env.VITE_API_KEY,
		},
	});
