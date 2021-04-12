import React from 'react'
import './sign-in.css';

const SignIn = () => {
    return (
        <div>
            <div class="sign-in-page">

                <div class="sign-in-image">
                    <h1>Login</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorum vero ipsa, ipsam distinctio
        ducimus amet? Eum, et quam! Cupiditate?</p>
                </div>

                <div class="sign-in-form">

                    <div class="signin-form-container">

                        <form method="POST" enctype="multipart/form-data" class="registeration-form">

                            <div class="form-control">
                                <input class="reg-email" type="email" name="email" placeholder="Email Address" required />
                            </div>

                            <div class="form-control">
                                <input class="password" type="password" name="password" placeholder="Password" required />
                            </div>

                            <div class="login-options">
                                <input type="submit" value="Login" class="btn-login" />
                                <b class="mx-1"><a href="">Forgot Password?</a></b>
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
