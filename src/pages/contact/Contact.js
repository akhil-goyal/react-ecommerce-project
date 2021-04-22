import React from 'react'
import './contact.css';

import Sidebar from 'components/common/sidebar/Sidebar';
import Header from 'components/common/header/Header';
import Footer from 'components/common/footer/Footer';
import NavButton from 'components/common/nav-button/NavButton';

import map from 'img/map.png';

function Contact() {
    return (
        <>

            <Sidebar />

            <Header />

            <main>

                <section className="contact-us-hero">
                    <h1 className="container">Contact Us</h1>
                </section>

                <section className="contact-us">

                    <div className="contact-location">
                        <a target="_blank" href="https://www.google.ca/maps/@43.7570042,-79.5943787,12.54z">
                            <img src={map} alt="" />
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

                            <form method="POST" encType="multipart/form-data" className="contact-form">

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

            <Footer />

            <NavButton />
        </>
    )
}

export default Contact;
