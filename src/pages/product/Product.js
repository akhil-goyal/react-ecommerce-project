import React from 'react';
import { useParams } from 'react-router-dom';
import './product.css';

const Product = ({ productsList }) => {

    const { slug } = useParams();

    const product = productsList.find((prod) => prod.slug() === slug) || productsList[0];

    const { img, name, description } = product.features;

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

            <main className="container">

                <h1>Product Details</h1>

                <section className="section-product-details">

                    <div className="product-image">
                        <img src="img/1.jpg" alt="" />
                    </div>

                    <div className="product-info">

                        <div className="product-title-ratings">

                            <h2>Product Name</h2>

                            <div className="product-ratings flex">
                                <p>4.5</p>
                                <div>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                            </div>

                        </div>

                        <div>
                            <h3>Product Description</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, placeat autem architecto qui
                            repudiandae quis. Impedit nobis minus facere amet similique eos eveniet sit inventore, mollitia
                            commodi! Nisi doloremque dolorem distinctio nam obcaecati velit ipsum quasi hic architecto nulla
                            repellendus eligendi alias placeat sapiente, commodi non vero tempora vel a quam. Alias deserunt
                            ipsum eius quaerat placeat corrupti qui. Asperiores, fugit ab corrupti cupiditate impedit natus,
                            dolores quaerat atque ut laudantium tenetur libero beatae illo omnis debitis perspiciatis
                            placeat.
                </p>
                        </div>

                        <div>
                            <p>Category : <em>Indoor</em></p>
                        </div>

                        <div>
                            <p>Price : <del>$100</del> <span className="price">$80</span> only.</p>
                        </div>

                        <div className="product-buttons">
                            <div className="add-to-favourites">
                                <p>Add to Favourites</p>
                                <i className="fas fa-heart"></i>
                            </div>

                            <div className="add-to-cart">
                                <input type="submit" value="Add to Cart" className="btn-cart" />
                            </div>
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

export default Product;