import { useContext, useState } from "react";
import { Navbar, SearchItem, RecreationOptions } from "@components";
import { HotelFinded, optionsHotel } from "@types";
import { createHotel } from "@adapters";
import { useFetchBooking } from "@hooks";
import { BASE_URL } from "@models";
import { SearchContext } from "@context";
import { v4 as uuidv4 } from "uuid";
import type { Range } from "react-date-range/index";

const HotelList = () => {
  const { state, dispatch } = useContext(SearchContext);
  const [destination, setDestination] = useState(state.city || "Madrid");
  const [options, setOptions] = useState<optionsHotel>(state.options);
  const [dates, setDates] = useState<Range[]>(state.dates);
  const [minPrice, setMin] = useState<number>(50);
  const [maxPrice, setMax] = useState<number>(999);
  // @Hotels
  // console.log("state", state);
  const opt = {
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
  const { data, loading, error, reFetchData } = useFetchBooking<any>(opt);

  if (data) console.log(data.result);
  function handleSearch() {
    // reFetchData();
  }

  // if (loading) return <div className='w-full'>Loading martin....</div>;

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
        <div className='p-2'>
          <div className='p-2 rounded-md bg-gray-100 text-gray-700 capitalize font-bold text-2xl'>
            {data ? data.result[0].city : null}
          </div>
          {data
            ? data.result.map((hotelInfo: HotelFinded) => (
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
