import { UseFetch } from "@hooks";
import { Hotel } from "src/types";

/** Fetch specifically featured `Hotels` */
const FeaturedProperties = () => {
  const { data, loading, error } = UseFetch<Hotel[]>(
    "http://localhost:8800/api/hotels?featured=true&limit=4"
  );

  if (loading) return <div>"Loading..."</div>;

  return (
    <div className='m-2 p-2'>
      <div className='text-2xl text-gray-700'>Homes guests love</div>
      <div className='flex flex-wrap p-2 justify-evenly'>
        {data?.map((hotel) => (
          <div className='' key={hotel.title}>
            <img
              // src={hotel.photos ? hotel.photos[0] : "https://picsum.photos/200/300"}
              src={`https://picsum.photos/seed/${hotel.type}/200/300`}
              alt=''
              className='rounded-md min-w-[10rem] max-w-[12rem] h-full max-h-[8rem] object-cover shadow-md'
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
                <span>Excellent</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export { FeaturedProperties };
