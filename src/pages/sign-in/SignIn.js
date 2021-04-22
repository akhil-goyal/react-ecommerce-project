import React, { useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';

import './sign-in.css';
import { firebaseAuth } from '../../contexts/auth-context';

const SignIn = ({ history }) => {

    // Destructuring the auth methods from context.
    const { handleSignIn, inputs, setInputs, errors, setErrors } = useContext(firebaseAuth);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleSignIn();

        // Redirecting to dashboard if the
        // user is signed up successfully.
        history.push('/dashboard')
    }

    // Handling change in input fields.
    const handleChange = e => {
        setErrors([]);
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

                        {errors.length > 0 ? errors.map((error, index) => <p key={index} style={{ color: 'red' }}>{error}</p>) : null}

                        <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data" className="registeration-form">

                            <div className="form-control">
                                <input onChange={handleChange} className="reg-email" type="email" name="email" value={inputs.email} placeholder="Email Address" required />
                            </div>

                            <div className="form-control">
                                <input onChange={handleChange} className="password" type="password" name="password" value={inputs.password} placeholder="Password" required />
                            </div>

                            <div className="login-options">
                                <input type="submit" value="Login" className="btn-login" />
                                <b className="mx-1"><Link to="/signin">Forgot Password?</Link></b>
                            </div>

                            <p>Not registered yet? Click <Link to="/signup"><b>here</b></Link> to join.</p>

                        </form>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default withRouter(SignIn);
