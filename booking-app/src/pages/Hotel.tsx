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
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Footer, Header, MailList, Navbar } from "@components";
import {
  FaAngleLeft,
  FaAngleRight,
  FaRegWindowClose,
  FaSearchLocation,
} from "react-icons/fa";
import { UseFetch, UseHotelByIdUrl } from "@hooks";
import { Hotel } from "@types";

const HotelPage = () => {
  const idHotel = UseHotelByIdUrl();
  const { data, loading } = UseFetch<Hotel | undefined>(
    `http://localhost:8800/api/hotels/find/${idHotel}`
  );

  // useEffect(() => {
  //   console.log("data hotel!", data);
  // }, [data]);

  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);

  //   const { user } = useContext(AuthContext);
  //   const navigate = useNavigate();

  //   const { dates, options } = useContext(SearchContext);
  //   const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  //   function dayDifference(date1, date2) {
  //     const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  //     const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  //     return diffDays;
  //   }

  //   const days = dayDifference(dates[0].endDate, dates[0].startDate);

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
  if (loading) return <div>Loading...</div>;

  return (
    <>
      {/* <Navbar /> */}
      {/* <Header type='list' /> */}
      <div className='hotelContainer'>
        <div className='hotelContainer'>
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
          {/* <div className='hotelWrapper'>
            <button className='bookNow'>Reserve or Book Now!</button>
            <h1 className='hotelTitle'>{data.name}</h1>
            <div className='hotelAddress'>
              <FaSearchLocation />
              <span>{data.address}</span>
            </div>
            <span className='hotelDistance'>
              Excellent location – {data.distance}m from center
            </span>
            <span className='hotelPriceHighlight'>
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className='hotelImages'>
              {data.photos?.map((photo, i) => (
                <div className='hotelImgWrapper' key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=''
                    className='hotelImg'
                  />
                </div>
              ))}
            </div>
            <div className='hotelDetails'>
              <div className='hotelDetailsTexts'>
                <h1 className='hotelTitle'>{data.title}</h1>
                <p className='hotelDesc'>{data.desc}</p>
              </div>
              <div className='hotelDetailsPrice'>
                <h1>Perfect for a {days}-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>${days * data.cheapestPrice * options.room}</b> ({days}{" "}
                  nights)
                </h2>
                <button onClick={handleClick}>Reserve or Book Now!</button>
              </div>
            </div>
          </div> */}
          <MailList />
          <Footer />
        </div>
        {/* {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />} */}
      </div>
    </>
  );
};

export default HotelPage;
// function useFetch(arg0: string): { data: any; loading: any; error: any } {
//   throw new Error("Function not implemented.");
// }
