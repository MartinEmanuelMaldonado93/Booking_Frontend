import format from "date-fns/format";
import { useState } from "react";
import { FaBed, FaCalendarDay, FaPersonBooth } from "react-icons/fa";
import { DateRange } from "react-date-range";
import RecreationOptions from "./RecreationOptions";
import { itemDateRange, optionsHotel } from "@types";
import type { Range } from "react-date-range/index";
import { CalendarDays, Destination, OptionsHotel } from "@components";
type props = {
  type?:string
}
function Header({}:props) {
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

  return (
    <>
      {/* <RecreationOptions /> */}
      {/* <h1 className='text-3xl'>A lifetime of discounts? It's Genius.</h1>
      <p className='headerDesc'>
        Get rewarded for your travels – unlock instant savings of 10% or more
        with a free Lamabooking account
      </p>
      <button className='btn btn-outlin btn-info gap-2 rounded-lg'>
        Sign in / Register
      </button> */}
      <div className='flex bg-blue-200'>
        {/* <Destination />
        <CalendarDays dates={dates} setDates={setDates} /> */}
        <OptionsHotel options={options} setOptions={setOptions} />
      </div>
    </>
  );
}

export { Header };
