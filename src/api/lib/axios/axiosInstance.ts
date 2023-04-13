import Axios, { CreateAxiosDefaults } from 'axios';
import { addBaseInterceptors } from './axiosInterceptors';

const DojoConfig: CreateAxiosDefaults = {
  baseURL: 'https://apidojo-booking-v1.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com',
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
  },
};

const RailWayConfig: CreateAxiosDefaults = {
  baseURL: 'martin-booking-production.up.railway.app',
  headers: {},
};

const KoyebConfig: CreateAxiosDefaults = {
  baseURL: 'booking-api-martinemanuelmaldonado93.koyeb.app',
  headers: {},
};

const ExpressLocalConfig: CreateAxiosDefaults = {
  baseURL: 'http://localhost:8800/api',
  headers: {},
};

export const bookingInstance = Axios.create(ExpressLocalConfig);

addBaseInterceptors(bookingInstance);
