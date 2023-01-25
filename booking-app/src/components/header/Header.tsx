import format from "date-fns/format";
import { useState } from "react";
import { FaBed, FaCalendarDay, FaPersonBooth } from "react-icons/fa";
import DateRange from "react-date-range";
import RecreationOptions from "./RecreationOptions";

function Header() {
  const [destination, setDestination] = useState<string>("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  // const handleOption = (name:string, operation:string) => {
  //   setOptions((prev) => {
  //     return {
  //       ...prev,
  //       // [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
  //     };
  //   });
  // };

  return (
    <>
      <RecreationOptions />
      <h1 className='text-3xl'>A lifetime of discounts? It's Genius.</h1>
      <p className='headerDesc'>
        Get rewarded for your travels – unlock instant savings of 10% or more
        with a free Lamabooking account
      </p>
      <button className='btn btn-outlin btn-info gap-2 rounded-lg'>
        Sign in / Register
      </button>
      <div className='flex bg-blue-200'>
        <div className='headerSearchItem'>
          <FaBed />
          <input
            type='text'
            placeholder='Where are you going?'
            className='headerSearchInput'
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className='headerSearchItem'>
          <FaCalendarDay />
          <span
            onClick={() => setOpenDate(!openDate)}
            className='headerSearchText'
          >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}</span>
          {/* {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )} */}
        </div>
        <div className='flex'>
          <FaPersonBooth />
          <span
            onClick={() => setOpenOptions(!openOptions)}
            className='headerSearchText'
          >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
          <div className='options flex'>
            <div className='optionItem'>
              <span className='optionText'>Adult</span>
              <div className='optionCounter'>
                <button
                  disabled={options.adult <= 1}
                  className='optionCounterButton'
                  // onClick={() => handleOption("adult", "d")}
                >
                  -
                </button>
                <span className='optionCounterNumber'>{options.adult}</span>
                <button
                  className='optionCounterButton'
                  // onClick={() => handleOption("adult", "i")}
                >
                  +
                </button>
              </div>
            </div>
            <div className='optionItem'>
              <span className='optionText'>Children</span>
              <div className='optionCounter'>
                <button
                  disabled={options.children <= 0}
                  className='optionCounterButton'
                  // onClick={() => handleOption("children", "d")}
                >
                  -
                </button>
                <span className='optionCounterNumber'>{options.children}</span>
                <button
                  className='optionCounterButton'
                  // onClick={() => handleOption("children", "i")}
                >
                  +
                </button>
              </div>
            </div>
            <div className='optionItem'>
              <span className='optionText'>Room</span>
              <div className='optionCounter'>
                <button
                  disabled={options.room <= 1}
                  className='optionCounterButton'
                  // onClick={() => handleOption("room", "d")}
                >
                  -
                </button>
                <span className='optionCounterNumber'>{options.room}</span>
                <button
                  className='optionCounterButton'
                  // onClick={() => handleOption("room", "i")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Header };
