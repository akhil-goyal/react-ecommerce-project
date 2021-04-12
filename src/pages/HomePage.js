import React from 'react';

import Sidebar from '../components/common/Sidebar';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import NavButton from '../components/common/NavButton';
import Main from '../components/homepage/Main';

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