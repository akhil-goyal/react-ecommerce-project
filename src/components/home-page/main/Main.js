import React from 'react';
import './main.css';

import Hero from '../hero/Hero';
import Filters from '../filters/Filters';
import Pagination from '../pagination/Pagination';
import ProductSearch from '../product-search/ProductSearch';
import ProductsList from '../products-list/ProductsList';

const Main = ({ trendingProducts, productsList }) => {

    return (
        <main className="products">

            <Hero />

            <section className="section-product-and-filters container">

                <Filters />

                <section className="results grid-span">

                    <ProductSearch />

                    <ProductsList productsList={productsList} />

                </section>

            </section>

            <Pagination />

        </main>
    )
}

export default Main;