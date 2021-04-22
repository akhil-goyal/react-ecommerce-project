import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

import logo from 'img/logo.png';

const Navbar = () => {

    return (
        <section className="landing-nav-hero ">

            <div className="landing-navbar container">
                <div className="container flex">

                    <div className="landing-logo">
                        <p>Spruce</p>
                        <img src={logo} style={{ height: '2rem', width: '1.5rem' }} alt="" />
                    </div>

                    <nav>
                        <ul>
                            <Link to="/signup">Register</Link>
                            <Link to="/signin">Log In</Link>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="landing-hero container">
                <h1>Spruce</h1>
                <p>Join Spruce & explore a large variety of plants that suit your living & work place.</p>
                <Link className="btn-join-us" to="/signup">Join Us</Link>
            </div>

        </section>
    )
}

export default Navbar;
