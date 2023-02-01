import { UseFetch } from "@hooks";
import { HotelByType } from "@types";
import { hotelPhotos as DummyHotelPhotos } from "@constants";

/** Show properties by type like hotels, apartment, etc.. */
function PropertyList() {
  const { data, loading, error } = UseFetch<HotelByType[]>(
    "http://localhost:8800/api/hotels/countByType"
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div className='px-4'>
      <div className='text-2xl text-gray-900'>Browse by property type</div>
      <div className='flex flex-wrap justify-evenly sm:justify-between'>
        {data &&
          DummyHotelPhotos.map((src: string, i: number) => (
            <div className='card duration-300 hover:shadow-xl' key={src}>
              <div className='card-body p-6 px-1'>
                <img
                  src={src}
                  alt=''
                  className='rounded-md max-w-[10rem] min-w-[10rem] h-full object-cover'
                />
                <h1 className='card-title capitalize'>{data[i].type}</h1>
                <h2>
                  {data[i].count} {data[i].type}
                </h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export { PropertyList };
