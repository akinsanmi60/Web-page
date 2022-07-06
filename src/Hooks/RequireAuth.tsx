/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-nested-ternary */

import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import AuthContext from "../Context/AuthProvider";

function ProtectedRoute({ allowAccount }: { allowAccount: string }) {
  const { authUser } = useContext(AuthContext);
  const location = useLocation();

  const accountType = authUser?.user?.accountType!;

  return allowAccount?.includes(accountType) ? (
    <Outlet />
  ) : authUser?.token ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : authUser?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/businesslogin" state={{ from: location }} replace />
  );
}

export default ProtectedRoute;
