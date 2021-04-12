import React from 'react';
import './about.css';

import Sidebar from '../../components/common/Sidebar';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import NavButton from '../../components/common/NavButton';

import logo from 'img/logo.png';

function About() {
    return (
        <>

            <Sidebar />

            <Header />

            <main>

                <section className="about-us-hero">
                    <h1 className="container">About Us</h1>
                </section>

                <section className="about-us">

                    <div className="about-us-logo">
                        <a href="/index.html">Spruce</a>
                        <img src={logo} alt="Site Logo" />
                    </div>

                    <div className="about-us-description">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam quaerat dignissimos autem quo eius
                        vitae alias, dolores nostrum assumenda velit eum aliquam quisquam asperiores optio eligendi,
                        molestiae impedit quae nobis nihil hic? Rerum id impedit magni sequi nemo, laboriosam ad iure
                        corporis sit quia, maxime facere illum suscipit repellat amet modi, ab cumque cupiditate nesciunt
                        distinctio vero voluptatem officia sapiente ex. Quae cupiditate voluptates autem ipsam
                        reprehenderit? Sunt cumque dignissimos provident aliquid id vel dolores ducimus, accusantium quos
                        quas exercitationem repudiandae iure! Rem autem, et excepturi quibusdam possimus sapiente, aliquam
                enim nostrum, harum quisquam impedit. Ab quis placeat at doloremque.</p>
                    </div>
                </section>

            </main>

            <Footer />

            <NavButton />

        </>
    )
}

export default About;
