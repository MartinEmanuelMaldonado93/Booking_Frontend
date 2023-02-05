import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Footer,
  Header,
  MailList,
  Navbar,
  RecreationOptions,
} from "@components";
import {
  FaAngleLeft,
  FaAngleRight,
  FaRegWindowClose,
  FaSearchLocation,
} from "react-icons/fa";
import { UseFetch } from "@hooks";
import { Hotel } from "@types";
import { getDifferenceOfDays, getIDHotelLocation } from "@utils";
import { SearchContext } from "@context";
import { BASE_URL, PRIVATE, PUBLIC } from "../models";

const HotelSelected = () => {
  const location = useLocation();
  const ID = location.state._id as number;

  const { data, loading } = UseFetch<Hotel>(
    `${BASE_URL}/api/hotels/find/${ID}`
  );
  // const [slideNumber, setSlideNumber] = useState(0);
  // const [openModal, setOpenModal] = useState(false);
  // const [open, setOpen] = useState(false);
  //   const { user } = useContext(AuthContext);
  const navigate = useNavigate(); // to Login
  const { state } = useContext(SearchContext);
  // console.log(state);

  // let d1 = state.dates![0].startDate || new Date();
  // let d2 = state.dates![0].endDate || new Date("2/13/2023");
  let d1 = new Date();
  let d2 = new Date("2/13/2023");

  let totalDays = getDifferenceOfDays(d1, d2);
  // console.log(totalDays);
  // const handleOpen = (i) => {
  //   setSlideNumber(i);
  //   setOpen(true);
  // };

  // const handleMove = (direction) => {
  //   let newSlideNumber;

  //   if (direction === "l") {
  //     newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
  //   } else {
  //     newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
  //   }

  //   setSlideNumber(newSlideNumber);
  // };

  // redirects to Login
  const handleReserve = () => {
    // console.log(state);
    // dispatch({type:"NEW_SEARCH",payload:{city:des}})
    navigate(PRIVATE.CHECKOUT);
  };
  // if (loading && !data) return <div>Loading...</div>;

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
        <div className='flex justify-between m-8'>
          <div className=''>
            <h1 className='font-bold text-3xl'>{data?.name}</h1>
            <div className='p-2'>
              <span className='capitalize'>{data?.address}</span>
              <FaSearchLocation className='inline mx-2' />
            </div>
            <span className='text-blue-600 text-lg'>
              Excellent location – {data?.distance}m from center
            </span>
            <div className='text-green-600 text-lg'>
              Book a stay over ${data?.cheapestPrice} at this property and get a
              free airport taxi
            </div>
            <div className=''>
              {data?.photos?.map((photo, i) => (
                <div className='' key={i}>
                  <img
                    // onClick={() => handleOpen(i)}
                    src={photo}
                    alt=''
                    className=''
                  />
                </div>
              ))}
            </div>
            <div className='p-2'>
              <h1 className='text-2xl'>{data?.title}</h1>
              <p className='text-xl'>{data?.desc}</p>
            </div>
          </div>

          <div className='flex flex-col gap-4 p-4 max-w-[16rem] bg-blue-100 rounded-md border border-gray-300'>
            <h1 className='font-bold text-gray-700'>
              Perfect for a {totalDays}-night stay!
            </h1>
            <span>
              Located in the real heart of Krakow, this property has an
              excellent location score of 9.8!
            </span>
            <h2>
              <b className='font-bold text-2xl'>
                $
                {data
                  ? totalDays * data.cheapestPrice * (state.options.room || 0)
                  : null}
              </b>{" "}
              ({totalDays} nights)
            </h2>
            <button className='btn btn-primary' onClick={handleReserve}>
              Reserve or Book Now!
            </button>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
      {/* {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />} */}
    </div>
  );
};

export default HotelSelected;
