import React, { useState } from 'react';
import { authMethods } from '../fb/auth-methods';

export const firebaseAuth = React.createContext();

const AuthProvider = (props) => {

    const [inputs, setInputs] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState([]);
    const [token, setToken] = useState(null);

    const handleSignup = () => {
        // middle man between firebase and signup 
        console.log('handleSignup')
        // calling signup from firebase server
        return authMethods.signup(inputs.email, inputs.password, setErrors, setToken)
        console.log('ERRROR : ', errors);
    }

    return (
        <firebaseAuth.Provider
            value={{
                handleSignup,
                inputs,
                setInputs,
                errors
            }}>
            {props.children}
        </firebaseAuth.Provider>
    );
};

export default AuthProvider;