import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Footer, MailList, Navbar, RecreationOptions } from "@components";
import { FaSearchLocation } from "react-icons/fa";
import { UseFetch } from "@hooks";
import { Hotel } from "@types";
import { getDifferenceOfDays } from "@utils";
import { SearchContext } from "@context";
import { BASE_URL, PRIVATE, PUBLIC } from "@models";

const HotelSelected = () => {
  const location = useLocation();
  const idLocation = (location.state._id as number) ?? 0;

  const { data, loading, error } = UseFetch<Hotel>(
    `${BASE_URL}/api/hotels/find/${idLocation}`
  );

  const navigate = useNavigate();
  const { state, dispatch } = useContext(SearchContext);

  let totalDays: number | undefined = getDifferenceOfDays(state);

  const handleReserve = () => navigate(PRIVATE.CHECKOUT);

  if (!data) return <div>There is not hotel with this ID :{idLocation}</div>;

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
            <h1 className='font-bold text-3xl'>{data.name}</h1>
            <div className='p-2'>
              <span className='capitalize'>{data.address}</span>
              <FaSearchLocation className='inline mx-2' />
            </div>
            <span className='text-blue-600 text-lg'>
              Excellent location – {data.distance}m from center
            </span>
            <div className='text-green-600 text-lg'>
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </div>
            <div className=''>
              {data.photos?.map((photo, i) => (
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
              <h1 className='text-2xl'>{data.title}</h1>
              <p className='text-xl'>{data.desc}</p>
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
                  ${totalDays * data.cheapestPrice * (state.options.room || 0)}
                </b>
                ({totalDays} nights)
                <button className='btn btn-primary' onClick={handleReserve}>
                  Reserve or Book Now!
                </button>
              </>
            ) : (
              <>
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
                    <span>Something went wrong!</span>
                  </div>
                </div>
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

export default HotelSelected;
