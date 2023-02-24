import { useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Navbar,
  CalendarDays,
  OptionsHotel,
  SearchItem,
  RecreationOptions,
} from "@components";
import { UseFetch, useFetchBooking } from "@hooks";
import { Hotel, navegationHotelParams } from "@types";
import { BASE_URL } from "../models";
import { v4 as uuidv4 } from "uuid";
// import useFetchBooking from "src/hooks/useFetchBooking";

const HotelList = () => {
  const location = useLocation();
  const hotelParams = location.state as navegationHotelParams;
  const [destination, setDestination] = useState(
    hotelParams.destination || "madrid"
  );
  const [options, setOptions] = useState(hotelParams.options);
  const [dates, setDates] = useState(hotelParams.dates);
  const [minPrice, setMin] = useState<number>(50);
  const [maxPrice, setMax] = useState<number>(999);
  const opt = {
    method: "GET",
    url: `${BASE_URL}hotels/locations`,
    params: { name: destination, locale: "en-us" },
    headers: {
      "X-RapidAPI-Key": import.meta.env.API_KEY,
      "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
    },
  };
  const { data, loading, error, reFetchData } = useFetchBooking<any>(opt);

  function handleSearch() {
    reFetchData();
  }

  return (
    <>
      <div className='px-4 bg-blue-600 w-full flex justify-center'>
        <div className='max-w-[70rem]'>
          <Navbar />
          <RecreationOptions />
        </div>
      </div>
      <div className='flex justify-center flex-wrap lg:flex-nowrap p-2 max-w-[70rem]  m-auto'>
        <aside className='grid sm:gap-2 p-2 rounded-md max-w-xs shadow-sm bg-yellow-500'>
          <h2 className='text-xl font-bold'>Search</h2>
          <div className='font-bold'>Destination</div>
          <input
            className='input py-1 w-full max-w-xs'
            placeholder={destination}
            onChange={(e) => setDestination(e.target.value)}
            type='text'
          />

          <div className='font-bold'>Check-in Date</div>
          <div className='bg-base-200 rounded-md p-2'>
            <CalendarDays dates={dates} setDates={setDates} />
            <OptionsHotel options={options} setOptions={setOptions} />
          </div>

          <h2 className='font-bold'>Options</h2>
          <div className='grid justify-items-end gap-2 grid-cols-2 p-3'>
            <div className=''>
              Min price <small>(per night)</small>
            </div>
            <input
              className='input max-w-[5rem]'
              pattern='/[0-9]*/'
              onChange={({ target }) =>
                !Number.isNaN(target.value)
                  ? setMin(Number(target.value))
                  : null
              }
            />
            <span className=''>
              Max price <small>(per night)</small>
            </span>
            <input
              className='input max-w-[5rem]'
              pattern='/[0-9]*/'
              value={maxPrice}
              onChange={({ target }) => setMax(+target.value)}
            />
            <span className='justify-self-center'>Adult</span>
            <input
              className='input max-w-[5rem]'
              min={1}
              placeholder={options.adult?.toString()}
              onChange={({ target }) =>
                setOptions((p) => ({
                  ...p,
                  adult: +target.value,
                }))
              }
            />
            <span className='justify-self-center'>Children</span>
            <input
              className='input max-w-[5rem]'
              min={0}
              placeholder={options.children?.toString()}
              onChange={({ target }) =>
                setOptions((p) => ({
                  ...p,
                  children: +target.value,
                }))
              }
            />
            <span className='justify-self-center'>Room</span>
            <input
              className='input inline max-w-[5rem]'
              min={1}
              placeholder={options.room?.toString()}
              onChange={({ target }) =>
                setOptions((p) => ({
                  ...p,
                  room: +target.value,
                }))
              }
            />
          </div>
          <button onClick={handleSearch} className='btn btn-primary'>
            Search
          </button>
        </aside>

        <div className='p-2'>
          <div className='p-2 rounded-md bg-gray-100 text-gray-700 capitalize font-bold text-2xl'>
            {/* {data ? data[0].city : null} */}
          </div>
          {loading ? (
            <div className='w-full'>Loading....</div>
          ) : (
            data?.map((hotelItem) => (
              <div key={uuidv4()}>
                <SearchItem hotel={hotelItem} />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default HotelList;
