import React, { useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './sign-up.css';

import { firebaseAuth } from '../../contexts/auth-context';

import googleIcon from 'img/google.svg';
import facebookIcon from 'img/facebook.png';

const SignUp = ({ history }) => {

    const { handleSignUp, handleGoogleSignIn, handleFacebookLogin, inputs, setInputs, errors, setErrors } = useContext(firebaseAuth);

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (inputs.password.length < 6) {
            setErrors(['Password must be atleast 6 characters long.']);
        } else if (inputs.password !== inputs.confirmPassword) {
            setErrors(['Password & Confirm Password do not match.']);
        } else {
            await handleSignUp();
            history.push('/dashboard');
        }

    }

    const signInWithGoogle = async () => {
        await handleGoogleSignIn();
        history.push('/dashboard');
    }

    const loginWithFacebook = async () => {
        await handleFacebookLogin();
        history.push('/dashboard');
    }

    const handleChange = e => {
        setErrors([]);
        const { name, value } = e.target;
        setInputs(prev => ({ ...prev, [name]: value }));
    }

    return (
        <div className="sign-up-page">

            <div className="sign-up-image">
                <h1>Registeration</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorum vero ipsa, ipsam distinctio
                ducimus amet? Eum, et quam! Cupiditate?</p>
            </div>

            <div className="sign-up-form">

                <div className="signup-form-container">

                    {errors.length > 0 ? errors.map((error, index) => <p key={index} style={{ color: 'red' }}>{error}</p>) : null}

                    <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data" className="registeration-form">

                        <div className="form-control">
                            <input onChange={handleChange} className="first-name" type="text" name="firstName" value={inputs.firstName} placeholder="First Name" required />
                        </div>

                        <div className="form-control">
                            <input onChange={handleChange} className="last-name" type="text" name="lastName" value={inputs.lastName} placeholder="Last Name" required />
                        </div>

                        <div className="form-control">
                            <input onChange={handleChange} className="reg-email" type="email" name="email" value={inputs.email} placeholder="Email Address" required />
                        </div>

                        <div className="form-control">
                            <input onChange={handleChange} className="password" type="password" name="password" value={inputs.password} placeholder="Password" required />
                        </div>

                        <div className="form-control">
                            <input onChange={handleChange} className="confirm-password" type="password" name="confirmPassword" value={inputs.confirmPassword}
                                placeholder="Confirm Password" required />
                        </div>

                        <div className="register-options">
                            <input type="submit" value="Register" className="btn-register" />
                            <b className="mx-1">or sign in with</b>

                            <a onClick={signInWithGoogle}>
                                <img className="logo-google" src={googleIcon} alt="" />
                            </a>

                            <a onClick={loginWithFacebook}>
                                <img className="logo-facebook" src={facebookIcon} alt="" />
                            </a>

                        </div>

                        <p>Already a user? Click <Link to="/signin"><b>here</b></Link> to log in.</p>

                    </form>

                </div>
            </div>

        </div>
    )
}

export default withRouter(SignUp);