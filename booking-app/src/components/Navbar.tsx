import React from "react";

const Navbar = () => {
  return (
    <div className='navbar bg-base-100'>
      <h2 className='flex-1'>
        <button className='btn btn-ghost normal-case text-xl'>MartinBooking</button>
      </h2>
      <div className='navItems flex-none'>
        <button className='btn btn-primary'>Register</button>
        <button className='btn btn-primary '>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
