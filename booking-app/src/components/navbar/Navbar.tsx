import { FaAirbnb } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar justify-between flex-wrap w-full text-white '>
      <Link to='/' className='btn btn-ghost normal-case text-xl'>
       <FaAirbnb className="mr-2"/>MartinBooking
      </Link>
      <div className='flex gap-2'>
        <button className='btn py-3 px-4 min-h-0 h-auto text-black bg-cyan-50 border-none hover:bg-cyan-200 '>
          Register
        </button>
        <button className='btn py-3 px-4 min-h-0 h-auto text-black bg-cyan-50 border-none hover:bg-cyan-200 '>
          Login
        </button>
      </div>
    </div>
  );
};

export { Navbar };
