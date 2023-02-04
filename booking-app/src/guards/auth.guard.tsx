import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PUBLIC } from "../models";
import { AppStore } from "src/redux/store";
import { useContext } from "react";
import { AuthContext } from "@context";

/** Check if the user is in the redux store, if so redirects to Outlet otherwise continue to Login */
function AuthGuard() {
  const { state } = useContext(AuthContext);
  const { user } = state;
  console.log(user);
  return user ? <Outlet /> : <Navigate replace to={PUBLIC.LOGIN} />;
}
export default AuthGuard;
