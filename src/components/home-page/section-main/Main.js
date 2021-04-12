import React from 'react';

import Hero from '../section-hero/Hero';
import Trending from '../section-trending/Trending';
import Highlights from '../section-highlights/Highlights';
import Filters from '../section-filters/Filters';
import Newsletter from '../section-newsletter/Newsletter';
import Reviews from '../section-reviews/Reviews';
import Pagination from '../section-pagination/Pagination';
import ProductSearch from '../section-search/ProductSearch';
import ProductsList from '../section-products-list/ProductsList';

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