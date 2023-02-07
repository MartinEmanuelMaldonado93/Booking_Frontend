import { UseFetch } from "@hooks";
import { citiesInfo } from "@constants";
import { BASE_URL } from "@models";

const citiesQuery = citiesInfo.map((c) => c.city.toLowerCase()).join(",");
/** Fetch specifically featured `cities` */
function Featured() {
  const { data, loading, error } = UseFetch<number[]>(
    `${BASE_URL}/api/hotels/countByCity?cities=${citiesQuery}`
  );

  if (loading) return <div className='animate-pulse text-4xl'>Loading...</div>;

  return (
    <div className='m-4 px-4'>
      <div className='flex flex-wrap justify-around md:justify-between gap-2 my-4 pointer-events-none z-0'>
        {data?.map((amount, i) => (
          <div
            key={Math.random()}
            className='overflow-hidden bg-base-100 shadow-lg'
          >
            <img
              src={citiesInfo[i].img}
              alt=''
              className='z-0 max-w-[10rem] sm:max-w-[15rem] object-cover rounded-lg'
            />
            <div className='absolute pointer-events-none z-0 translate-x-4 -translate-y-[120%]  text-white text-xl sm:text-3xl font-bold '>
              <h1>{citiesInfo[i].city}</h1>
              <h2 className='dark:text-gray-200 z-0'>{data[i]} properties</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Featured };
