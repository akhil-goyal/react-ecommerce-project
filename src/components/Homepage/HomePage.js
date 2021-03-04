import React from 'react';

const HomePage = () => {
    return (
        <>
            <aside id="nav-top">

            </aside>

            <aside className="side-bar">

                <article className="sidebar-title">

                    <h5 className="hidden">""</h5>

                    <figure>
                        <a href="index.html" className="sidebar-logo">
                            Spruce <img src="img/logo.png" style="height: 2rem; width: 1.5rem;" alt="Spruce Logo" />
                        </a>
                    </figure>

                    <a href="javascript:void(0)" className="menu-close">&times;</a>

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
                    <a href="index.html" className="logo">Spruce</a>
                    <img src="img/logo.png" alt="Site Logo" />
                </figure>

                <figure className="user-settings"><img className="user-image" src="img/user.jpg" alt="" />
                </figure>

            </header>

            <header id="page-header-webview" className="page-header-webview container">

                <figure className="logo-container">
                    <a href="index.html" className="logo">Spruce</a>
                    <img src="img/logo.png" alt="Site Logo" />
                </figure>

                <nav className="header-webview-nav">
                    <ul className="flex">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Categories</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>

                <figure className="user-settings"><img className="user-image" src="img/user.jpg" alt="" />
                </figure>

            </header>

            <main className="products">

                <section className="heading">
                    <h1 className="container">Exotic greens delivered to your doorstep.</h1>
                </section>

                <section className="trending">

                    <h5 className="hidden">""</h5>

                    <article>
                        <h2 className="subheading text-center">What's blooming?</h2>
                    </article>

                    <article className="trending-products">

                        <h5 className="hidden">""</h5>

                        <figure className="trending-product flex">
                            <img src="img/plant1.jpg" alt="Plant" />
                            <figcaption className="text-center"><em>Silver Dollar Plant</em></figcaption>
                        </figure>
                        <figure className="trending-product flex">
                            <img src="img/plant2.jpg" alt="Plant" />
                            <figcaption className="text-center"><em>String Of Pearls</em></figcaption>
                        </figure>
                        <figure className="trending-product flex">
                            <img src="img/plant3.jpg" alt="Plant" />
                            <figcaption className="text-center"><em>Peace Lily</em></figcaption>
                        </figure>
                        <figure className="trending-product flex">
                            <img src="img/plant4.jpg" alt="Plant" />
                            <figcaption className="text-center"><em>Areca Palm</em></figcaption>
                        </figure>
                        <figure className="trending-product flex">
                            <img src="img/plant5.jpg" alt="Plant" />
                            <figcaption className="text-center"><em>Grafted Ficus Bonsai</em></figcaption>
                        </figure>
                        <figure className="trending-product flex">
                            <img src="img/plant6.jpg" alt="Plant" />
                            <figcaption className="text-center"><em>Calathea Orbifolia</em></figcaption>
                        </figure>
                        <figure className="trending-product flex">
                            <img src="img/plant1.jpg" alt="Plant" />
                            <figcaption className="text-center"><em>Silver Dollar Plant</em></figcaption>
                        </figure>
                        <figure className="trending-product flex">
                            <img src="img/plant2.jpg" alt="Plant" />
                            <figcaption className="text-center"><em>String Of Pearls</em></figcaption>
                        </figure>
                        <figure className="trending-product flex">
                            <img src="img/plant3.jpg" alt="Plant" />
                            <figcaption className="text-center"><em>Peace Lily</em></figcaption>
                        </figure>
                        <figure className="trending-product flex">
                            <img src="img/plant4.jpg" alt="Plant" />
                            <figcaption className="text-center"><em>Areca Palm</em></figcaption>
                        </figure>
                    </article>

                </section>

                <section className="highlights container">

                    <h5 className="hidden">""</h5>

                    <article>
                        <h2 className="subheading text-center">Why Spruce?</h2>
                    </article>

                    <section className="grid">

                        <h5 className="hidden">""</h5>

                        <article className="highlight-1">

                            <h5 className="hidden">""</h5>

                            <p>We believe in nurturing the plants from seed to bead.</p>
                        </article>

                        <article className="highlight-2">

                            <h5 className="hidden">""</h5>

                            <p>Our expert botanists keep a check on well being of all our tiny groots.</p>
                        </article>

                        <article className="highlight-3">

                            <h5 className="hidden">""</h5>

                            <p>We provide our little friends with the best of manure & pretty sunlight.</p>
                        </article>

                    </section>

                </section>

                <section className="section-product-and-filters container">

                    <h5 className="hidden">""</h5>

                    <section className="display-filters">

                        <h5 className="hidden">""</h5>

                        <article className="product-filters flex">

                            <h5 className="hidden">""</h5>

                            <h2>Filters</h2>
                            <figure className="button-filters"><i className="fas fa-sliders-h"></i></figure>
                        </article>

                        <article>

                            <h5 className="hidden">""</h5>

                            <h5 className="hidden">""</h5>

                            <form className="filters">

                                <section className="filter-options">

                                    <h5 className="hidden">""</h5>

                                    <fieldset>

                                        <legend>Plant type :</legend>

                                        <nav>
                                            <ul className="filter-plant-types">

                                                <li>
                                                    <input type="checkbox" name="type-filter" value="outdoor" id="filter-outdoor" />
                                                    <label for="filter-outdoor">Outdoor</label>
                                                </li>

                                                <li>
                                                    <input type="checkbox" name="type-filter" value="indoor" id="filter-indoor" />
                                                    <label for="filter-indoor">Indoor</label>
                                                </li>

                                                <li>
                                                    <input type="checkbox" name="type-filter" value="aerial" id="filter-aerial" />
                                                    <label for="filter-aerial">Aerial</label>
                                                </li>

                                            </ul>
                                        </nav>

                                    </fieldset>

                                    <fieldset className="my-1">

                                        <legend>Pot requirement :</legend>

                                        <nav>
                                            <ul className="filter-pot-requirement">

                                                <li><input type="checkbox" name="req-filter" value="incl" id="filter-incl" /> <label
                                                    for="filter-incl">Including Pot</label></li>

                                                <li><input type="checkbox" name="req-filter" value="excl" id="filter-excl" /> <label
                                                    for="filter-excl">Excluding Pot</label></li>

                                            </ul>
                                        </nav>

                                    </fieldset>

                                    <fieldset className="my-1">

                                        <legend>Plant size :</legend>

                                        <nav>
                                            <ol className="filter-plant-size">

                                                <li><input type="checkbox" name="size-filter" value="input-seed" id="filter-seed" /> <label
                                                    for="filter-seed">Seedlings</label></li>

                                                <li><input type="checkbox" name="size-filter" value="input-sapling" id="filter-sapling" /> <label
                                                    for="filter-sapling">Sapling</label></li>

                                                <li><input type="checkbox" name="size-filter" value="input-peak" id="filter-peak" /> <label
                                                    for="filter-peak">Peak</label></li>

                                            </ol>
                                        </nav>

                                    </fieldset>

                                    <fieldset className="my-1">

                                        <legend>Ratings (above)</legend>

                                        <nav>
                                            <ol className="filter-list">

                                                <li>
                                                    <input type="radio" name="rating" value="4" id="aboveFour" />
                                                    <label for="aboveFour">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                    </label>
                                                </li>

                                                <li>
                                                    <input type="radio" name="rating" value="3" id="aboveThree" />
                                                    <label for="aboveThree">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                    </label>
                                                </li>

                                                <li>
                                                    <input type="radio" name="rating" value="2" id="aboveTwo" />
                                                    <label for="aboveTwo">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                    </label>
                                                </li>

                                                <li>
                                                    <input type="radio" name="rating" value="1" id="aboveOne" />
                                                    <label for="aboveOne">
                                                        <i className="fas fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                    </label>
                                                </li>

                                            </ol>
                                        </nav>

                                    </fieldset>

                                    <fieldset>

                                        <label className="label-sort" for="sort">Sort by</label>

                                        <select name="sort" id="sort">

                                            <option value="relevance">Relevance</option>
                                            <option value="new-arrivals">Newest Arrivals</option>
                                            <option value="high-to-low">Price, lowest to highest</option>
                                            <option value="low-to-high">Price, highest to lowest</option>

                                        </select>

                                    </fieldset>

                                </section>

                            </form>
                        </article>

                    </section>

                    <section className="results grid-span">

                        <h5 className="hidden">""</h5>

                        <article className="products-and-search">

                            <h5 className="hidden">""</h5>

                            <h2 className="subheading">Here are the greenies -</h2>

                            <section className="product-search">

                                <h5 className="hidden">""</h5>

                                <article className="search-box">

                                    <h5 className="hidden">""</h5>

                                    <input className="search-bar" type="text" placeholder="Search for exotic plants" name="search" />
                                    <figure className="button-search">
                                        <img alt="Search icon" src="https://img.icons8.com/cotton/24/000000/search--v2.png" />
                                    </figure>
                                </article>
                            </section>

                        </article>

                        <section className="grid products-list">

                            <h5 className="hidden">""</h5>

                            <article className="product container my-1">

                                <h5 className="hidden">""</h5>

                                <section>

                                    <h5 className="hidden">""</h5>

                                    <figure>
                                        <img className="product-picture" src="img/plant1.jpg" alt="Silver Dollar Plant" />
                                    </figure>

                                    <article className="product-title-icons flex">

                                        <h5 className="hidden">""</h5>

                                        <figure className="product-title-newflash flex">

                                            <h3>Silver Dollar Plant</h3>
                                            <img className="new-product-icon" src="img/new.png" alt="" />

                                        </figure>

                                        <article className="flex">

                                            <h5 className="hidden">""</h5>

                                            <figure><i className="fas fa-shopping-cart"></i></figure>
                                            <figure><i className="fas fa-heart"></i></figure>
                                        </article>

                                    </article>

                                    <article className="product-price-ratings flex">

                                        <h5 className="hidden">""</h5>

                                        <data value="40"><del>$50.00</del> <ins>$40.00</ins></data>

                                        <article className="product-ratings flex">

                                            <h5 className="hidden">""</h5>

                                            <p>4.5</p>
                                            <figure>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                            </figure>
                                        </article>

                                    </article>

                                    <article className="product-discount-category">

                                        <h5 className="hidden">""</h5>

                                        <span><strong>Discount : </strong> <em>20% off</em></span>

                                        <span><strong>Category : </strong> <em>Indoor</em></span>
                                    </article>

                                    <br />

                                    <article>

                                        <h5 className="hidden">""</h5>

                                        <p>
                                            If you’re looking for drought-tolerant plants, succulents like the Xerosicyos da...
              </p>
                                    </article>

                                    <article>

                                        <h5 className="hidden">""</h5>

                                        <a href="#" className="button-product-details"><u>View details</u></a>

                                    </article>

                                </section>

                                <section>

                                    <h5 className="hidden">""</h5>

                                    <form>

                                        <fieldset>

                                            <legend>Pot requirement :</legend>

                                            <nav>
                                                <ul className="pot-fields">

                                                    <li>
                                                        <input id="pot1-req" type="radio" name="pot-requirement" value="req" />
                                                        <label for="pot1-req">Required</label>
                                                    </li>

                                                    <li>
                                                        <input id="pot1-not-req" type="radio" name="pot-requirement" value="not-req" />
                                                        <label for="pot1-not-req">Not required</label>
                                                    </li>

                                                </ul>
                                            </nav>

                                        </fieldset>

                                        <fieldset className="my-1">

                                            <legend>Plant Size :</legend>

                                            <nav>
                                                <ol className="size-fields">

                                                    <li>
                                                        <input id="pot1-size-1" type="radio" name="plant-size" value="seed" />
                                                        <label for="pot1-size-1">Seedlings</label>
                                                    </li>

                                                    <li>
                                                        <input id="pot1-size-2" type="radio" name="plant-size" value="sapling" />
                                                        <label for="pot1-size-2">Sapling</label>
                                                    </li>

                                                    <li>
                                                        <input id="pot1-size-3" type="radio" name="plant-size" value="peak" />
                                                        <label for="pot1-size-3">Peak</label>
                                                    </li>

                                                </ol>
                                            </nav>

                                        </fieldset>

                                        <fieldset>
                                            <button className="button-buy my-1">Buy Now</button>
                                        </fieldset>

                                    </form>
                                </section>

                            </article>

                            <article className="product container my-1">

                                <h5 className="hidden">""</h5>

                                <section>

                                    <h5 className="hidden">""</h5>

                                    <figure>
                                        <img className="product-picture" src="img/plant2.jpg" alt="String of pearls" />
                                    </figure>

                                    <article className="product-title-icons flex">

                                        <h5 className="hidden">""</h5>

                                        <figure className="product-title-newflash flex">

                                            <h3>String of pearls</h3>

                                        </figure>

                                        <article className="flex">

                                            <h5 className="hidden">""</h5>

                                            <figure><i className="fas fa-shopping-cart"></i></figure>
                                            <figure><i className="fas fa-heart"></i></figure>
                                        </article>

                                    </article>

                                    <article className="product-price-ratings flex">

                                        <h5 className="hidden">""</h5>

                                        <data value="72.25"><del>$85.00</del> <ins>$72.25</ins></data>

                                        <article className="product-ratings flex">

                                            <h5 className="hidden">""</h5>

                                            <p>5.0</p>
                                            <figure>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </figure>
                                        </article>

                                    </article>

                                    <article className="product-discount-category">

                                        <h5 className="hidden">""</h5>

                                        <span><strong>Discount : </strong> <em>15% off</em></span>

                                        <span><strong>Category : </strong> <em>Aerial</em></span>

                                    </article>

                                    <br />

                                    <article>

                                        <h5 className="hidden">""</h5>

                                        <p>
                                            What a unique houseplant! Guests are sure to comment on the grace of your beauti...
              </p>

                                    </article>

                                    <article>

                                        <h5 className="hidden">""</h5>

                                        <a href="#" className="button-product-details"><u>View details</u></a>

                                    </article>

                                </section>

                                <section>

                                    <h5 className="hidden">""</h5>

                                    <form>

                                        <fieldset>

                                            <legend>Pot requirement :</legend>

                                            <nav>
                                                <ul className="pot-fields">

                                                    <li>
                                                        <input id="pot2-req" type="radio" name="pot-requirement" value="req" />
                                                        <label for="pot2-req">Required</label>
                                                    </li>

                                                    <li>
                                                        <input id="pot2-not-req" type="radio" name="pot-requirement" value="not-req" />
                                                        <label for="pot2-not-req">Not required</label>
                                                    </li>

                                                </ul>
                                            </nav>

                                        </fieldset>

                                        <fieldset className="my-1">

                                            <legend>Plant Size :</legend>

                                            <nav>
                                                <ol className="size-fields">

                                                    <li>
                                                        <input id="pot2-size-1" type="radio" name="plant-size" value="seed" />
                                                        <label for="pot2-size-1">Seedlings</label>
                                                    </li>

                                                    <li>
                                                        <input id="pot2-size-2" type="radio" name="plant-size" value="sapling" />
                                                        <label for="pot2-size-2">Sapling</label>
                                                    </li>

                                                    <li>
                                                        <input id="pot2-size-3" type="radio" name="plant-size" value="peak" />
                                                        <label for="pot2-size-3">Peak</label>
                                                    </li>

                                                </ol>
                                            </nav>

                                        </fieldset>

                                        <fieldset>
                                            <button className="button-buy my-1">Buy Now</button>
                                        </fieldset>

                                    </form>
                                </section>

                            </article>

                            <article className="product container my-1">

                                <h5 className="hidden">""</h5>

                                <section>

                                    <h5 className="hidden">""</h5>

                                    <figure>
                                        <img className="product-picture" src="img/plant3.jpg" alt="Peace Lilly" />
                                    </figure>

                                    <article className="product-title-icons flex">

                                        <h5 className="hidden">""</h5>

                                        <figure className="product-title-newflash flex">

                                            <h3>Peace Lilly</h3>
                                            <img className="new-product-icon" src="img/new.png" alt="" />

                                        </figure>

                                        <article className="flex">

                                            <h5 className="hidden">""</h5>

                                            <figure><i className="fas fa-shopping-cart"></i></figure>
                                            <figure><i className="fas fa-heart"></i></figure>
                                        </article>

                                    </article>

                                    <article className="product-price-ratings flex">

                                        <h5 className="hidden">""</h5>

                                        <data value="30.36"><del>$33.00</del> <ins>$30.36</ins></data>

                                        <article className="product-ratings flex">

                                            <h5 className="hidden">""</h5>

                                            <p>4.0</p>
                                            <figure>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </figure>
                                        </article>

                                    </article>

                                    <article className="product-discount-category">

                                        <h5 className="hidden">""</h5>

                                        <span><strong>Discount : </strong> <em>8% off</em></span>

                                        <span><strong>Category : </strong> <em>Indoor</em></span>

                                    </article>

                                    <br />

                                    <article>

                                        <h5 className="hidden">""</h5>

                                        <p>
                                            Sometimes flowering plants prove the most challenging to keep healthy, but certa...
              </p>
                                    </article>

                                    <article>

                                        <h5 className="hidden">""</h5>

                                        <a href="#" className="button-product-details"><u>View details</u></a>

                                    </article>

                                </section>

                                <section>

                                    <h5 className="hidden">""</h5>

                                    <form>

                                        <fieldset>

                                            <legend>Pot requirement :</legend>

                                            <nav>
                                                <ul className="pot-fields">

                                                    <li>
                                                        <input id="pot3-req" type="radio" name="pot-requirement" value="req" />
                                                        <label for="pot3-req">Required</label>
                                                    </li>

                                                    <li>
                                                        <input id="pot3-not-req" type="radio" name="pot-requirement" value="not-req" />
                                                        <label for="pot3-not-req">Not required</label>
                                                    </li>

                                                </ul>
                                            </nav>

                                        </fieldset>

                                        <fieldset className="my-1">

                                            <legend>Plant Size :</legend>

                                            <nav>
                                                <ol className="size-fields">

                                                    <li>
                                                        <input id="pot3-size-1" type="radio" name="plant-size" value="seed" />
                                                        <label for="pot3-size-1">Seedlings</label>
                                                    </li>

                                                    <li>
                                                        <input id="pot3-size-2" type="radio" name="plant-size" value="sapling" />
                                                        <label for="pot3-size-2">Sapling</label>
                                                    </li>

                                                    <li>
                                                        <input id="pot3-size-3" type="radio" name="plant-size" value="peak" />
                                                        <label for="pot3-size-3">Peak</label>
                                                    </li>

                                                </ol>
                                            </nav>

                                        </fieldset>

                                        <fieldset>
                                            <button className="button-buy my-1">Buy Now</button>
                                        </fieldset>

                                    </form>
                                </section>

                            </article>

                            <article className="product container my-1">

                                <h5 className="hidden">""</h5>

                                <section>

                                    <h5 className="hidden">""</h5>

                                    <figure>
                                        <img className="product-picture" src="img/plant4.jpg" alt="Areca Palm" />
                                    </figure>

                                    <article className="product-title-icons flex">

                                        <h5 className="hidden">""</h5>

                                        <figure className="product-title-newflash flex">

                                            <h3>Areca Palm</h3>

                                        </figure>

                                        <article className="flex">

                                            <h5 className="hidden">""</h5>

                                            <figure><i className="fas fa-shopping-cart"></i></figure>
                                            <figure><i className="fas fa-heart"></i></figure>
                                        </article>

                                    </article>

                                    <article className="product-price-ratings flex">

                                        <h5 className="hidden">""</h5>

                                        <data value="66.88"><del>$76.00</del> <ins>$66.88</ins></data>

                                        <article className="product-ratings flex">

                                            <h5 className="hidden">""</h5>

                                            <p>3.5</p>
                                            <figure>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                                <i className="far fa-star"></i>
                                            </figure>
                                        </article>

                                    </article>

                                    <article className="product-discount-category">

                                        <h5 className="hidden">""</h5>

                                        <span><strong>Discount : </strong> <em>12% off</em></span>

                                        <span><strong>Category : </strong> <em>Outdoor</em></span>
                                    </article>

                                    <br />

                                    <article>

                                        <h5 className="hidden">""</h5>

                                        <p>
                                            Dypsis lutescens, commonly known as golden cane palm or areca palm, makes a love...
              </p>
                                    </article>

                                    <article>

                                        <h5 className="hidden">""</h5>

                                        <a href="#" className="button-product-details"><u>View details</u></a>

                                    </article>

                                </section>

                                <section>

                                    <h5 className="hidden">""</h5>

                                    <form>

                                        <fieldset>

                                            <legend>Pot requirement :</legend>

                                            <nav>
                                                <ul className="pot-fields">

                                                    <li>
                                                        <input id="pot4-req" type="radio" name="pot-requirement" value="req" />
                                                        <label for="pot4-req">Required</label>
                                                    </li>

                                                    <li>
                                                        <input id="pot4-not-req" type="radio" name="pot-requirement" value="not-req" />
                                                        <label for="pot4-not-req">Not required</label>
                                                    </li>

                                                </ul>
                                            </nav>

                                        </fieldset>

                                        <fieldset className="my-1">

                                            <legend>Plant Size :</legend>

                                            <nav>
                                                <ol className="size-fields">

                                                    <li>
                                                        <input id="pot4-size-1" type="radio" name="plant-size" value="seed" />
                                                        <label for="pot4-size-1">Seedlings</label>
                                                    </li>

                                                    <li>
                                                        <input id="pot4-size-2" type="radio" name="plant-size" value="sapling" />
                                                        <label for="pot4-size-2">Sapling</label>
                                                    </li>

                                                    <li>
                                                        <input id="pot4-size-3" type="radio" name="plant-size" value="peak" />
                                                        <label for="pot4-size-3">Peak</label>
                                                    </li>

                                                </ol>
                                            </nav>

                                        </fieldset>

                                        <fieldset>
                                            <button className="button-buy my-1">Buy Now</button>
                                        </fieldset>

                                    </form>
                                </section>

                            </article>

                            <article className="product container my-1">

                                <h5 className="hidden">""</h5>

                                <section>

                                    <h5 className="hidden">""</h5>

                                    <figure>
                                        <img className="product-picture" src="img/plant5.jpg" alt="Grafted Ficus Bonsai" />
                                    </figure>

                                    <article className="product-title-icons flex">

                                        <h5 className="hidden">""</h5>

                                        <figure className="product-title-newflash flex">

                                            <h3>Grafted Ficus Bonsai</h3>
                                            <img className="new-product-icon" src="img/new.png" alt="" />

                                        </figure>

                                        <article className="flex">

                                            <h5 className="hidden">""</h5>

                                            <figure><i className="fas fa-shopping-cart"></i></figure>
                                            <figure><i className="fas fa-heart"></i></figure>
                                        </article>

                                    </article>

                                    <article className="product-price-ratings flex">

                                        <h5 className="hidden">""</h5>

                                        <data value="22.80"><del>$24.00</del> <ins>$22.80</ins></data>

                                        <article className="product-ratings flex">

                                            <h5 className="hidden">""</h5>

                                            <p>4.0</p>
                                            <figure>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </figure>
                                        </article>

                                    </article>

                                    <article className="product-discount-category">

                                        <h5 className="hidden">""</h5>

                                        <span><strong>Discount : </strong> <em>5% off</em></span>

                                        <span><strong>Category : </strong> <em>Indoor</em></span>
                                    </article>

                                    <br />

                                    <article>

                                        <h5 className="hidden">""</h5>

                                        <p>
                                            Are you looking for a small desk plant sure to spark conversation? Ficus microca...
              </p>
                                    </article>

                                    <article>

                                        <h5 className="hidden">""</h5>

                                        <a href="#" className="button-product-details"><u>View details</u></a>

                                    </article>

                                </section>

                                <section>

                                    <h5 className="hidden">""</h5>

                                    <form>

                                        <fieldset>

                                            <legend>Pot requirement :</legend>

                                            <nav>
                                                <ul className="pot-fields">

                                                    <li>
                                                        <input id="pot5-req" type="radio" name="pot-requirement" value="req" />
                                                        <label for="pot5-req">Required</label>
                                                    </li>

                                                    <li>
                                                        <input id="pot5-not-req" type="radio" name="pot-requirement" value="not-req" />
                                                        <label for="pot5-not-req">Not required</label>
                                                    </li>

                                                </ul>
                                            </nav>

                                        </fieldset>

                                        <fieldset className="my-1">

                                            <legend>Plant Size :</legend>

                                            <nav>
                                                <ol className="size-fields">

                                                    <li>
                                                        <input id="pot5-size-1" type="radio" name="plant-size" value="seed" />
                                                        <label for="pot5-size-1">Seedlings</label>
                                                    </li>

                                                    <li>
                                                        <input id="pot5-size-2" type="radio" name="plant-size" value="sapling" />
                                                        <label for="pot5-size-2">Sapling</label>
                                                    </li>

                                                    <li>
                                                        <input id="pot5-size-3" type="radio" name="plant-size" value="peak" />
                                                        <label for="pot5-size-3">Peak</label>
                                                    </li>

                                                </ol>
                                            </nav>

                                        </fieldset>

                                        <fieldset>
                                            <button className="button-buy my-1">Buy Now</button>
                                        </fieldset>

                                    </form>
                                </section>

                            </article>

                            <article className="product container my-1">

                                <h5 className="hidden">""</h5>

                                <section>

                                    <h5 className="hidden">""</h5>

                                    <figure>
                                        <img className="product-picture" src="img/plant6.jpg" alt="Calathea Orbifolia" />
                                    </figure>

                                    <article className="product-title-icons flex">

                                        <h5 className="hidden">""</h5>

                                        <figure className="product-title-newflash flex">

                                            <h3>Calathea Orbifolia</h3>

                                        </figure>

                                        <article className="flex">

                                            <h5 className="hidden">""</h5>

                                            <figure><i className="fas fa-shopping-cart"></i></figure>
                                            <figure><i className="fas fa-heart"></i></figure>
                                        </article>

                                    </article>

                                    <article className="product-price-ratings flex">

                                        <h5 className="hidden">""</h5>

                                        <data value="53.60"><del>$67.00</del> <ins>$53.60</ins></data>

                                        <article className="product-ratings flex">

                                            <h5 className="hidden">""</h5>

                                            <p>4.5</p>
                                            <figure>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                            </figure>
                                        </article>

                                    </article>

                                    <article className="product-discount-category">

                                        <h5 className="hidden">""</h5>

                                        <span><strong>Discount : </strong> <em>20% off</em></span>

                                        <span><strong>Category : </strong> <em>Outdoor</em></span>
                                    </article>

                                    <br />

                                    <article>

                                        <h5 className="hidden">""</h5>

                                        <p>
                                            Smooth streaks of white stand out against the vivid green leaves of the Calathea...
              </p>
                                    </article>

                                    <article>

                                        <h5 className="hidden">""</h5>

                                        <a href="#" className="button-product-details"><u>View details</u></a>

                                    </article>

                                </section>

                                <section>

                                    <h5 className="hidden">""</h5>

                                    <form>

                                        <fieldset>

                                            <legend>Pot requirement :</legend>

                                            <nav>
                                                <ul className="pot-fields">

                                                    <li>
                                                        <input id="pot6-req" type="radio" name="pot-requirement" value="req" />
                                                        <label for="pot6-req">Required</label>
                                                    </li>

                                                    <li>
                                                        <input id="pot6-not-req" type="radio" name="pot-requirement" value="not-req" />
                                                        <label for="pot6-not-req">Not required</label>
                                                    </li>

                                                </ul>
                                            </nav>

                                        </fieldset>

                                        <fieldset className="my-1">

                                            <legend>Plant Size :</legend>

                                            <nav>
                                                <ol className="size-fields">

                                                    <li>
                                                        <input id="pot6-size-1" type="radio" name="plant-size" value="seed" />
                                                        <label for="pot6-size-1">Seedlings</label>
                                                    </li>

                                                    <li>
                                                        <input id="pot6-size-2" type="radio" name="plant-size" value="sapling" />
                                                        <label for="pot6-size-2">Sapling</label>
                                                    </li>

                                                    <li>
                                                        <input id="pot6-size-3" type="radio" name="plant-size" value="peak" />
                                                        <label for="pot6-size-3">Peak</label>
                                                    </li>

                                                </ol>
                                            </nav>

                                        </fieldset>

                                        <fieldset>
                                            <button className="button-buy my-1">Buy Now</button>
                                        </fieldset>

                                    </form>
                                </section>

                            </article>

                        </section>

                    </section>

                </section>

                <section>

                    <h5 className="hidden">""</h5>

                    <nav aria-label="Pagination" className="pagination text-center container">

                        <article>

                            <h5 className="hidden">""</h5>

                            <p><strong>Displaying 1-6 of 24 products.</strong></p>

                        </article>

                        <nav>
                            <ol className="pages flex">
                                <li><a href="#" aria-label="Current Page, Page 1" aria-current="true">1</a></li>
                                <li><a href="#" aria-label="Page 2">2</a></li>
                                <li><a href="#" aria-label="Page 3">3</a></li>
                                <li><a href="#" aria-label="Page 4">4</a></li>
                                <li><a href="#" aria-label="Page 5">5</a></li>
                            </ol>
                        </nav>

                        <article className="buttons-prev-next container">


                            <h5 className="hidden">""</h5>

                            <a href="#">Previous</a>
                            <a href="#">Next</a>
                        </article>

                    </nav>
                </section>

                <section className="customer-reviews container">

                    <h5 className="hidden">""</h5>

                    <article>
                        <h2 className="subheading text-center">Our happy anthophiles :)</h2>
                    </article>

                    <article className="reviews">

                        <h5 className="hidden">""</h5>

                        <article className="review-1">
                            <h5 className="hidden">""</h5>

                            <img src="img/customer1.jpg" alt="User 1" />

                            <section className="customer-review-name">

                                <h5 className="hidden">""</h5>

                                <p>
                                    Spruce has all the beautiful greens that enchance the beauty of my garden. Thank you to the team Spruce.
          </p>
                                <strong>- John Doe</strong>
                            </section>
                        </article>

                        <section className="separator-vertical">
                            <h5 className="hidden">""</h5>

                        </section>

                        <article className="review-2">
                            <h5 className="hidden">""</h5>

                            <img src="img/customer2.jpg" alt="User 2" />
                            <section className="customer-review-name">
                                <h5 className="hidden">""</h5>

                                <p>
                                    Whenever I have to make a new addition to my home garden, I always look upto Spruce to get some stuff.
          </p>
                                <strong>- Sarah Williams</strong>
                            </section>
                        </article>

                        <section className="separator-vertical">
                            <h5 className="hidden">""</h5>
                        </section>

                        <article className="review-3">

                            <h5 className="hidden">""</h5>

                            <img src="img/customer3.jpg" alt="User 3" />

                            <section className="customer-review-name">

                                <h5 className="hidden">""</h5>

                                <p>
                                    Spruce is a great website for all my needs. I can find every beautiful plant/flowers over here for my home and office.
          </p>
                                <strong>- Ken Stark</strong>
                            </section>
                        </article>

                    </article>

                </section>

                <section className="newsletter-subscription container">
                    <h5 className="hidden">""</h5>

                    <article>
                        <h2 className="subheading text-center">Subscribe to our newsletter</h2>
                    </article>

                    <article className="newsletter">
                        <h5 className="hidden">""</h5>

                        <p>Subscribe to get latest information about the new coming plants in our nursery.
                        Be the first one to bring them home.
      </p>
                        <input className="newsletter-email" type="email" placeholder="Email Address" />
                        <button className="newsletter-button">Subscribe</button>
                        <small>Unsubscribe anytime. We won't spam you ever. Promise :)</small>
                    </article>

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

            <section className="section-top-button">


                <h5 className="hidden">""</h5>

                <a href="#nav-top">
                    <article className="flex">


                        <h5 className="hidden">""</h5>

                        <p>&#8593;</p>
                    </article>
                </a>

            </section>

        </>
    )
}

export default HomePage;