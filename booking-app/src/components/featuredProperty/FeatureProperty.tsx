import { UseFetch } from "@hooks";
import { Hotel } from "src/types";

/** Fetch specifically featured `Hotels` */
const FeaturedProperties = () => {
  const { data, loading, error } = UseFetch<Hotel[]>(
    "http://localhost:8800/api/hotels?featured=true&limit=4"
  );

  if (loading) return <div>"Loading..."</div>;

  return (
    <div className=''>
      <div className='text-2xl text-gray-700'>Homes guests love</div>
      {data?.map((hotel) => (
        <div className='fpItem' key={hotel.title}>
          <img
            src={hotel.photos ? hotel.photos[0] : ""}
            alt=''
            className='fpImg'
          />
          <span className='fpName'>{hotel.name}</span>
          <span className='fpCity'>{hotel.city}</span>
          <span className='fpPrice'>Starting from {hotel.cheapestPrice}</span>
          {hotel.rating && (
            <div className='fpRating'>
              <button>
                {hotel.rating}{" "}
                {"☆".repeat(Math.ceil(Math.random() * hotel.rating) / 2)}
              </button>
              <span>Excellent</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export { FeaturedProperties };
