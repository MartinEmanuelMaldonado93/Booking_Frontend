import { useContext, useState } from "react";
import {
  Navbar,
  SearchItem,
  RecreationOptions,
  CalendarDays,
  OptionsHotel,
} from "@components";
import { HotelAPI, optionsHotel } from "@types";
import { createHotel } from "@adapters";
import { useFetchBooking } from "@hooks";
import { BASE_URL } from "@models";
import { SearchContext } from "@context";
import { v4 as uuidv4 } from "uuid";
import type { Range } from "react-date-range/index";
import { RawAxiosRequestConfig } from "axios";

const HotelList = () => {
  const { state, dispatch } = useContext(SearchContext);
  const [destination, setDestination] = useState(state.city || "Madrid");
  const [options, setOptions] = useState<optionsHotel>(state.options);
  const [dates, setDates] = useState<Range[]>(state.dates);
  const [minPrice, setMin] = useState<number>(50);
  const [maxPrice, setMax] = useState<number>(999);

  const params: RawAxiosRequestConfig = {
    method: "GET",
    url: `${BASE_URL}/hotels/search`,
    params: {
      room_number: options.room,
      checkout_date: "2023-08-19",
      dest_type: "city",
      dest_id: state.destination_id,
      adults_number: options.adult,
      locale: "en-us",
      checkin_date: "2023-08-18",
      order_by: "popularity",
      filter_by_currency: "USD",
      units: "metric",
      page_number: "0",
      children_number: options.children,
      include_adjacency: "true",
      categories_filter_ids: "class::2,class::4,free_cancellation::1",
      children_ages: "5,0",
    },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
    },
  };
  const { data, loading, error, reFetchData } = useFetchBooking<any>({
    options: params,
  });

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
        {/* Hotel list by Location */}
        <aside className='grid sm:gap-2 p-2 rounded-md max-w-xs max-h-[40rem] shadow-sm bg-yellow-500'>
          <h2 className='text-xl font-bold'>Search</h2>
          <div className='font-bold'>Destination</div>
          <input
            className='input py-1 w-full max-w-xs capitalize'
            placeholder={destination}
            onChange={({ target }) => setDestination(target.value)}
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
            {data ? data.result[0].city : null}
          </div>
          {loading ? <div>Loading...</div> : null}
          {data
            ? data.result.map((hotelInfo: HotelAPI) => (
                <div key={uuidv4()}>
                  <SearchItem hotel={createHotel(hotelInfo)} />
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default HotelList;
