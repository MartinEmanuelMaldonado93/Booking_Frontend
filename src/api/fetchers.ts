import { BookingLocation, Hotel, HotelParams, HotelsResponse } from '@types';
import { bookingInstance } from '@api';
import { routes, routeExpress } from '@api';
import { AxiosResponse } from 'axios';

/** Axios Fetchers */

/** Own Booking express api */
export const getHotelsExpress = (
	destination: string
): Promise<AxiosResponse<Hotel[]>> => {
	return bookingInstance.get(routeExpress.HOTELS, {
		params: {
			city: destination,
		},
	});
};
export const getLocations = (
	destination: string
): Promise<AxiosResponse<Hotel[]>> => {
	console.log(routeExpress.LOCATIONS+destination);
	return bookingInstance.get(routeExpress.LOCATIONS+destination);
};

/** booking.com official api */

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
			order_by: 'deals',
			...params,
			api_key: import.meta.env.VITE_API_KEY,
		},
	});
};
