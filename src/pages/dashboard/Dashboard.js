import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import './dashboard.css';

import Sidebar from 'components/common/sidebar/Sidebar';
import Header from 'components/common/header/Header';
import Footer from 'components/common/footer/Footer';
import NavButton from 'components/common/nav-button/NavButton';
import Main from 'components/home-page/main/Main';

import { allProducts } from '../../contexts/product-context';

const Dashboard = ({ trendingProducts }) => {

    const { products } = useContext(allProducts);

    return (
        <>
            <Sidebar />

            <Header />

            <Main trendingProducts={trendingProducts} productsList={products} />

            <Footer />

            <NavButton />
        </>
    )
}

export default withRouter(Dashboard);