// PACKAGES
import React, { useState } from 'react';
import { authMethods } from '../firebase-utils/auth-methods';

// Creating a CONTEXT for firebase authentication.
export const firebaseAuth = React.createContext();

const AuthContext = ({ children }) => {

    // Input state with initial/default values of null for email & password.
    const [inputs, setInputs] = useState({ email: '', password: '' });
    // Error state with initial/default value of empty array [].
    const [errors, setErrors] = useState([]);
    // Token state with initial/default value of null.
    const [token, setToken] = useState(null);

    // Function to handle the User registeration.
    const handleSignUp = () => {
        authMethods.signUpMethod(inputs.email, inputs.password, setErrors, setToken);
    }

    // Function to handle the User login.
    const handleSignIn = () => {
        authMethods.signInMethod(inputs.email, inputs.password, setErrors, setToken);
    }

    // Function to handle the User signout.
    const handleSignOut = () => {
        authMethods.signOutMethod(setErrors, setToken);
    }

    // Setting the values in FirebaseAuth provider so that they may be available
    // globally in the application.
    return (
        <firebaseAuth.Provider
            value={{
                handleSignUp,
                handleSignIn,
                handleSignOut,
                token,
                inputs,
                errors,
                setInputs
            }}>
            {children}
        </firebaseAuth.Provider>
    );
};

export default AuthContext;