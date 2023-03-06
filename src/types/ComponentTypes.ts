import type { Range } from "react-date-range/index";

export type Hotel = {
  _id?: number;
  name: string;
  type: string;
  city: string;
  address: string;
  distance: string;
  photos: string[] | undefined;
  title: string;
  desc: string;
  rating?: number; // min 0 max 5
  rooms: string[];
  cheapestPrice: number;
  featured: boolean;
};

export type HotelByType = {
  type: string;
  count: number;
};

export type optionsHotel = {
  adult: number;
  children?: number;
  room?: number;
};

export type Room = {
  title: string;
  price: number | string;
  maxPeople: number;
  desc: number;
  roomNumber: { numberRoom: number; unavailableDates: string[] }[];
};

export type itemDateRange = {
  startDate: Date;
  endDate: Date | 0;
  key: string;
};

export type navegationHotelParams = {
  destination: string;
  dates: Range[];
  options: optionsHotel;
};

export type UserInfo = {
  userName: string;
  isAdmin?: boolean;
  id?: string;
  token?: string;
};

export interface LocationInfo {
  type: string;
  hotels: number;
  cc1: string;
  region: string;
  label: string;
  dest_type: string;
  latitude: number;
  city_name: string;
  lc: string;
  rtl: number;
  b_max_los_data: BMaxLosData_1;
  image_url: string;
  longitude: number;
  city_ufi?: number;
  timezone: string;
  dest_id: string;
  name: string;
  nr_hotels: number;
  country: string;
}

export interface BMaxLosData_1 {
  extended_los: number;
  experiment: string;
  has_extended_los: number;
  default_los: number;
  is_fullon: number;
  max_allowed_los: number;
}
