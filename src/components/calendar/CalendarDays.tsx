import { Dispatch, SetStateAction, useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import type { Range } from 'react-date-range/index';
import { FaCalendarDay } from 'react-icons/fa';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

type props = {
  dates: Range[];
  setDates: Dispatch<SetStateAction<Range[]>>;
};
function CalendarDays({ dates, setDates }: props) {
  const FromDate = format(dates[0].startDate!, 'MM/dd/yyyy');
  const ToDate = format(dates[0].endDate!, 'MM/dd/yyyy');

  return (
    <div className='flex flex-wrap items-center gap-2  dropdown dropdown-hover dropdown-bottom  hover:z-10'>
      <FaCalendarDay />
      <span tabIndex={0} className='flex gap-4 text-lg cursor-pointer'>
        {`${FromDate} to ${ToDate}`}
      </span>
      <div
        tabIndex={0}
        className='dropdown-content menu relative max-w-xs p-2 border rounded-md bg-base-100 border-gray shadow-md text-center'
      >
        <DateRange
          className=''
          editableDateInputs={true}
          onChange={(item) => setDates([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={dates}
          minDate={new Date()}
        />
      </div>
    </div>
  );
}

export { CalendarDays };
