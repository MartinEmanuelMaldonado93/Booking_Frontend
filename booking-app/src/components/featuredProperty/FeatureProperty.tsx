import { UseFetch } from "@hooks";
import { Hotel } from "src/types";

/** Fetch specifically featured `Hotels` */
const FeaturedProperties = () => {
  const { data, loading, error } = UseFetch<Hotel[]>(
    "http://localhost:8800/api/hotels?featured=true&limit=4"
  );

  if (loading) return <div>"Loading..."</div>;

  return (
    <div className='fp'>
      {data?.map((hotel) => (
        <div className='fpItem' key={hotel.title}>
          <img src={hotel.photos[0]} alt='' className='fpImg' />
          <span className='fpName'>{hotel.name}</span>
          <span className='fpCity'>{hotel.city}</span>
          <span className='fpPrice'>Starting from {hotel.cheapestPrice}</span>
          {hotel.rating && (
            <div className='fpRating'>
              <button>{hotel.rating}</button>
              <span>Excellent</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export { FeaturedProperties };
