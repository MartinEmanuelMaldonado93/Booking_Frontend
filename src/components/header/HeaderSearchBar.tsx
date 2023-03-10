import { useContext, useEffect, useState } from "react";
import type { Range } from "react-date-range/index";
import { useNavigate } from "react-router-dom";
import {
  CalendarDays,
  Destination,
  OptionsHotel,
  RecreationOptions,
  SearchBtnLoading,
} from "@components";
import { optionsHotel } from "@types";
import { AuthContext, SearchContext } from "@context";
import { PUBLIC } from "@models";
import { useLocationsSWR } from "@api";

export default function HeaderSearchBar() {
  const { state: stateSearch, dispatch } = useContext(SearchContext);
  const [dates, setDates] = useState<Range[]>(stateSearch.dates);
  const [options, setOptions] = useState<optionsHotel>(stateSearch.options);
  const [destination, setDestination] = useState<string>("");
  const [refetch, setRefetch] = useState<boolean>(false);

  const navigate = useNavigate();
  const { state: stateUser } = useContext(AuthContext);

  const { data, error, isLoading } = useLocationsSWR(
    refetch ? destination : null
  );

  useEffect(() => {
    if (!data) return;
    dispatch!({
      type: "NEW_SEARCH",
      payload: {
        city: destination,
        destination_id: +data[0].dest_id,
        type: data[0].dest_type,
        dates,
        options,
      },
    });
    navigate(PUBLIC.HOTELS_LIST);
  }, [data]);

  async function handleNewSearch() {
    setRefetch((p) => !p);
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
        {!stateUser.user ? (
          <button className='btn py-3 px-2 min-h-0 h-auto  text-black bg-cyan-50 border-none hover:bg-pink-500 '>
            Sign in / Register
          </button>
        ) : null}
      </div>
      <div className='flex flex-wrap gap-2 p-2 py-1 justify-between items-center translate-y-2/4 rounded-md border-2 border-yellow-200 bg-white text-gray-700 hover:border-yellow-400'>
        <Destination
          destination={destination}
          setDestination={setDestination}
        />
        <CalendarDays dates={dates} setDates={setDates} />
        <OptionsHotel options={options} setOptions={setOptions} />
        <div className='headerSearchItem'>
          {refetch ? (
            <SearchBtnLoading />
          ) : (
            <button
              className='btn border-none py-3 px-2 min-h-0 h-auto bg-blue-700 hover:bg-blue-800'
              onClick={handleNewSearch}
            >
              Search
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
