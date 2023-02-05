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
  adult?: number;
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
