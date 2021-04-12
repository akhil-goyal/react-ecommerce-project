import React from 'react'

function Gallery() {
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

            <main>

                <section class="gallery-hero">
                    <h1 class="container">Explore our variety of plants raised with utmost love.</h1>
                </section>

                <section class="plants-gallery container">

                    <h1 class="text-center">Our little groots</h1>

                    <div class="gallery container">

                        <div class="gallery-image-container">
                            <img class="gallery-image" src="../img/plant1.jpg" alt="" />
                            <div class="gallery-image-overlay">
                                <i class="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div class="gallery-image-container">
                            <img class="gallery-image" src="../img/plant2.jpg" alt="" />
                            <div class="gallery-image-overlay">
                                <i class="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div class="gallery-image-container">
                            <img class="gallery-image" src="../img/plant3.jpg" alt="" />
                            <div class="gallery-image-overlay">
                                <i class="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div class="gallery-image-container">
                            <img class="gallery-image" src="../img/plant4.jpg" alt="" />
                            <div class="gallery-image-overlay">
                                <i class="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div class="gallery-image-container">
                            <img class="gallery-image" src="../img/plant5.jpg" alt="" />
                            <div class="gallery-image-overlay">
                                <i class="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div class="gallery-image-container">
                            <img class="gallery-image" src="../img/plant6.jpg" alt="" />
                            <div class="gallery-image-overlay">
                                <i class="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div class="gallery-image-container">
                            <img class="gallery-image" src="../img/plant1.jpg" alt="" />
                            <div class="gallery-image-overlay">
                                <i class="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div class="gallery-image-container">
                            <img class="gallery-image" src="../img/plant2.jpg" alt="" />
                            <div class="gallery-image-overlay">
                                <i class="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div class="gallery-image-container">
                            <img class="gallery-image" src="../img/plant3.jpg" alt="" />
                            <div class="gallery-image-overlay">
                                <i class="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div class="gallery-image-container">
                            <img class="gallery-image" src="../img/plant4.jpg" alt="" />
                            <div class="gallery-image-overlay">
                                <i class="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div class="gallery-image-container">
                            <img class="gallery-image" src="../img/plant5.jpg" alt="" />
                            <div class="gallery-image-overlay">
                                <i class="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div class="gallery-image-container">
                            <img class="gallery-image" src="../img/plant6.jpg" alt="" />
                            <div class="gallery-image-overlay">
                                <i class="fas fa-search-plus"></i>
                            </div>
                        </div>

                    </div>

                    <div class="load-more-gallery text-center">
                        <a><u>Load more</u></a>
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

export default Gallery;