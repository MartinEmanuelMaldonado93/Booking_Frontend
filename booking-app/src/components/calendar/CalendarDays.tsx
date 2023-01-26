import { Dispatch, SetStateAction, useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import type { Range } from "react-date-range/index";
import { FaCalendarDay } from "react-icons/fa";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

type props = {
  dates: Range[];
  setDates: Dispatch<SetStateAction<Range[]>>;
};
function CalendarDays({ dates, setDates }: props) {
  const [isOpen, setIsOpen] = useState(false);
  const FromDate = format(dates[0].startDate!, "MM/dd/yyyy");
  const ToDate = format(dates[0].endDate!, "MM/dd/yyyy");
  const toggleOpen = () => setIsOpen((p) => !p);

  return (
    <div className='flex'>
      <FaCalendarDay />
      <span className='cursor-pointer' onClick={toggleOpen}>
        {`${FromDate} to ${ToDate}`}
      </span>
      {isOpen && (
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setDates([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={dates}
          minDate={new Date()}
          className='relative'
        />
      )}
    </div>
  );
}

export { CalendarDays };
