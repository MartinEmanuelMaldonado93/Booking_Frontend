import { UseFetch } from "@hooks";
import { citiesInfo } from "../../api/featuredHotels";

const citiesAmountQuery = citiesInfo.map((c) => c.city.toLowerCase()).join(",");
/** Fetch specifically featured `cities` */
function Featured() {
  const { data, loading, error } = UseFetch<number[]>(
    `http://localhost:8800/api/hotels/countByCity?cities=${citiesAmountQuery}`
  );

  if (loading) return <div className='animate-pulse text-4xl'>Loading...</div>;

  return (
    <>
      {data?.map((amount, i) => (
        <div
          key={Math.random()}
          className='max-w-xs overflow-hidden bg-base-100  shadow-lg dark:bg-gray-800'
        >
          <img
            src={citiesInfo[i].img}
            alt=''
            className='object-cover h-56 rounded-lg'
          />
          <div className='featuredTitles py-5 text-center'>
            <h1>{citiesInfo[i].city}</h1>
            <h2 className='text-sm text-gray-700 dark:text-gray-200'>
              {data[i]} properties
            </h2>
          </div>
        </div>
      ))}
    </>
  );
}

export { Featured };
