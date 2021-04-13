import React from 'react'
import './gallery.css';

import Sidebar from 'components/common/sidebar/Sidebar';
import Header from 'components/common/header/Header';
import Footer from 'components/common/footer/Footer';
import NavButton from 'components/common/nav-button/NavButton';

import plant1 from 'img/plant1.jpg';
import plant2 from 'img/plant2.jpg';
import plant3 from 'img/plant3.jpg';
import plant4 from 'img/plant4.jpg';
import plant5 from 'img/plant5.jpg';
import plant6 from 'img/plant6.jpg';

const Gallery = () => {
    return (
        <>
            <Sidebar />

            <Header />

            <main>

                <section className="gallery-hero">
                    <h1 className="container">Explore our variety of plants raised with utmost love.</h1>
                </section>

                <section className="plants-gallery container">

                    <h1 className="text-center">Our little groots</h1>

                    <div className="gallery container">

                        <div className="gallery-image-container">
                            <img className="gallery-image" src={plant1} alt="" />
                            <div className="gallery-image-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div className="gallery-image-container">
                            <img className="gallery-image" src={plant2} alt="" />
                            <div className="gallery-image-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div className="gallery-image-container">
                            <img className="gallery-image" src={plant3} alt="" />
                            <div className="gallery-image-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div className="gallery-image-container">
                            <img className="gallery-image" src={plant4} alt="" />
                            <div className="gallery-image-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div className="gallery-image-container">
                            <img className="gallery-image" src={plant5} alt="" />
                            <div className="gallery-image-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div className="gallery-image-container">
                            <img className="gallery-image" src={plant6} alt="" />
                            <div className="gallery-image-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div className="gallery-image-container">
                            <img className="gallery-image" src={plant1} alt="" />
                            <div className="gallery-image-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div className="gallery-image-container">
                            <img className="gallery-image" src={plant2} alt="" />
                            <div className="gallery-image-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div className="gallery-image-container">
                            <img className="gallery-image" src={plant3} alt="" />
                            <div className="gallery-image-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div className="gallery-image-container">
                            <img className="gallery-image" src={plant4} alt="" />
                            <div className="gallery-image-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div className="gallery-image-container">
                            <img className="gallery-image" src={plant5} alt="" />
                            <div className="gallery-image-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>

                        <div className="gallery-image-container">
                            <img className="gallery-image" src={plant6} alt="" />
                            <div className="gallery-image-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>

                    </div>

                    <div className="load-more-gallery text-center">
                        <a><u>Load more</u></a>
                    </div>

                </section>

            </main>

            <Footer />

            <NavButton />
        </>
    )
}

export default Gallery;
