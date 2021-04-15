import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { firebaseAuth } from '../contexts/auth-context';


function Protected({
  component: Component,
  ...rest
}) {

  const { token, isAuthenticated } = useContext(firebaseAuth);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (token !== null) {
          return <Component />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: location } }} />
          );
        }
      }}
    />
  );
}

export default Protected;