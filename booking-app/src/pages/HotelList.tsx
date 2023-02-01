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
import { Hotel, optionsHotel } from "@types";
import { getIDHotelLocation } from "@utils";
import type { Range } from "react-date-range/index";
// import HeaderLayout from "@components";
// import RecreationOptions from "src/components/header/RecreationOptions";

const List = () => {
  // const hotelId = getIDHotelLocation();
  const location = useLocation();
  const [destination, setDestination] = useState(
    location.state.destination as string
  );
  const [options, setOptions] = useState(
    location.state.options as optionsHotel
  );
  const [dates, setDates] = useState(location.state.dates as Range[]);
  const [minPrice, setMin] = useState<number>(0);
  const [maxPrice, setMax] = useState<number>(999);

  const { data, loading, error, reFetchData } = UseFetch<Hotel[]>(
    `http://localhost:8800/api/hotels?city=${destination}&min=${minPrice}&max=${maxPrice}`
  );

  useEffect(() => {
    console.log("data hotel!", data);
  }, [data]);

  if (loading) return <div>Loading...</div>;

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
          <div className=''>
            <div className='font-bold'>Destination</div>
            <input
              className='input py-1 w-full max-w-xs capitalize'
              placeholder={destination}
              type='text'
            />
          </div>
          <div>
            <div>Check-in Date</div>
            <div className='bg-base-200 rounded-md p-2'>
              <CalendarDays dates={dates} setDates={setDates} />
              <OptionsHotel options={options} setOptions={setOptions} />
            </div>
          </div>

          <h2 className='font-bold'>Options</h2>
          <div className='grid justify-items-end gap-2 grid-cols-2 p-3'>
            <div className=''>
              Min price <small>(per night)</small>
            </div>
            <input type='number' className='input max-w-[5rem]' />
            <span className=''>
              Max price <small>(per night)</small>
            </span>
            <input type='number' className='input max-w-[5rem]' />
            <span className='justify-self-center'>Adult</span>
            <input
              type='number'
              min={1}
              className='input max-w-[5rem]'
              placeholder={options.adult?.toString()}
            />
            <span className='justify-self-center'>Children</span>
            <input
              type='number'
              min={0}
              className='input max-w-[5rem]'
              placeholder={options.children?.toString()}
            />
            <span className='justify-self-center'>Room</span>
            <input
              type='number'
              min={1}
              className='input inline max-w-[5rem]'
              placeholder={options.room?.toString()}
            />
          </div>
          <button className='btn btn-primary'>Search</button>
        </aside>
        <div className='p-2  '>
          {data?.map((item) => (
            <SearchItem hotelItem={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
