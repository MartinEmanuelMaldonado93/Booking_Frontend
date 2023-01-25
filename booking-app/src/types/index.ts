export type Hotel = {
  name: string;
  type: string;
  city: string;
  address: string;
  distance: string;
  photos: string[];
  title: string;
  desc: string;
  rating?: number; // min 0 max 5
  rooms: string[];
  cheapestPrice: number;
  featured: boolean;
};

export type Room = {
  title: string;
  price: number | string;
  maxPeople: number;
  desc: number;
  roomNumber: { numberRoom: number; unavailableDates: string[] }[];
};

export type User = {
  userName: string;
  email: string;
  password: string;
  isAdmin: boolean;
};

export type HotelByType = {
  type: string,
  count: number,
};
