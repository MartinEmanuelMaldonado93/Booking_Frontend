import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar, Header } from "@components";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { UseFetch } from "@hooks";
import { Hotel } from "@types";

const List = () => {
  const location = useLocation();
  const hotelId = location.pathname.split("/")[2];
  console.log("hotel id", hotelId);
  // const [destination, setDestination] = useState(location.state.destination);
  // const [date, setDate] = useState(location.state.date);
  const [date, setDate] = useState([new Date()]);
  const [openDate, setOpenDate] = useState(false);
  // const [options, setOptions] = useState(location.state.options);
  const [options, setOptions] = useState<any>();

  const { data, loading } = UseFetch<Hotel>(
    `http://localhost:8800/api/hotels/${hotelId}`
  );

  useEffect(() => {
    console.log("data hotel!", data);
  }, [data]);

  return (
    <div>
      {/* <Navbar />
      <Header type='list' /> */}
      <div className='listContainer'>
        <div className='flex '>
          <div className='p-2 rounded-md max-w-xs shadow-sm bg-yellow-400'>
            {/* Aside */}
            <h1 className='text-center text-xl'>Search</h1>
            <div className='lsItem'>
              <div>Destination</div>
              {/* <input
                className='input py-1 w-full max-w-xs capitalize'
                placeholder={destination}
                type='text'
              /> */}
            </div>
            <div className='lsItem'>
              <div>Check-in Date</div>
              {/* <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </span> */}
              {/* {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )} */}
            </div>
            {/* <div className='lsItem'>
              <label>Options</label>
              <div className='lsOptions'>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                    Min price <small>per night</small>
                  </span>
                  <input type='number' className='lsOptionInput' />
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                    Max price <small>per night</small>
                  </span>
                  <input type='number' className='lsOptionInput' />
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>Adult</span>
                  <input
                    type='number'
                    min={1}
                    className='lsOptionInput'
                    placeholder={options.adult}
                  />
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>Children</span>
                  <input
                    type='number'
                    min={0}
                    className='lsOptionInput'
                    placeholder={options.children}
                  />
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>Room</span>
                  <input
                    type='number'
                    min={1}
                    className='lsOptionInput'
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div> */}
            <button>Search</button>
          </div>
          <div className='listResult'>
            {/* <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
