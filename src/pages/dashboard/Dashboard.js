import React, { useContext, useState, useEffect } from 'react';
import './dashboard.css';

import Sidebar from 'components/common/sidebar/Sidebar';
import Header from 'components/common/header/Header';
import Footer from 'components/common/footer/Footer';
import NavButton from 'components/common/nav-button/NavButton';
import Main from 'components/home-page/main/Main';

import ProductsContext from '../../contexts/product-context';

const Dashboard = ({ trendingProducts }) => {

    const products = useContext(ProductsContext);
    const [productResult, setProductResult] = useState(products);

    useEffect(() => {
        setProductResult(products);
    }, []);

    return (
        <>
            <Sidebar />

            <Header />

            <Main trendingProducts={trendingProducts} productsList={productResult} />

            <Footer />

            <NavButton />
        </>
    )
}

export default Dashboard;