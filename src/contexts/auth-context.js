// PACKAGES
import React, { useState } from 'react';
import { authMethods } from '../firebase-utils/auth-methods';

// Creating a CONTEXT for firebase authentication.
export const firebaseAuth = React.createContext();

const AuthContext = ({ children }) => {

    // Input state with initial/default values of null for email & password.
    const [inputs, setInputs] =
        useState({
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: ''
        });

    // Error state with initial/default value of empty array [].
    const [errors, setErrors] = useState([]);

    // Token state with initial/default value of null.
    const [token, setToken] = useState(null);

    // Current User state with initial/default value of empty object.
    const [currentUser, setCurrentUser] = useState({});

    // Current User Authenticated state with initial/default value of false.
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    console.log('CURRENT USER : ', currentUser);

    // Function to handle the User registeration.
    const handleSignUp = () => {
        authMethods.signUpMethod(
            inputs.firstName,
            inputs.lastName,
            inputs.email,
            inputs.password,
            setErrors,
            setToken,
            setCurrentUser,
            setIsAuthenticated
        );
    }

    // Function to handle the User login.
    const handleSignIn = () => {
        authMethods.signInMethod(inputs.email, inputs.password, setErrors, setToken, setCurrentUser, setIsAuthenticated);
    }

    // Function to handle the Google SignIn.
    const handleGoogleSignIn = () => {
        authMethods.googleLoginMethod(setErrors, setToken, setCurrentUser, setIsAuthenticated);
    }

    const handleFacebookLogin = () => {
        authMethods.facebookLoginMethod(setErrors, setToken, setCurrentUser, setIsAuthenticated);
    }

    // Function to handle the User signout.
    const handleSignOut = () => {
        authMethods.signOutMethod(setErrors, setToken, setCurrentUser, setIsAuthenticated);
    }

    // Setting the values in FirebaseAuth provider so that they may be available
    // globally in the application.
    return (
        <firebaseAuth.Provider
            value={{
                handleSignUp,
                handleSignIn,
                handleGoogleSignIn,
                handleFacebookLogin,
                handleSignOut,
                currentUser,
                isAuthenticated,
                token,
                inputs,
                errors,
                setInputs,
                setErrors,
                setIsAuthenticated
            }}>
            {children}
        </firebaseAuth.Provider>
    );
};

export default AuthContext;