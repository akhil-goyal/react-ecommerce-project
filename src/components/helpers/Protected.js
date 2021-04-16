import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ authenticated, ...props }) => {

  return authenticated
    ? (<Route {...props} />)
    : (<Redirect to="/signin" />)

};

export default PrivateRoute;