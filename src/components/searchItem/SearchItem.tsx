import { useNavigate } from 'react-router-dom';
import { Hotel } from '@types';
import { PUBLIC } from 'src/routes';

type props = {
  hotel: Hotel;
};
function SearchItem({ hotel }: props) {
  // const navigate = useNavigate();
  function handleSearch() {
    // navigate(PUBLIC.HOTEL_SELECTED, {
    //   state: { _id: hotel._id },
    // });
  }

  return (
    <div className='flex flex-wrap lg:flex-nowrap justify-center gap-6 border border-gray-300 rounded-md p-4'>
      <img
        src={hotel.photos![0]}
        alt='hotel photography'
        className='rounded-sm shadow-md min-w-[8rem] max-w-[14rem] h-full aspect-square m-2'
      />
      <div className='grid gap-2 w-full'>
        <h1 className='text-lg font-bold'>{hotel.name}</h1>
        <div className=''>{hotel.distance}m from center</div>
        <div className='badge bg-green-600 border-none'>Free airport taxi</div>
        <div className='font-bold'>Studio Apartment with Air conditioning</div>
        <div className='bg-gray-300 rounded-sm p-2'>{hotel.desc}</div>
        <div className='font-bold text-green-600'>Free cancellation </div>
        <div className='italic text-green-600'>
          You can cancel later, so lock in this great price today!
        </div>
      </div>
      <div className=''>
        {hotel.rating && (
          <div className='siRating'>
            <span>Excellent </span>
            <button>{hotel.rating}</button>
          </div>
        )}
        <div className='grid gap-3'>
          <div className='font-bold text-end text-xl'>
            ${hotel.cheapestPrice}
          </div>
          <div className='text-gray-600'>Includes taxes and fees</div>
          <button onClick={handleSearch} className='btn btn-primary'>
            See availability
          </button>
        </div>
      </div>
    </div>
  );
}

export { SearchItem };
