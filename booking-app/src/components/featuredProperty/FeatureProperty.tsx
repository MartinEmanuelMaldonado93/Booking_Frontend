import { UseFetch } from "@hooks";
import { Hotel } from "src/types";

/** Fetch specifically featured `Hotels` */
const FeaturedProperties = () => {
  const { data, loading, error } = UseFetch<Hotel[]>(
    "/hotels?featured=true&limit=4"
  );

  if (loading) return <div>"Loading..."</div>;

  return (
    <div className='fp'>
      {data?.map((property) => (
        <div className='fpItem'>
          <img src={property.photos[0]} alt='' className='fpImg' />
          <span className='fpName'>{property.name}</span>
          <span className='fpCity'>{property.city}</span>
          <span className='fpPrice'>Starting from {property.cheapestPrice}</span>
          {property.rating && (
            <div className='fpRating'>
              <button>{property.rating}</button>
              <span>Excellent</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export { FeaturedProperties };
