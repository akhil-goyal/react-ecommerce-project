import React from 'react';

import siteLogo from 'img/logo.png';

const Sidebar = () => {
    return (
        <>
            <aside id="nav-top">
            </aside>

            <aside className="side-bar">

                <article className="sidebar-title">

                    <figure>
                        <a href="index.html" className="sidebar-logo">
                            {/* Spruce <img src="img/logo.png" style="height: 2rem; width: 1.5rem;" alt="Spruce Logo" /> */}
                            Spruce <img src={siteLogo} />
                        </a>
                    </figure>

                    <a href="#" className="menu-close">&times;</a>

                </article>

                <nav aria-label="Primary" className="navigation">

                    <ul className="menu">

                        <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
                        <li><a href="#"><i className="fas fa-th-large"></i> Categories</a></li>
                        <li><a href="#"><i className="fas fa-images"></i> Gallery</a></li>
                        <li><a href="#"><i className="fas fa-user tie"></i> User Profile</a></li>
                        <li><a href="#"><i className="fas fa-info-circle"></i> About</a></li>
                        <li><a href="#"><i className="fas fa-user tie"></i> Contact Us</a></li>
                        <li>
                            <article className="your-products">

                                <a href="#"><i className="fas fa-heart"></i> Favourites</a>
                                <a href="#"><i className="fas fa-shopping-cart"></i> Cart</a>
                            </article>
                        </li>

                    </ul>

                </nav>

            </aside>
        </>
    )
}

export default Sidebar;