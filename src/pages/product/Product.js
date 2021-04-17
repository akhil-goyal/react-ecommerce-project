import React from 'react';
import { useParams } from 'react-router-dom';
import './product.css';

import Sidebar from 'components/common/sidebar/Sidebar';
import Header from 'components/common/header/Header';
import Footer from 'components/common/footer/Footer';
import NavButton from 'components/common/nav-button/NavButton';

import plant1 from 'img/plant1.jpg';

const Product = ({ productsList }) => {

    const { slug } = useParams();

    const buildSlug = name => {

        return name.toString().toLowerCase()
            .replace(/\s+/g, '-') // Replacing spaces with hyphen (-)
            .replace(/&/g, '-and-') // Replacing '&' with 'and'
            .replace(/[^\w\-]+/g, '') // Removing all special characters
            .replace(/\-\-+/g, '-') // Replacing multiple hyphens with single hyphen
            .replace(/^-+/, '') // Trimming hyphen from start of the slug
            .replace(/-+$/, '') // Trimming hyphen from end of the sloug
    }

    const product = productsList.find((prod) => buildSlug(prod.features.name) === slug);

    const { name, description, img, rating, category, initialPrice, discount } = product.features;

    const applyDiscount = (initialPrice, discount) => {
        let finalPrice = initialPrice - discount / 100 * initialPrice;
        return finalPrice
    }

    return (
        <>
            <Sidebar />

            <Header />

            <main className="container">

                <h1>Product Details</h1>

                <section className="section-product-details">

                    <div className="product-image">
                        <img src={img} alt="" />
                    </div>

                    <div className="product-info">

                        <div className="product-title-ratings">

                            <h1 className="text-lg">{name}</h1>

                            <div className="product-ratings flex">
                                <p>{rating}</p>
                                <div>
                                    {
                                        <>
                                            <i className={(rating == 0) ? 'far fa-star' : (rating > 0 && rating < 1) ? 'fas fa-star-half-alt' : 'fas fa-star'}></i>
                                            <i className={(rating > 1 && rating < 2) ? 'fas fa-star-half-alt' : (rating >= 2) ? 'fas fa-star' : 'far fa-star'}></i>
                                            <i className={(rating > 2 && rating < 3) ? 'fas fa-star-half-alt' : (rating >= 3) ? 'fas fa-star' : 'far fa-star'}></i>
                                            <i className={(rating > 3 && rating < 4) ? 'fas fa-star-half-alt' : (rating >= 4) ? 'fas fa-star' : 'far fa-star'}></i>
                                            <i className={(rating > 4 && rating < 5) ? 'fas fa-star-half-alt' : (rating >= 5) ? 'fas fa-star' : 'far fa-star'}></i>
                                        </>
                                    }
                                </div>
                            </div>

                        </div>

                        <div>
                            <h3>Product Description</h3>
                            <p>{description}</p>
                        </div>

                        <div>
                            <p>Category : <em>{category}</em></p>
                        </div>

                        <div>
                            <p>Price : <del>${initialPrice}</del> <span className="price">${applyDiscount(initialPrice, discount)}</span> only.</p>
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