import React from 'react'
import './cart.css';

const Cart = () => {
    return (
        <div>
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

                <section className="about-us-hero">
                    <h1 className="container">My Cart</h1>
                </section>

                <section className="cart-items">

                    <div className="cart-item">
                        <div className="cart-product-image">
                            <img src="img/plant1.jpg" alt="" />
                        </div>

                        <div className="cart-title-desc">
                            <h3>Silver Dollar Plant</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi earum molestiae atque accusamus
                    numquam temporibus.</p>
                            <p className="my-1">Category : <em>'Indoor'</em></p>
                            <p>Pot Included? : Yes</p>
                        </div>

                        <div className="cart-quant-price">

                            <strong>Select Quantity</strong>

                            <div className="cart-item-qty my-1">

                                <div className="cart-qty-inc">
                                    <a href="">-</a>
                                </div>

                                <div className="cart-qty">
                                    <input name="quantity" value="1" type="text" />
                                </div>

                                <div className="cart-qty-dec">
                                    <a href="">+</a>
                                </div>

                            </div>

                            <strong>Price</strong>

                            <p className="my-1">$ 54.42</p>

                        </div>

                        <div className="delete-container">
                            <p>&#215;</p>
                        </div>
                    </div>

                    <div className="cart-item">
                        <div className="cart-product-image">
                            <img src="img/plant5.jpg" alt="" />
                        </div>

                        <div className="cart-title-desc">
                            <h3>Ficus Bonsai</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi earum molestiae atque accusamus
                    numquam temporibus.</p>
                            <p className="my-1">Category : <em>'Indoor'</em></p>
                            <p>Pot Included? : No</p>
                        </div>

                        <div className="cart-quant-price">

                            <strong>Select Quantity</strong>

                            <div className="cart-item-qty my-1">

                                <div className="cart-qty-inc">
                                    <a href="">-</a>
                                </div>

                                <div className="cart-qty">
                                    <input name="quantity" value="1" type="text" />
                                </div>

                                <div className="cart-qty-dec">
                                    <a href="">+</a>
                                </div>

                            </div>

                            <strong>Price</strong>

                            <p className="my-1">$ 24.42</p>
                        </div>

                        <div className="delete-container">
                            <p>&#215;</p>
                        </div>
                    </div>

                </section>

                <section className="section-cart-total">
                    <h2>Your total is : $ 85.78</h2>
                </section>

                <section className="section-cart-checkout">
                    <a href="page-error.html" className="btn-checkout">Checkout</a>
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
        </div>
    )
}

export default Cart;
