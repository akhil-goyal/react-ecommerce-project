import React, { useState, useContext, useEffect } from 'react';
import './product-search.css';
import { allProducts } from '../../../contexts/product-context';

const ProductSearch = () => {

    // Importing filters state, method from products context.
    const { filters, setFilters } = useContext(allProducts);

    // Whenever there's a change in product search field.
    const onChangeHandler = (event) => {

        // Setting the products filters state
        // with product search query.
        setFilters({
            ...filters,
            query: event.target.value
        });

    }

    return (
        <article className="products-and-search">

            <h2 className="subheading">Here are the greenies -</h2>

            <section className="product-search">

                <article className="search-box">
                    <input onChange={onChangeHandler} value={filters.query} className="search-bar" type="text" placeholder="Search for exotic plants" name="search" />
                    <figure className="button-search">
                        <img alt="Search icon" src="https://img.icons8.com/cotton/24/000000/search--v2.png" />
                    </figure>

                </article>

            </section>

        </article>
    )
}

export default ProductSearch;