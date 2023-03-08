import { Hotel } from "@types";
import { featuredPropertyData } from "@utils";
/** Fetch specifically featured `Hotels` */
const FeaturedProperties = () => {
  return (
    <div className='px-4'>
      <div className='text-2xl text-gray-900'>Homes guests love</div>
      <div className='flex flex-wrap justify-evenly'>
        {featuredPropertyData.map((hotel) => (
          <div className='grid gap-2 place-items-center p-6' key={hotel.title}>
            <img
              src={`https://picsum.photos/seed/${hotel.type}/300/300`}
              alt={`${hotel.type}`}
              className='max-w-[8rem] sm:max-w-[12rem] h-full rounded-sm object-cover shadow-md'
            />
            <div className='font-bold'>{hotel.name}</div>
            <div className='capitalize'>{hotel.city}</div>
            <div className='font-bold'>
              Starting from ${hotel.cheapestPrice}
            </div>
            <div className=''>
              {hotel.rating}{" "}
              {"☆".repeat(Math.ceil(Math.random() * 9) / 2)}
              <span className='p-2 text-white bg-blue-600'>Excellent</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { FeaturedProperties };
