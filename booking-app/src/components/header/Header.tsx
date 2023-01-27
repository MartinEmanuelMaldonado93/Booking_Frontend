import format from "date-fns/format";
import { useContext, useState } from "react";
import { FaBed, FaCalendarDay, FaPersonBooth } from "react-icons/fa";
import { DateRange } from "react-date-range";
import RecreationOptions from "./RecreationOptions";
import { itemDateRange, optionsHotel } from "@types";
import type { Range } from "react-date-range/index";
import { CalendarDays, Destination, OptionsHotel } from "@components";
import { SearchContext } from "@context";
import { useNavigate } from "react-router-dom";

type props = {
  type?: string;
};
function Header({}: props) {
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
  const { dispatch } = useContext(SearchContext);
  const navigate = useNavigate();

  function handleSearch() {
    dispatch({
      type: "NEW_SEARCH",
      payload: { city: destination, dates, options },
    });
    navigate("/hotels", { state: { destination, dates, options } });// to List.tsx
  }

  return (
    <div>
      <RecreationOptions />
      <div className='text-2xl'>A lifetime of discounts? It's Genius.</div>
      <div className='flex justify-between'>
        <p className=''>
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free Lamabooking account
        </p>
        <button className='btn btn-info w-min rounded-lg'>
          Sign in / Register
        </button>
      </div>
      <div className='flex bg-blue-200'>
        <Destination
          destination={destination}
          setDestination={setDestination}
        />
        <CalendarDays dates={dates} setDates={setDates} />
        <OptionsHotel options={options} setOptions={setOptions} />
        <div className='headerSearchItem'>
          <button className='btn btn-secondary' onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export { Header };
