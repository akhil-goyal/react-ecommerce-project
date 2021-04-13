import React, { useContext } from 'react'
import './sign-up.css';

import { firebaseAuth } from '../../contexts/AuthProvider';

import googleIcon from 'img/google.svg';
import facebookIcon from 'img/facebook.png';

const SignUp = (props) => {

    const { handleSignup, inputs, setInputs, errors } = useContext(firebaseAuth)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('handleSubmit')
        //wait to signup 
        await handleSignup()
        //push home
        // props.history.push('/')
    }
    const handleChange = e => {
        const { name, value } = e.target
        console.log(inputs)
        setInputs(prev => ({ ...prev, [name]: value }))
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

                    {errors.length > 0 ? errors.map(error => <p style={{ color: 'red' }}>{error}</p>) : null}

                    <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data" className="registeration-form">

                        <div className="form-control">
                            <input onChange={handleChange} className="first-name" type="text" name="first-name" placeholder="First Name" required />
                        </div>

                        <div className="form-control">
                            <input onChange={handleChange} className="last-name" type="text" name="last-name" placeholder="Last Name" required />
                        </div>

                        <div className="form-control">
                            <input onChange={handleChange} className="reg-email" type="email" name="email" placeholder="Email Address" required />
                        </div>

                        <div className="form-control">
                            <input onChange={handleChange} className="password" type="password" name="password" placeholder="Password" required />
                        </div>

                        <div className="form-control">
                            <input onChange={handleChange} className="confirm-password" type="password" name="confirm-password"
                                placeholder="Confirm Password" required />
                        </div>

                        <div className="register-options">
                            <input type="submit" value="Register" className="btn-register" />
                            <b className="mx-1">or sign in with</b>
                            <img className="logo-google" src={googleIcon} alt="" />
                            <img className="logo-facebook" src={facebookIcon} alt="" />
                        </div>

                        <p>Already a user? Click <a href="sign-in.html"><u>here</u></a> to log in.</p>

                    </form>

                </div>
            </div>

        </div>
    )
}

export default SignUp;