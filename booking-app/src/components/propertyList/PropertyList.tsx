import { UseFetch } from "@hooks";
import { HotelByType } from "@types";
import { hotelPhotos } from "@constants";

/** Show types of properties like hotels, apartment, etc.. */
function PropertyList() {
  const { data, loading, error } = UseFetch<HotelByType[]>(
    "http://localhost:8800/api/hotels/countByType"
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div className='flex flex-wrap '>
      {data &&
        hotelPhotos.map((src: string, i: number) => (
          <div className='' key={src}>
            <div className=''>
              <img src={src} alt='' className='rounded-md max-w-[15rem]' />
              <div className=''>
                <h1>{data[i].type}</h1>
                <h2>
                  {data[i].count} {data[i].type}
                </h2>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
export { PropertyList };
