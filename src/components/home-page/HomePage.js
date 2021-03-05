import React from 'react';
import 'css/App.css';
import 'css/style.css';
import 'css/media-queries.css';

import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './section-footer/Footer';
import NavButton from './utilities/NavButton';
import Main from './Main';

const HomePage = ({ trendingProducts, productsList }) => {

    return (
        <>
            <Sidebar />

            <Header />

            <Main trendingProducts={trendingProducts} productsList={productsList} />

            <Footer />

            <NavButton />
        </>
    )
}

export default HomePage;