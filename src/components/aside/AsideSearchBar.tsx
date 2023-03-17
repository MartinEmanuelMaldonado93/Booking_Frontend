import { SearchContext } from "@context";
import { OptionsHotelType } from "@types";
import { useContext, useRef, useState } from "react";
import { CalendarDays } from "../calendar/CalendarDays";
import { OptionsHotel } from "../optionsHotel/OptionsHotel";
import type { Range } from "react-date-range/index";
import { useLocationsSWR } from "@api";

function AsideSearchBar() {
  const { state, dispatch } = useContext(SearchContext);
  const destinationRef = useRef<string>(state.city);
  const [options, setOptions] = useState<OptionsHotelType>(state.options);
  const [dates, setDates] = useState<Range[]>(state.dates);
  const [minPrice, setMin] = useState<number>(50);
  const [maxPrice, setMax] = useState<number>(999);
  const fetchLocation = false;

  const {
    data: dataLocation,
    error: ErrorLocation,
    isLoading: loadingLocation,
  } = useLocationsSWR(fetchLocation ? destinationRef.current : null);

  function handleSearch() {
    // dispatch Search
    dispatch!({
      type: "NEW_SEARCH",
      payload: {
        dates,
        options,
        // city: dataLocation[0].city_name,
        city: state.city,
        // destination_id: +dataLocation[0].dest_id,
        // type: dataLocation[0].dest_type,
      },
    });
  }

  return (
    <aside className='grid sm:gap-2 p-2 rounded-md max-w-xs h-min shadow-sm bg-yellow-500'>
      <h2 className='text-xl font-bold'>Search</h2>
      <div className='font-bold'>Destination</div>
      <input
        className='input py-1 w-full max-w-xs capitalize'
        placeholder={destinationRef.current}
        onChange={({ target }) => (destinationRef.current = target.value)}
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
            !Number.isNaN(target.value) ? setMin(Number(target.value)) : null
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
  );
}
export default AsideSearchBar;
