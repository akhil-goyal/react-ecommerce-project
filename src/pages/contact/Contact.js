import React from 'react'
import './contact.css';

function Contact() {
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

                <section className="contact-us-hero">
                    <h1 className="container">Contact Us</h1>
                </section>

                <section className="contact-us">

                    <div className="contact-location">
                        <a target="_blank" href="https://www.google.ca/maps/@43.7570042,-79.5943787,12.54z">
                            <img src="img/map.png" alt="" />
                        </a>
                    </div>

                    <div>
                        <div className="contact-details">
                            <h1>Contact Details</h1>
                            <h4><u>Address</u> : 123 XYZ Crescent, Etobicoke, ON, X1Y2Z3 CA</h4>
                            <h4><u>Telephone</u> : (123) 45 - 67890, (098) 765 - 4321</h4>
                            <h4><u>FAX</u> : DV7DUZFD8ZH80DFH8S</h4>
                            <h4><u>Email address</u> : hey@spruce.ca</h4>
                        </div>

                        <div className="contact-touch">

                            <h1>Get in touch.</h1>

                            <form method="POST" enctype="multipart/form-data" className="contact-form">

                                <div className="form-control">
                                    <input className="contact-name" type="text" name="name" placeholder="Full Name" required />
                                </div>

                                <div className="form-control">
                                    <input className="contact-email" type="email" name="email" placeholder="Email Address" required />
                                </div>

                                <div className="form-control">
                                    <textarea rows="10" cols="48" className="contact-message" type="text" name="message"
                                        placeholder="Share your thoughts" required></textarea>
                                </div>

                                <input type="submit" value="Submit" className="btn-contact" />

                            </form>
                        </div>
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

export default Contact;
