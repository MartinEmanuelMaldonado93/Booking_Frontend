import { featuredData } from '@api';
import { uuid } from '@utils';

function Featured() {
  return (
    <div className='mt-12 px-4 overflow-x-scroll sm:overflow-x-auto'>
      <div className='flex sm:flex-wrap justify-around md:justify-between gap-2 my-4 z-0'>
        {featuredData?.map((hotel, i) => (
          <div key={uuid()} className='translate-x-[55%] sm:translate-x-0 bg-base-100 shadow-lg box-border min-w-[10rem] max-w-[10rem] sm:max-w-[15rem]'>
            <img
              src={hotel.imgUrl}
              alt={hotel.city}
              className='z-0  object-cover rounded-lg transition-all duration-500 hover:scale-105'
            />
            <div className='translate-x-4 h-0 relative -translate-y-20  text-white text-xl sm:text-3xl font-bold '>
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
