import { FaBed, FaCar, FaMosque, FaPlane, FaTaxi } from "react-icons/fa";

function RecreationOptions() {
  return (
    <div className='grid grid-cols-2 sm:navbar flex-wrap gap-2'>
      <div className='btn rounded-full duration-300 bg-inherit text-white hover:bg-inherit hover:text-black border-white gap-2'>
        <FaBed />
        <span>Stays</span>
      </div>
      <div className='btn rounded-full duration-300 bg-inherit hover:bg-inherit hover:text-black border-white gap-2'>
        <FaPlane />
        <span>Flights</span>
      </div>
      <div className='btn rounded-full duration-300 bg-inherit hover:bg-inherit hover:text-black border-white gap-2'>
        <FaCar />
        <span>Car rentals</span>
      </div>
      <div className='btn rounded-full duration-300 bg-inherit hover:bg-inherit hover:text-black border-white gap-2'>
        <FaMosque />
        <span>Attractions</span>
      </div>
      <div className='btn rounded-full duration-300 bg-inherit hover:bg-inherit hover:text-black border-white gap-2'>
        <FaTaxi />
        <span>Airport taxis</span>
      </div>
    </div>
  );
}

export { RecreationOptions };
