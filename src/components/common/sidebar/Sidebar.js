import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

import { menuItems } from '../../../contexts/menu-context';

import siteLogo from 'img/logo.png';

const Sidebar = () => {

    const { menuWidth, setMenuWidth } = useContext(menuItems);

    const closeMenu = (e) => {

        e.preventDefault();

        setMenuWidth('0em');

    }

    return (
        <>
            <aside id="nav-top">
            </aside>

            <aside style={{ width: `${menuWidth}` }} className="side-bar">

                <article className="sidebar-title">

                    <figure>
                        <a href="index.html" className="sidebar-logo">
                            Spruce <img src={siteLogo} style={{ height: ' 2rem', width: '1.5rem' }} alt="Spruce Logo" />
                        </a>
                    </figure>

                    <a onClick={closeMenu} className="menu-close">&times;</a>

                </article>

                <nav aria-label="Primary" className="navigation">

                    <ul className="menu">

                        <li><Link to="/dasboard"><i className="fas fa-home"></i> Home</Link></li>
                        <li><Link to="/gallery"><i className="fas fa-images"></i> Gallery</Link></li>
                        <li><Link to="/about"><i className="fas fa-info-circle"></i> About</Link></li>
                        <li><Link to="/contact"><i className="fas fa-user tie"></i> Contact Us</Link></li>
                        <li>
                            <article className="your-products">
                                <Link to="#"><i className="fas fa-heart"></i> Favourites</Link>
                                <Link to="/cart"><i className="fas fa-shopping-cart"></i> Cart</Link>
                            </article>
                        </li>

                    </ul>

                </nav>

            </aside>
        </>
    )
}

export default Sidebar;