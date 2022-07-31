import React from "react";
import { Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import Login from "../pages/login/Login";

const ProtectedRoutes = () => {
  let { auth } = useAuth();

  if (auth) return <Outlet />;
  else return <Login />; //if not authenticated
};

export default ProtectedRoutes;
