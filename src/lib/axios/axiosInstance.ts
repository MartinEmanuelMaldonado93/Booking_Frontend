import Axios, { CreateAxiosDefaults } from 'axios';
import { addBaseInterceptors } from './axiosInterceptors';

const apiDojoConfig: CreateAxiosDefaults = {
  baseURL: 'https://apidojo-booking-v1.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com',
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
  },
};

const apiKoyebConfig: CreateAxiosDefaults = {
  baseURL: 'martin-booking-production.up.railway.app',
  headers: {},
};

const apiBookingExpressConfig: CreateAxiosDefaults = {
  baseURL: 'booking-api-martinemanuelmaldonado93.koyeb.app',
  headers: {},
};

const apiBookingExpressLocalConfig: CreateAxiosDefaults = {
  baseURL: 'localhost://3000',
  headers: {},
};

export const bookingInstance = Axios.create(apiBookingExpressConfig);

addBaseInterceptors(bookingInstance);
