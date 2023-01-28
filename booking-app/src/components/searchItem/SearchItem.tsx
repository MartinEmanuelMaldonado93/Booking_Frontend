import { Hotel } from "@types";
import { Link } from "react-router-dom";
type props = {
  hotelItem: Hotel | undefined | null;
};
function SearchItem({ hotelItem: hotel }: props) {
  if (!hotel) return <></>;

  return (
    <div className='flex border border-gray-300 rounded-md p-2'>
      <img
        src={hotel.photos?.join(" ") ?? ""}
        alt='hotel photography'
        className='max-w-xs h-auto'
      />
      <div className='grid gap-2'>
        <h1 className='text-lg'>{hotel.name}</h1>
        <div className=''>{hotel.distance}m from center</div>
        <div className='badge bg-green-600'>Free airport taxi</div>
        <div className='font-bold'>Studio Apartment with Air conditioning</div>
        <div className='siFeatures'>{hotel.desc}</div>
        <div className='font-bold text-green-600'>Free cancellation </div>
        <div className='italic text-green-600'>
          You can cancel later, so lock in this great price today!
        </div>
      </div>
      <div className=''>
        {hotel.rating && (
          <div className='siRating'>
            <span>Excellent</span>
            <button>{hotel.rating}</button>
          </div>
        )}
        <div className='grid gap-3'>
          <div className='font-bold text-end text-xl'>
            ${hotel.cheapestPrice}
          </div>
          <div className='text-gray-600'>Includes taxes and fees</div>
          <Link to={`/hotels/${hotel._id}`}>
            <button className='btn btn-primary'>See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { SearchItem };
