import React, { useState } from 'react';
import { authMethods } from '../fb/auth-methods';

export const firebaseAuth = React.createContext();

const AuthProvider = (props) => {

    const [inputs, setInputs] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState([]);
    const [token, setToken] = useState(null);

    const handleSignup = () => {
        console.log('handleSignup')
        return authMethods.signup(inputs.email, inputs.password, setErrors, setToken)
        console.log('ERRROR : ', errors);
    }

    const handleSignin = () => {
        authMethods.signin(inputs.email, inputs.password, setErrors, setToken)
        console.log(errors, token)
    }

    const handleSignout = () => {
        authMethods.signout()
    }

    return (
        <firebaseAuth.Provider
            value={{
                handleSignup,
                handleSignin,
                handleSignout,
                token,
                inputs,
                setInputs,
                errors,
            }}>
            {props.children}
        </firebaseAuth.Provider>
    );
};

export default AuthProvider;