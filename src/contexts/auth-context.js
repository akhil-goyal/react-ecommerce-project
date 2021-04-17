// PACKAGES
import React, { useState, createContext } from 'react';
import { authMethods } from '../firebase-utils/auth-methods';

// Creating a CONTEXT for firebase authentication.
export const firebaseAuth = createContext();

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

    // Current User state with initial/default value of empty object.
    const [currentUser, setCurrentUser] = useState({});

    // Current User Authenticated state with initial/default value of false.
    const [isAuth, setIsAuth] = useState(false);

    // Current loading state with initial/default value of true.
    const [loading, setLoading] = useState(true);

    // Function to handle the User registeration.
    const handleSignUp = () => {
        authMethods.signUpMethod(
            inputs.firstName,
            inputs.lastName,
            inputs.email,
            inputs.password,
            setErrors,
            setCurrentUser,
        );
    }

    // Function to handle the User login.
    const handleSignIn = () => {
        authMethods.signInMethod(inputs.email, inputs.password, setErrors, setCurrentUser);
    }

    // Function to handle the Google SignIn.
    const handleGoogleSignIn = () => {
        authMethods.googleLoginMethod(setErrors, setCurrentUser);
    }

    const handleFacebookLogin = () => {
        authMethods.facebookLoginMethod(setErrors, setCurrentUser);
    }

    // Function to handle the User signout.
    const handleSignOut = () => {
        authMethods.signOutMethod(setErrors, setCurrentUser);
    }

    // Function to handle the current user auth state.
    const handleUserAuth = () => {
        authMethods.authHandlerMethod(setLoading, setIsAuth);
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
                handleUserAuth,
                currentUser,
                inputs,
                errors,
                setInputs,
                setErrors,
                loading,
                isAuth
            }}>
            {children}
        </firebaseAuth.Provider>
    );
};

export default AuthContext;