import format from "date-fns/format";
import { useContext, useState } from "react";
import { FaBed, FaCalendarDay, FaPersonBooth } from "react-icons/fa";
import { DateRange } from "react-date-range";
import { itemDateRange, optionsHotel } from "@types";
import type { Range } from "react-date-range/index";
import {
  CalendarDays,
  Destination,
  OptionsHotel,
  RecreationOptions,
} from "@components";
import { SearchContext } from "@context";
import { useNavigate } from "react-router-dom";

type props = {
  type?: string;
};
function Header({ type }: props) {
  const [dates, setDates] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState<optionsHotel>({
    adult: 0,
    children: 0,
    room: 0,
  });
  const [destination, setDestination] = useState("");
  const { state, dispatch } = useContext(SearchContext);
  const navigate = useNavigate();

  function handleSearch() {
    dispatch({
      type: "NEW_SEARCH",
      payload: { city: destination, dates, options },
    });
    navigate("/hotels", { state: { destination, dates, options } }); // to List.tsx
  }

  return (
    <div className='px-2 text-white '>
      <RecreationOptions />
      <div className='my-4 text-lg sm:text-3xl font-bold'>
        A lifetime of discounts? It's Genius.
      </div>
      <div className='flex flex-wrap my-4 gap-4'>
        <p className='w-full'>
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free Lamabooking account
        </p>
        <button className='btn py-3 px-2 min-h-0 h-auto rounded-sm text-black bg-cyan-50 border-none hover:bg-pink-500 '>
          Sign in / Register
        </button>
      </div>
      <div className='flex flex-wrap p-2 py-1 justify-between items-center translate-y-2/4 rounded-md border-2 border-yellow-200 bg-white text-gray-700 hover:border-yellow-400'>
        <Destination
          destination={destination}
          setDestination={setDestination}
        />
        <CalendarDays dates={dates} setDates={setDates} />
        <OptionsHotel options={options} setOptions={setOptions} />
        <div className='headerSearchItem'>
          <button
            className='btn border-none py-3 px-2 min-h-0 h-auto bg-blue-700 hover:bg-blue-800'
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export { Header };
