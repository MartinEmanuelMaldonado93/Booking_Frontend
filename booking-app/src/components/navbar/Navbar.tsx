import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar bg-blue-600'>
      <h2 className='flex-1'>
        <Link to="/" className='btn btn-ghost normal-case text-cyan-50 text-xl'>
          MartinBooking
        </Link>
      </h2>
      <div className='navItems flex-none'>
        <button className='btn btn-primary'>Register</button>
        <button className='btn btn-primary '>Login</button>
      </div>
    </div>
  );
};

export {Navbar};
