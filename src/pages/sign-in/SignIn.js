import React from 'react'
import './sign-in.css';

const SignIn = () => {
    return (
        <div>
            <div className="sign-in-page">

                <div className="sign-in-image">
                    <h1>Login</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorum vero ipsa, ipsam distinctio
        ducimus amet? Eum, et quam! Cupiditate?</p>
                </div>

                <div className="sign-in-form">

                    <div className="signin-form-container">

                        <form method="POST" enctype="multipart/form-data" className="registeration-form">

                            <div className="form-control">
                                <input className="reg-email" type="email" name="email" placeholder="Email Address" required />
                            </div>

                            <div className="form-control">
                                <input className="password" type="password" name="password" placeholder="Password" required />
                            </div>

                            <div className="login-options">
                                <input type="submit" value="Login" className="btn-login" />
                                <b className="mx-1"><a href="">Forgot Password?</a></b>
                            </div>

                            <p>Not registered yet? Click <a href="sign-up.html"><u>here</u></a> to join.</p>

                        </form>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default SignIn;
