import React from 'react'
import './gallery.css';


function Gallery() {
    return (
        <>
            <aside id="nav-top">

            </aside>

            <aside className="side-bar">

                <article className="sidebar-title">

                    <h5 className="hidden">""</h5>

                    <figure>
                        <a href="/index.html" className="sidebar-logo">
                            Spruce <img src="img/logo.png" alt="Spruce Logo" />
                        </a>
                    </figure>

                    <a href="javascript:void(0)" className="menu-close">&times;</a>

                </article>

                <nav aria-label="Primary" className="navigation">

                    <ul className="menu">

                        <li><a href="#"><i className="fas fa-home"></i> Home</a></li>

                        <li><a href="plants-gallery.html"><i className="fas fa-images"></i> Gallery</a></li>

                        <li><a href="#"><i className="fas fa-user tie"></i> User Profile</a></li>

                        <li><a href="about-us.html"><i className="fas fa-info-circle"></i> About</a></li>

                        <li><a href="contact-us.html"><i className="fas fa-user tie"></i> Contact Us</a></li>

                        <li>
                            <article className="your-products">
                                <h5 className="hidden">""</h5>
                                <a href="#"><i className="fas fa-heart"></i> Favourites</a>

                                <a href="#"><i className="fas fa-shopping-cart"></i> Cart</a>

                            </article>
                        </li>

                    </ul>

                </nav>

            </aside>

            <header className="page-header container flex">

                <figure className="menu-bar">
                    <i className="fas fa-bars"></i>
                </figure>

                <figure className="logo-container">
                    <a href="/index.html" className="logo">Spruce</a>
                    <img src="img/logo.png" alt="Site Logo" />
                </figure>

                <figure className="user-settings"><img className="user-image" src="img/user.jpg" alt="" />
                </figure>

            </header>

            <header id="page-header-webview" className="page-header-webview container">

                <figure className="logo-container">
                    <a href="/index.html" className="logo">Spruce</a>
                    <img src="img/logo.png" alt="Site Logo" />
                </figure>

                <nav className="header-webview-nav">
                    <ul className="flex">
                        <li><a href="dashboard.html">Home</a></li>
                        <li><a href="plants-gallery.html">Gallery</a></li>
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="contact-us.html">Contact</a></li>
                    </ul>
                </nav>

                <figure className="user-settings flex">

                    <img className="user-image" src="img/user.jpg" alt="" />

                    <div className="flex">
                        <i className="fas fa-shopping-cart"></i>
                        <div className="cart-total">0</div>
                    </div>

                </figure>

            </header>

            <main>

                <section className="gallery-hero">
                    <h1 className="container">Explore our variety of plants raised with utmost love.</h1>
                </section>

                <section className="plants-gallery container">

                    <h1 className="text-center">Our little groots</h1>

                    <div className="gallery container">

                        <div className="gallery-image-container">
                            <img className="gallery-image" src="../img/plant1.jpg" alt="" />
                            <div className="gallery-image-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div className="gallery-image-container">
                            <img className="gallery-image" src="../img/plant2.jpg" alt="" />
                            <div className="gallery-image-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div className="gallery-image-container">
                            <img className="gallery-image" src="../img/plant3.jpg" alt="" />
                            <div className="gallery-image-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div className="gallery-image-container">
                            <img className="gallery-image" src="../img/plant4.jpg" alt="" />
                            <div className="gallery-image-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div className="gallery-image-container">
                            <img className="gallery-image" src="../img/plant5.jpg" alt="" />
                            <div className="gallery-image-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div className="gallery-image-container">
                            <img className="gallery-image" src="../img/plant6.jpg" alt="" />
                            <div className="gallery-image-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div className="gallery-image-container">
                            <img className="gallery-image" src="../img/plant1.jpg" alt="" />
                            <div className="gallery-image-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div className="gallery-image-container">
                            <img className="gallery-image" src="../img/plant2.jpg" alt="" />
                            <div className="gallery-image-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div className="gallery-image-container">
                            <img className="gallery-image" src="../img/plant3.jpg" alt="" />
                            <div className="gallery-image-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div className="gallery-image-container">
                            <img className="gallery-image" src="../img/plant4.jpg" alt="" />
                            <div className="gallery-image-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div className="gallery-image-container">
                            <img className="gallery-image" src="../img/plant5.jpg" alt="" />
                            <div className="gallery-image-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div className="gallery-image-container">
                            <img className="gallery-image" src="../img/plant6.jpg" alt="" />
                            <div className="gallery-image-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>

                    </div>

                    <div className="load-more-gallery text-center">
                        <a><u>Load more</u></a>
                    </div>

                </section>

            </main>

            <footer className="page-footer">

                <nav>
                    <ul className="social">
                        <li><a target="_blank" href="https://www.facebook.com"><i className="fab fa-facebook"></i></a></li>
                        <li><a target="_blank" href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
                        <li><a target="_blank" href="https://www.twitter.com"><i className="fab fa-twitter-square"></i></a></li>
                    </ul>
                </nav>

                <nav aria-label="Legal">
                    <ul className="legal">
                        <li><a href="#">Terms of Use</a></li>
                        <li>|</li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li>|</li>
                        <li><a href="#">Accessibility Policy</a></li>
                    </ul>
                </nav>

                <p className="text-center"><small className="copyright">Copyright &copy; 2021 | Spruce</small></p>

            </footer>
        </>
    )
}

export default Gallery;
