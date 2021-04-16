import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ authenticated, ...props }) => {

    return authenticated
        ? (<Redirect to="/dashboard" />)
        : (<Route {...props} />)

};

export default PublicRoute;