import React from 'react';

import Hero from '../hero/Hero';
import Trending from '../trending/Trending';
import Highlights from '../highlights/Highlights';
import Filters from '../filters/Filters';
import Newsletter from '../newsletter/Newsletter';
import Reviews from '../reviews/Reviews';
import Pagination from '../pagination/Pagination';
import ProductSearch from '../product-search/ProductSearch';
import ProductsList from '../products-list/ProductsList';

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