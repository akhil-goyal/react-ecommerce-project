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

            <aside class="side-bar">

                <article class="sidebar-title">

                    <h5 class="hidden">""</h5>

                    <figure>
                        <a href="/index.html" class="sidebar-logo">
                            Spruce <img src="../img/logo.png" style="height: 2rem; width: 1.5rem;" alt="Spruce Logo" />
                        </a>
                    </figure>

                    <a href="javascript:void(0)" class="menu-close">&times;</a>

                </article>

                <nav aria-label="Primary" class="navigation">

                    <ul class="menu">

                        <li><a href="#"><i class="fas fa-home"></i> Home</a></li>

                        <li><a href="plants-gallery.html"><i class="fas fa-images"></i> Gallery</a></li>

                        <li><a href="#"><i class="fas fa-user tie"></i> User Profile</a></li>

                        <li><a href="about-us.html"><i class="fas fa-info-circle"></i> About</a></li>

                        <li><a href="contact-us.html"><i class="fas fa-user tie"></i> Contact Us</a></li>

                        <li>
                            <article class="your-products">
                                <h5 class="hidden">""</h5>
                                <a href="#"><i class="fas fa-heart"></i> Favourites</a>

                                <a href="#"><i class="fas fa-shopping-cart"></i> Cart</a>

                            </article>
                        </li>

                    </ul>

                </nav>

            </aside>

            <header class="page-header container flex">

                <figure class="menu-bar">
                    <i class="fas fa-bars"></i>
                </figure>

                <figure class="logo-container">
                    <a href="/index.html" class="logo">Spruce</a>
                    <img src="../img/logo.png" alt="Site Logo" />
                </figure>

                <figure class="user-settings"><img class="user-image" src="../img/user.jpg" alt="" />
                </figure>

            </header>

            <header id="page-header-webview" class="page-header-webview container">

                <figure class="logo-container">
                    <a href="/index.html" class="logo">Spruce</a>
                    <img src="../img/logo.png" alt="Site Logo" />
                </figure>

                <nav class="header-webview-nav">
                    <ul class="flex">
                        <li><a href="dashboard.html">Home</a></li>
                        <li><a href="plants-gallery.html">Gallery</a></li>
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="contact-us.html">Contact</a></li>
                    </ul>
                </nav>

                <figure class="user-settings flex">

                    <img class="user-image" src="../img/user.jpg" alt="" />

                    <div class="flex">
                        <i class="fas fa-shopping-cart"></i>
                        <div class="cart-total">0</div>
                    </div>

                </figure>

            </header>

            <main class="container">

                <h1>Product Details</h1>

                <section class="section-product-details">

                    <div class="product-image">
                        <img src="../img/1.jpg" alt="" />
                    </div>

                    <div class="product-info">

                        <div class="product-title-ratings">

                            <h2>Product Name</h2>

                            <div class="product-ratings flex">
                                <p>4.5</p>
                                <div>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
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
                            <p>Price : <del>$100</del> <span class="price">$80</span> only.</p>
                        </div>

                        <div class="product-buttons">
                            <div class="add-to-favourites">
                                <p>Add to Favourites</p>
                                <i class="fas fa-heart"></i>
                            </div>

                            <div class="add-to-cart">
                                <input type="submit" value="Add to Cart" class="btn-cart" />
                            </div>
                        </div>

                    </div>

                </section>

            </main>

            <footer class="page-footer">

                <nav>
                    <ul class="social">
                        <li><a target="_blank" href="https://www.facebook.com"><i class="fab fa-facebook"></i></a></li>
                        <li><a target="_blank" href="https://www.instagram.com"><i class="fab fa-instagram"></i></a></li>
                        <li><a target="_blank" href="https://www.twitter.com"><i class="fab fa-twitter-square"></i></a></li>
                    </ul>
                </nav>

                <nav aria-label="Legal">
                    <ul class="legal">
                        <li><a href="#">Terms of Use</a></li>
                        <li>|</li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li>|</li>
                        <li><a href="#">Accessibility Policy</a></li>
                    </ul>
                </nav>

                <p class="text-center"><small class="copyright">Copyright &copy; 2021 | Spruce</small></p>

            </footer>
        </>
    )
}

export default Product;