import { UseFetch } from "@hooks";
import { HotelByType } from "@types";
import { hotelPhotos } from "@constants";
import { BASE_URL } from "@models";

/** Show properties by type like hotels, apartment, etc.. */
function PropertyList() {
  const { data, loading, error } = UseFetch<HotelByType[]>(
    `${BASE_URL}/api/hotels/countByType`
  );

  if (loading) return <div>Loading...</div>;
  console.log(data);
  return (
    <div className='px-4 overflow-x-scroll sm:overflow-x-auto'>
      <div className='text-2xl text-gray-900'>Browse by property type</div>
      <div className='flex translate-x-[70%] sm:translate-x-0 sm:flex-wrap justify-evenly sm:justify-between'>
        {data &&
          hotelPhotos.map((src: string, i: number) => (
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
