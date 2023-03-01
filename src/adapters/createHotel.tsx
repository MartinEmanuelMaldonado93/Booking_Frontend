import { Hotel, HotelFinded } from "@types";

export default function createHotel(oneHotel: HotelFinded): Hotel {
  return {
    _id: 123,
    address: "",
    cheapestPrice: 123,
    city: oneHotel.city,
    desc: "",
    distance: oneHotel.distance,
    featured: true,
    name: oneHotel.hotel_name,
    photos: [`${oneHotel.main_photo_url}`],
    rooms: ["1"],
    title: oneHotel.hotel_name_trans,
    type: oneHotel.type,
    rating: oneHotel.review_score,
  };
}
