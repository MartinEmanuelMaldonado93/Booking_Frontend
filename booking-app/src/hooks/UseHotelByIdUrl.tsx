import React from "react";
import { useLocation } from "react-router-dom";
/** Read id in the url of the browser */
function UseHotelByIdUrl() {
  const location = useLocation();
  const idHotel = location.pathname.split("/")[2];
  return idHotel;
}

export default UseHotelByIdUrl;
