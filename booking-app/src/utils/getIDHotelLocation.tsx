import React from "react";
import { useLocation } from "react-router-dom";
/** Read id in the url of the browser */
function getIDHotelLocation(pathname: string) {
  const id = pathname.split("/")[2];
  return id;
}

export default getIDHotelLocation;
