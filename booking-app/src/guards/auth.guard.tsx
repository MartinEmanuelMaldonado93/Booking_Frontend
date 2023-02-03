import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PUBLIC } from "../models";
import { AppStore } from "src/redux/store";
/** Check if the user is in the redux store, if so redirects to Outlet otherwise continue to Login */
function AuthGuard() {
  const userState = useSelector((store: AppStore) => store.user);

  return userState._id ? <Outlet /> : <Navigate replace to={PUBLIC.LOGIN} />;
}
export default AuthGuard;
