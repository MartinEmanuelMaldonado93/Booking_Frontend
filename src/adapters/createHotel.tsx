import { Hotel } from "@types";
import { SingleHotel } from "src/types/BookingSingleHotel";

/** Return `hotel`type object created by adapting data from an API */
export default function createHotel(hotel: SingleHotel): Hotel {
  return {
    _id: 123,
    address: "",
    cheapestPrice: 123,
    city: hotel.city,
    desc: "",
    distance: hotel.distance,
    featured: true,
    name: hotel.hotel_name,
    photos: [hotel.main_photo_url],
    rooms: ["1"],
    title: hotel.hotel_name_trans,
    type: hotel.type,
    rating: hotel.review_score,
  };
}
