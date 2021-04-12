import React from 'react';

import Hero from './Hero';
import Trending from './Trending';
import Highlights from './Highlights';
import Filters from './Filters';
import Newsletter from './Newsletter';
import Reviews from './Reviews';
import Pagination from './Pagination';
import ProductSearch from './ProductSearch';
import ProductsList from './ProductsList';

const Main = ({ trendingProducts, productsList }) => {

    return (
        <main className="products">

            <Hero />

            <Trending trendingProducts={trendingProducts} />

            <Highlights />

            <section className="section-product-and-filters container">

                <Filters />

                <section className="results grid-span">

                    <ProductSearch />

                    <ProductsList productsList={productsList} />

                </section>

            </section>

            <Pagination />

            <Reviews />

            <Newsletter />

        </main>
    )
}

export default Main;