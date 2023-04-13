import { featuredData } from '@api';
import { uuid } from '@utils';

function Featured() {
  return (
    <div className='m-4 px-4 overflow-x-scroll sm:overflow-x-auto'>
      <div className='flex translate-x-[25%] sm:translate-x-0 sm:flex-wrap justify-around md:justify-between gap-2 my-4 pointer-events-none z-0'>
        {featuredData?.map((hotel, i) => (
          <div key={uuid()} className='bg-base-100 shadow-lg'>
            <img
              src={hotel.imgUrl}
              alt={hotel.city}
              className='z-0 min-w-[10rem] max-w-[10rem] sm:max-w-[15rem] object-cover rounded-lg'
            />
            <div className='pointer-events-none translate-x-4 -translate-y-[120%]  text-white text-xl sm:text-3xl font-bold '>
              <h1>{hotel.city}</h1>
              <h2 className='dark:text-gray-200 z-0'>
                {Math.floor(Math.random() * 9)} properties
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Featured };
