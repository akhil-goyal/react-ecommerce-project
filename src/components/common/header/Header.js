import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { firebaseAuth } from '../../../contexts/auth-context';

import userAvatar from 'img/user.jpg';
import siteLogo from 'img/logo.png';

const Header = () => {

    const { handleSignOut, currentUser } = useContext(firebaseAuth);

    const signOutHandler = async () => {
        await handleSignOut();
        history.push('/signin');
    }

    console.log('DASHBOARD : ', currentUser.firstName, currentUser.lastName, currentUser.email);

    return (
        <>

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
                        <li><Link to="/dashboard">Home</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>

                <figure className="user-settings flex">

                    <img className="user-image" src={userAvatar} alt="" />

                    <Link to="/cart">
                        <div className="cart flex">
                            <i className="fas fa-shopping-cart"></i>
                            <div className="cart-total">0</div>
                        </div>
                    </Link>

                    <button onClick={signOutHandler}>Sign Out</button>

                </figure>

            </header>

        </>
    )
}

export default Header;