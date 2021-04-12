import React from 'react'

const Cart = () => {
    return (
        <div>
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

            <main>

                <section class="about-us-hero">
                    <h1 class="container">My Cart</h1>
                </section>

                <section class="cart-items">

                    <div class="cart-item">
                        <div class="cart-product-image">
                            <img src="../img/plant1.jpg" alt="" />
                        </div>

                        <div class="cart-title-desc">
                            <h3>Silver Dollar Plant</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi earum molestiae atque accusamus
                    numquam temporibus.</p>
                            <p class="my-1">Category : <em>'Indoor'</em></p>
                            <p>Pot Included? : Yes</p>
                        </div>

                        <div class="cart-quant-price">

                            <strong>Select Quantity</strong>

                            <div class="cart-item-qty my-1">

                                <div class="cart-qty-inc">
                                    <a href="">-</a>
                                </div>

                                <div class="cart-qty">
                                    <input name="quantity" value="1" type="text" />
                                </div>

                                <div class="cart-qty-dec">
                                    <a href="">+</a>
                                </div>

                            </div>

                            <strong>Price</strong>

                            <p class="my-1">$ 54.42</p>

                        </div>

                        <div class="delete-container">
                            <p>&#215;</p>
                        </div>
                    </div>

                    <div class="cart-item">
                        <div class="cart-product-image">
                            <img src="../img/plant5.jpg" alt="" />
                        </div>

                        <div class="cart-title-desc">
                            <h3>Ficus Bonsai</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi earum molestiae atque accusamus
                    numquam temporibus.</p>
                            <p class="my-1">Category : <em>'Indoor'</em></p>
                            <p>Pot Included? : No</p>
                        </div>

                        <div class="cart-quant-price">

                            <strong>Select Quantity</strong>

                            <div class="cart-item-qty my-1">

                                <div class="cart-qty-inc">
                                    <a href="">-</a>
                                </div>

                                <div class="cart-qty">
                                    <input name="quantity" value="1" type="text" />
                                </div>

                                <div class="cart-qty-dec">
                                    <a href="">+</a>
                                </div>

                            </div>

                            <strong>Price</strong>

                            <p class="my-1">$ 24.42</p>
                        </div>

                        <div class="delete-container">
                            <p>&#215;</p>
                        </div>
                    </div>

                </section>

                <section class="section-cart-total">
                    <h2>Your total is : $ 85.78</h2>
                </section>

                <section class="section-cart-checkout">
                    <a href="page-error.html" class="btn-checkout">Checkout</a>
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
        </div>
    )
}

export default Cart;
