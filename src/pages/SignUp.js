import React from 'react'

const SignUp = () => {
    return (
        <div class="sign-up-page">

            <div class="sign-up-image">
                <h1>Registeration</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorum vero ipsa, ipsam distinctio
                ducimus amet? Eum, et quam! Cupiditate?</p>
            </div>

            <div class="sign-up-form">

                <div class="signup-form-container">

                    <form method="POST" enctype="multipart/form-data" class="registeration-form">

                        <div class="form-control">
                            <input class="first-name" type="text" name="first-name" placeholder="First Name" required />
                        </div>

                        <div class="form-control">
                            <input class="last-name" type="text" name="last-name" placeholder="Last Name" required />
                        </div>

                        <div class="form-control">
                            <input class="reg-email" type="email" name="email" placeholder="Email Address" required />
                        </div>

                        <div class="form-control">
                            <input class="password" type="password" name="password" placeholder="Password" required />
                        </div>

                        <div class="form-control">
                            <input class="confirm-password" type="password" name="confirm-password"
                                placeholder="Confirm Password" required />
                        </div>

                        <div class="register-options">
                            <input type="submit" value="Register" class="btn-register" />
                            <b class="mx-1">or sign in with</b>
                            <img class="logo-google" src="../img/google.svg" alt="" />
                            <img class="logo-facebook" src="../img/facebook.png" alt="" />
                        </div>

                        <p>Already a user? Click <a href="sign-in.html"><u>here</u></a> to log in.</p>

                    </form>

                </div>
            </div>

        </div>
    )
}

export default SignUp;