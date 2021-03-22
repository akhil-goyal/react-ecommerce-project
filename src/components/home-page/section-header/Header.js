import React from 'react';
import { Link } from 'react-router-dom';

import userAvatar from 'img/user.jpg';
import siteLogo from 'img/logo.png';

const Header = () => {
    return (
        <>
            <aside id="nav-top">
            </aside>

            <header className="page-header container flex">

                <figure className="menu-bar">
                    <i className="fas fa-bars"></i>
                </figure>

                <figure className="logo-container">
                    <Link to="/" className="logo">Spruce</Link>
                    <img src={siteLogo} alt="Site Logo" />
                </figure>

                <figure className="user-settings"><img className="user-image" src={userAvatar} alt="" />
                </figure>

            </header>

            <header id="page-header-webview" className="page-header-webview container">

                <figure className="logo-container">
                    <Link to="/" className="logo">Spruce</Link>
                    <img src={siteLogo} alt="Site Logo" />
                </figure>

                <nav className="header-webview-nav">
                    <ul className="flex">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/categories">Categories</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>

                <figure className="user-settings"><img className="user-image" src={userAvatar} alt="" />
                </figure>

            </header>
        </>
    )
}

export default Header;