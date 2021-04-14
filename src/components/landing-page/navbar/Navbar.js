import React from 'react';
import './navbar.css';

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
                            <li><a href="pages/sign-up.html">Register</a></li>
                            <li><a href="pages/sign-in.html">Login In</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="landing-hero container">
                <h1>Spruce</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas eum molestiae, delectus eligendi
            optio recusandae animi iusto facilis dolorem sint.</p>
                <a className="btn-join-us" href="pages/sign-up.html">Join Us</a>
            </div>

        </section>
    )
}

export default Navbar;
