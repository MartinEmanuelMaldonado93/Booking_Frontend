import React, { useState } from "react";
import { FaBed } from "react-icons/fa";

function Destination() {
  const [destination, setDestination] = useState("");

  return (
    <div className='flex '>
      <FaBed />
      <input
        type='text'
        placeholder='Where are you going?'
        className='input py-1 max-w-ms'
        onChange={(e) => setDestination(e.target.value)} // todo: implement throttle
      />
    </div>
  );
}

export { Destination };
