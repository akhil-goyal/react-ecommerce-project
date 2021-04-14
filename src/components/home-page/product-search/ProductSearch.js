import React from 'react';
import './product-search.css';

const ProductSearch = () => {
    return (
        <article className="products-and-search">

            <h2 className="subheading">Here are the greenies -</h2>

            <section className="product-search">

                <article className="search-box">

                    <input className="search-bar" type="text" placeholder="Search for exotic plants" name="search" />
                    <figure className="button-search">
                        <img alt="Search icon" src="https://img.icons8.com/cotton/24/000000/search--v2.png" />
                    </figure>
                </article>
            </section>

        </article>
    )
}

export default ProductSearch;