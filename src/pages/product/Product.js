import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './product.css';

import Sidebar from 'components/common/sidebar/Sidebar';
import Header from 'components/common/header/Header';
import Footer from 'components/common/footer/Footer';
import NavButton from 'components/common/nav-button/NavButton';

import plant1 from 'img/plant1.jpg';

import { allProducts } from '../../contexts/product-context';

const Product = () => {

    const { slug } = useParams();

    const { products } = useContext(allProducts);
    const [data, setData] = useState(products);
    const [currentProduct, setCurrentProduct] = useState({});

    useEffect(() => {
        if (products.length > 0) {
            setData(products);
            setCurrentProduct('Akhil');
        }
    }, [products]);

    const buildSlug = name => {

        return name.toString().toLowerCase()
            .replace(/\s+/g, '-') // Replacing spaces with hyphen (-)
            .replace(/&/g, '-and-') // Replacing '&' with 'and'
            .replace(/[^\w\-]+/g, '') // Removing all special characters
            .replace(/\-\-+/g, '-') // Replacing multiple hyphens with single hyphen
            .replace(/^-+/, '') // Trimming hyphen from start of the slug
            .replace(/-+$/, '') // Trimming hyphen from end of the sloug
    }

    console.log(currentProduct)

    const product = data.find((prod) => buildSlug(prod.features.name) === slug);

    // console.log(product.features);

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