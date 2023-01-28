import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoute } from "src/models";
import { AppStore } from "src/redux/store";

function AuthGuard() {
  const userState = useSelector((store: AppStore) => store.user);

  return userState._id ? (
    <Outlet />
  ) : (
    <Navigate replace to={PublicRoute.LOGIN} />
  );
}
export default AuthGuard;
