import React from 'react';

import Sidebar from './section-sidebar/Sidebar';
import Header from './section-header/Header';
import Footer from './section-footer/Footer';
import NavButton from './utilities/NavButton';
import Main from './section-main/Main';

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