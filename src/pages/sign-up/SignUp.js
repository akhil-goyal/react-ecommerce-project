import React from 'react'
import './sign-up.css';

const SignUp = () => {
    return (
        <div className="sign-up-page">

            <div className="sign-up-image">
                <h1>Registeration</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorum vero ipsa, ipsam distinctio
                ducimus amet? Eum, et quam! Cupiditate?</p>
            </div>

            <div className="sign-up-form">

                <div className="signup-form-container">

                    <form method="POST" enctype="multipart/form-data" className="registeration-form">

                        <div className="form-control">
                            <input className="first-name" type="text" name="first-name" placeholder="First Name" required />
                        </div>

                        <div className="form-control">
                            <input className="last-name" type="text" name="last-name" placeholder="Last Name" required />
                        </div>

                        <div className="form-control">
                            <input className="reg-email" type="email" name="email" placeholder="Email Address" required />
                        </div>

                        <div className="form-control">
                            <input className="password" type="password" name="password" placeholder="Password" required />
                        </div>

                        <div className="form-control">
                            <input className="confirm-password" type="password" name="confirm-password"
                                placeholder="Confirm Password" required />
                        </div>

                        <div className="register-options">
                            <input type="submit" value="Register" className="btn-register" />
                            <b className="mx-1">or sign in with</b>
                            <img className="logo-google" src="../img/google.svg" alt="" />
                            <img className="logo-facebook" src="../img/facebook.png" alt="" />
                        </div>

                        <p>Already a user? Click <a href="sign-in.html"><u>here</u></a> to log in.</p>

                    </form>

                </div>
            </div>

        </div>
    )
}

export default SignUp;