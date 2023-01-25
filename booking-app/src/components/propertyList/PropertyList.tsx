import { UseFetch } from "@hooks";
import { HotelByType } from "src/types";
import { hotelPhotos } from "./hotelPhotos";

/** Show types of properties like hotels, apartment, etc.. */
function PropertyList() {
  const { data, loading, error } = UseFetch<HotelByType[]>(
    "http://localhost:8800/api/hotels/countByType"
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div className='flex-row '>
      {data &&
        hotelPhotos.map( (src: string, i: number) => (
          <div className='pList' key={src}>
            <div className='pListItem'>
              <img src={src} alt='' className='pListImg' />
              <div className='pListTitles'>
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
