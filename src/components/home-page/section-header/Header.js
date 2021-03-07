import React from 'react';

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
                    <a href="index.html" className="logo">Spruce</a>
                    <img src={siteLogo} alt="Site Logo" />
                </figure>

                <figure className="user-settings"><img className="user-image" src={userAvatar} alt="" />
                </figure>

            </header>

            <header id="page-header-webview" className="page-header-webview container">

                <figure className="logo-container">
                    <a href="index.html" className="logo">Spruce</a>
                    <img src={siteLogo} alt="Site Logo" />
                </figure>

                <nav className="header-webview-nav">
                    <ul className="flex">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Categories</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>

                <figure className="user-settings"><img className="user-image" src={userAvatar} alt="" />
                </figure>

            </header>
        </>
    )
}

export default Header;