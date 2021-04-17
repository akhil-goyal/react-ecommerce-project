import React, {useContext} from 'react';
import './main.css';

import Hero from '../hero/Hero';
import Filters from '../filters/Filters';
import PaginationComponent from '../pagination/Pagination';
import ProductSearch from '../product-search/ProductSearch';
import ProductsList from '../products-list/ProductsList';

import { allProducts } from '../../../contexts/product-context';

const Main = () => {

    const { products } = useContext(allProducts);

    return (
        <main className="products">

            <Hero />

            <section className="section-product-and-filters container">

                <Filters />

                <section className="results grid-span">

                    <ProductSearch />

                    <ProductsList />

                </section>

            </section>

            <PaginationComponent productsList={products} />

        </main>
    )
}

export default Main;