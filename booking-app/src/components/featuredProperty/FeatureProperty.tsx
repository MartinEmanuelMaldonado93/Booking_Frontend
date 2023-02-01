import { UseFetch } from "@hooks";
import { Hotel } from "src/types";

/** Fetch specifically featured `Hotels` */
const FeaturedProperties = () => {
  const { data, loading, error } = UseFetch<Hotel[]>(
    "http://localhost:8800/api/hotels?featured=true&limit=4"
  );

  if (loading) return <div>"Loading..."</div>;

  return (
    <div className='px-4'>
      <div className='text-2xl text-gray-900'>Homes guests love</div>
      <div className='flex flex-wrap justify-evenly'>
        {data?.map((hotel) => (
          <div className='grid gap-2 place-items-center p-6' key={hotel.title}>
            <img
              // src={hotel.photos ? hotel.photos[0] : "https://picsum.photos/200/300"}
              src={`https://picsum.photos/seed/${hotel.type}/300/300`}
              alt=''
              className='max-w-[8rem] sm:max-w-[12rem] h-full rounded-sm object-cover shadow-md'
            />
            <div className='font-bold'>{hotel.name}</div>
            <div className='capitalize'>{hotel.city}</div>
            <div className='font-bold'>
              Starting from ${hotel.cheapestPrice}
            </div>
            {hotel.rating && (
              <div className=''>
                {hotel.rating}{" "}
                {"☆".repeat(Math.ceil(Math.random() * hotel.rating) / 2)}
                <span className='p-2 text-white bg-blue-600'>Excellent</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export { FeaturedProperties };
