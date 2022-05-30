import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { GlobalContext } from "./Context/GlobalState";

const PrivateRoute = ({}) => {
  const { isLogin, component: Component } = useContext(GlobalContext);

  return isLogin ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute();
