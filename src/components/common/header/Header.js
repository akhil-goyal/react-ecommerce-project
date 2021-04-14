import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { firebaseAuth } from '../../../contexts/auth-context';

import userAvatar from 'img/user.jpg';
import siteLogo from 'img/logo.png';

const Header = () => {

    const { currentUser } = useContext(firebaseAuth);

    console.log('DASHBOARD : ', currentUser.firstName, currentUser.lastName, currentUser.email);

    return (
        <>

            <header className="page-header container flex">

                <figure className="menu-bar">
                    <i className="fas fa-bars"></i>
                </figure>

                <figure className="logo-container">
                    <a href="/index.html" className="logo">Spruce</a>
                    <img src={siteLogo} alt="Site Logo" />
                </figure>

                <figure className="user-settings"><img className="user-image" src={userAvatar} alt="" />
                </figure>

            </header>

            <header id="page-header-webview" className="page-header-webview container">

                <figure className="logo-container">
                    <a href="/index.html" className="logo">Spruce</a>
                    <img src={siteLogo} alt="Site Logo" />
                </figure>

                <nav className="header-webview-nav">
                    <ul className="flex">
                        <li><a href="#">Home</a></li>
                        <li><a href="plants-gallery.html">Gallery</a></li>
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="contact-us.html">Contact</a></li>
                    </ul>
                </nav>

                <figure className="user-settings flex">

                    <img className="user-image" src={userAvatar} alt="" />

                    <a href="cart.html">
                        <div className="flex">
                            <i className="fas fa-shopping-cart"></i>
                            <div className="cart-total">0</div>
                        </div>
                    </a>

                </figure>

            </header>

        </>
    )
}

export default Header;