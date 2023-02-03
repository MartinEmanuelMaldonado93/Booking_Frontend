// import Navbar from "@components/navbar/Navbar";
// import Header from "@components/header/Header";
// import MailList from "@components/mailList/MailList";
// import Footer from "@components/footer/Footer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCircleArrowLeft,
//   faCircleArrowRight,
//   faCircleXmark,
//   faLocationDot,
// } from "@fortawesome/free-solid-svg-icons";
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

const HotelPage = () => {
  const location = useLocation();
  const idHotel = location.state._id as number;
  const { data, loading } = UseFetch<Hotel | undefined>(
    `http://localhost:8800/api/hotels/find/${idHotel}`
  );

  useEffect(() => {
    // return () => {
    //   second;
    // };
  }, []);

  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);

  //   const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { state, dispatch } = useContext(SearchContext);

  let d1,
    d2,
    totalDays = 0;
  if (state.dates && state.dates.length > 0) {
    d1 = state.dates[0].startDate!;
    d2 = state.dates[0].endDate!;

    totalDays = getDifferenceOfDays(d1, d2);
  }
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
  const handleReserve = () => {
    // redirects to Login
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
        {/* {open && (
              <div className='slider'>
                <span className='close' onClick={() => setOpen(false)}>
                  <FaRegWindowClose />
                </span>
                <span className='arrow' onClick={() => handleMove("l")}>
                  <FaAngleLeft />
                </span>
                <div className='sliderWrapper'>
                  <img
                    src={data.photos[slideNumber]}
                    alt=''
                    className='sliderImg'
                  />
                </div>
                <span className='arrow' onClick={() => handleMove("r")}>
                  <FaAngleRight />
                </span>
              </div>
            )} */}
        <div className=''>
          {/* Redirects to login !!*/}
          <button onClick={handleReserve} className=''>
            Reserve or Book Now!
          </button>
          <h1 className='font-bold text-3xl'>{data?.name}</h1>
          <div className=''>
            <FaSearchLocation className='inline mx-2' />
            <span>{data?.address}</span>
          </div>
          <span className='text-blue-600'>
            Excellent location – {data?.distance}m from center
          </span>
          <div className='text-green-600'>
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
          <div className=''>
            <div className=''>
              <h1 className=''>{data?.title}</h1>
              <p className=''>{data?.desc}</p>
            </div>
          </div>
          <div className='grid gap-2 bg-blue-100 rounded-md border border-gray-300 p-2 max-w-[16rem]'>
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
            <button className='btn btn-primary'>Reserve or Book Now!</button>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
      {/* {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />} */}
    </div>
  );
};

export default HotelPage;
