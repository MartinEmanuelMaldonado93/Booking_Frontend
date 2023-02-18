import { AuthContext } from "@context";
import { useContext } from "react";
import { FaAirbnb } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { PUBLIC } from "@models";

const Navbar = () => {
  const { state } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = () => navigate(PUBLIC.LOGIN);
  const { user } = state;

  return (
    <div className='navbar justify-between flex-wrap w-full text-white '>
      <Link to='/' className='btn btn-ghost normal-case text-xl'>
        <FaAirbnb className='mr-2' />
        MartinBooking
      </Link>
      {user ? (
        <span className='capitalize text-xl'>{user.userName}</span>
      ) : (
        <div className='flex gap-2'>
          <button className='btn py-3 px-4 min-h-0 h-auto text-black bg-cyan-50 border-none hover:bg-purple-300 '>
            Register
          </button>
          <button
            onClick={handleLogin}
            className='btn py-3 px-4 min-h-0 h-auto text-black bg-cyan-50 border-none hover:bg-purple-300 '
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export { Navbar };
