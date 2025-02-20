import React from 'react'
import './checkout.css';
import {Link} from 'react-router-dom';

import Sidebar from 'components/common/sidebar/Sidebar';
import Header from 'components/common/header/Header';
import Footer from 'components/common/footer/Footer';
import NavButton from 'components/common/nav-button/NavButton';

import plant1 from 'img/plant1.jpg';
import plant2 from 'img/plant2.jpg';
import plant3 from 'img/plant3.jpg';

const Checkout = () => {
    return (
        <div>
            <Sidebar />

            <Header />

            <main>

                <section className="about-us-hero">
                    <h1 className="container">Checkout</h1>
                </section>

                <section className="section-checkout">

                    <h1 className="text-center">Checkout time</h1>

                    <div className="checkout-container">

                        <div className="checkout-products">
                            <h2>Your products -</h2>

                            <div className="checkout-item">
                                <img src={plant1} alt="" />
                                <p>Silver Dollar Plant</p>
                                <p>x2 </p>
                                <p>$ 56.78</p>
                            </div>

                            <div className="checkout-item">
                                <img src={plant2} alt="" />
                                <p>Silver Dollar Plant</p>
                                <p>x2 </p>
                                <p>$ 56.78</p>
                            </div>

                            <div className="checkout-item">
                                <img src={plant3} alt="" />
                                <p>Silver Dollar Plant</p>
                                <p>x2 </p>
                                <p>$ 56.78</p>
                            </div>
                        </div>

                        <div className="checkout-payment">
                            <h2>Total : $108.57</h2>

                            <Link to="/checkout" className="btn-credit-debit">Pay with credit/debit</Link>

                            <Link to="/checkout" className="btn-paypal">Pay with PayPal</Link>

                            <div className="checkout-secure-message">
                                <h4>Your payment is 100% Secure.</h4>
                                <i className="fas fa-check-circle"></i>
                            </div>
                        </div>

                    </div>

                </section>

            </main>

            <Footer />

            <NavButton />
        </div>
    )
}

export default Checkout;
