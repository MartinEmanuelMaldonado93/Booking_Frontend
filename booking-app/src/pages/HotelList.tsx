import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Navbar,
  Header,
  CalendarDays,
  OptionsHotel,
  SearchItem,
  RecreationOptions,
  HeaderLayout,
} from "@components";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { UseFetch } from "@hooks";
import { Hotel, navegationHotelParams, optionsHotel } from "@types";
import { getIDHotelLocation } from "@utils";
import type { Range } from "react-date-range/index";
import { BASE_URL } from "../models";

const HotelList = () => {
  const location = useLocation();
  const hotelParams = location.state as navegationHotelParams;
  const [destination, setDestination] = useState(
    hotelParams.destination ?? "madrid"
  );
  const [options, setOptions] = useState(hotelParams.options);
  const [dates, setDates] = useState(hotelParams.dates);
  const [minPrice, setMin] = useState<number>(50);
  const [maxPrice, setMax] = useState<number>(999);

  const { data, loading, error, reFetchData } = UseFetch<Hotel[]>(
    `${BASE_URL}/api/hotels?city=${destination}&min=${minPrice}&max=${maxPrice}`
  );
  
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
        <aside className='grid sm:gap-2 p-2 rounded-md max-w-xs shadow-sm bg-purple-300'>
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
              // pattern='/[0-9]*/'
              // value={minPrice}
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
            {data ? data[0].city : null}
          </div>
          {loading ? (
            <div className='w-full'>Loading....</div>
          ) : (
            data?.map((hotelItem) => (
              <div key={Math.random().toString()}>
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
