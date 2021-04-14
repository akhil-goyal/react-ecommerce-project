import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import './sign-in.css';
import { firebaseAuth } from '../../contexts/auth-context';


const SignIn = ({ history }) => {

    const { handleSignIn, inputs, setInputs, errors } = useContext(firebaseAuth);

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleSignIn()
        history.push('/dashboard')
    }

    const handleChange = e => {
        const { name, value } = e.target
        setInputs(prev => ({ ...prev, [name]: value }))
    }

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

                        {errors.length > 0 ? errors.map(error => <p style={{ color: 'red' }}>{error}</p>) : null}

                        <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data" className="registeration-form">

                            <div className="form-control">
                                <input onChange={handleChange} className="reg-email" type="email" name="email" value={inputs.email} placeholder="Email Address" required />
                            </div>

                            <div className="form-control">
                                <input onChange={handleChange} className="password" type="password" name="password" value={inputs.password} placeholder="Password" required />
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

export default withRouter(SignIn);
