import { Navigate, Outlet } from "react-router-dom";
import { PUBLIC } from "@models";
import { useContext } from "react";
import { AuthContext } from "@context";

function AuthGuard() {
  const { state } = useContext(AuthContext);
  const { user } = state;
  return user ? <Outlet /> : <Navigate replace to={PUBLIC.LOGIN} />;
}
export default AuthGuard;
