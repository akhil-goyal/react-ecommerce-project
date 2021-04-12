import React from 'react';
import { useParams } from 'react-router-dom';
import './product.css';

import Sidebar from '../../components/common/Sidebar';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import NavButton from '../../components/common/NavButton';

import plant1 from 'img/plant1.jpg';

const Product = ({ productsList }) => {

    const { slug } = useParams();

    const product = productsList.find((prod) => prod.slug() === slug) || productsList[0];

    const { img, name, description } = product.features;

    return (
        <>
            <Sidebar />

            <Header />

            <main className="container">

                <h1>Product Details</h1>

                <section className="section-product-details">

                    <div className="product-image">
                        <img src={plant1} alt="" />
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

            <Footer />

            <NavButton />
        </>
    )
}

export default Product;