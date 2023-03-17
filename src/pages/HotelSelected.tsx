import { useContext, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Footer, MailList, Navbar, RecreationOptions } from "@components";
import { FaSearchLocation } from "react-icons/fa";
import { Hotel } from "@types";
import { getDifferenceOfDays } from "@utils";
import { SearchContext } from "@context";
import { BASE_URL, PRIVATE, PUBLIC } from "@routes";
import { adaptHotel } from "@adapters";

const HotelSelected = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(SearchContext);
  const hotelSelected = useRef<Hotel>();

  // const opt = {
  //   method: "GET",
  //   url: `${BASE_URL}/hotels/search`,
  //   params: {
  //     room_number: state.options.room,
  //     checkout_date: "2023-08-19",
  //     dest_type: "city",
  //     dest_id: state.destination_id,
  //     adults_number: state.options.adult,
  //     locale: "en-us",
  //     checkin_date: "2023-08-18",
  //     order_by: "popularity",
  //     filter_by_currency: "USD",
  //     units: "metric",
  //     page_number: "0",
  //     children_number: state.options.children,
  //     include_adjacency: "true",
  //     categories_filter_ids: "class::2,class::4,free_cancellation::1",
  //     children_ages: "5,0",
  //   },
  //   headers: {
  //     "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
  //     "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
  //   },
  // };
  // const { data, loading, error, reFetchData } = useFetchBooking<any>(opt);

  // useEffect(() => {
  //   if (data) {
  //     hotelSelected.current = createHotel(data.result[0]);
  //   }
  // }, [data]);

  let totalDays: number | undefined = getDifferenceOfDays(state);

  const handleReserve = () => navigate(PRIVATE.PURCHASE);

  return (
    <div className='h-screen flex flex-col gap-16 justify-between content-center items-center mx-auto'>
      <div className='px-4 bg-blue-600 w-full flex justify-center'>
        <div className='max-w-[70rem]'>
          <Navbar />
          <RecreationOptions />
        </div>
      </div>
      <div className='max-w-[70rem]'>
        {/* images carousel */}
        <div className='flex flex-wrap  justify-between m-8'>
          <div className=''>
            <h1 className='font-bold text-3xl'>
              {hotelSelected.current?.name}
            </h1>
            <div className='p-2'>
              <span className='capitalize'>
                {hotelSelected.current?.address}
              </span>
              <FaSearchLocation className='inline mx-2' />
            </div>
            <span className='text-blue-600 text-lg'>
              Excellent location – {hotelSelected.current?.distance}m from
              center
            </span>
            <div className='text-green-600 text-lg'>
              Book a stay over ${hotelSelected.current?.cheapestPrice} at this
              property and get a free airport taxi
            </div>
            <div className=''>
              {hotelSelected.current?.photos?.map((photo, i) => (
                <div className='' key={i}>
                  <img src={photo} alt='' className='' />
                </div>
              ))}
            </div>
            <div className='p-2'>
              <h1 className='text-2xl'>{hotelSelected.current?.title}</h1>
              <p className='text-xl'>{hotelSelected.current?.desc}</p>
            </div>
          </div>

          <div className='flex flex-col gap-4 p-4 max-w-[16rem] bg-blue-100 rounded-md border border-gray-300'>
            {totalDays ? (
              <>
                <h1 className='font-bold text-gray-700'>
                  Perfect for a {totalDays}-night stay!
                </h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <b className='font-bold text-2xl'>
                  $
                  {totalDays *
                    (hotelSelected.current?.cheapestPrice || 1) *
                    (state.options.room || 0)}
                </b>
                ({totalDays} nights)
                <button className='btn btn-primary' onClick={handleReserve}>
                  Reserve or Book Now!
                </button>
              </>
            ) : (
              <>
                <WarningMessagge text='Something went wrong with total days!' />
                <Link className='btn' to={PUBLIC.HOME}>
                  Come back and select the days...
                </Link>
              </>
            )}
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
      {/* {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />} */}
    </div>
  );
};

function WarningMessagge({ text }: { text: string }) {
  return (
    <div className='alert alert-warning shadow-lg'>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='stroke-current flex-shrink-0 h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
          />
        </svg>
        <span>{text}</span>
      </div>
    </div>
  );
}
export default HotelSelected;
