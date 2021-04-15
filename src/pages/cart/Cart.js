import React from 'react';
import {Link} from 'react-router-dom';
import './cart.css';

import Sidebar from 'components/common/sidebar/Sidebar';
import Header from 'components/common/header/Header';
import Footer from 'components/common/footer/Footer';
import NavButton from 'components/common/nav-button/NavButton';

import plant1 from 'img/plant1.jpg';
import plant5 from 'img/plant5.jpg';

const Cart = () => {
    return (
        <div>

            <Sidebar />

            <Header />

            <main>

                <section className="about-us-hero">
                    <h1 className="container">My Cart</h1>
                </section>

                <section className="cart-items">

                    <div className="cart-item">
                        <div className="cart-product-image">
                            <img src={plant1} alt="" />
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
                            <img src={plant5} alt="" />
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
                    <Link to="/checkout" className="btn-checkout">Checkout</Link>
                </section>

            </main>

            <Footer />

            <NavButton />

        </div>
    )
}

export default Cart;
