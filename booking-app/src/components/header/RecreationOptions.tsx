import {
  FaBed,
  FaCar,
  FaMosque,
  FaPlane,
  FaTaxi,
} from "react-icons/fa";

function RecreationOptions() {
  return (
    <div className='header navbar'>
      <div className='btn btn-outlin btn-info gap-2 rounded-lg'>
        <FaBed />
        <span>Stays</span>
      </div>
      <div className='btn btn-outlin btn-info gap-2 rounded-lg'>
        <FaPlane />
        <span>Flights</span>
      </div>
      <div className='btn btn-outlin btn-info gap-2 rounded-lg'>
        <FaCar />
        <span>Car rentals</span>
      </div>
      <div className='btn btn-outlin btn-info gap-2 rounded-lg'>
        <FaMosque />
        <span>Attractions</span>
      </div>
      <div className='btn btn-outlin btn-info gap-2 rounded-lg'>
        <FaTaxi />
        <span>Airport taxis</span>
      </div>
    </div>
  );
}

export default RecreationOptions;
