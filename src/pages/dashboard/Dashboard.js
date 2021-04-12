import React, { useContext, useState, useEffect } from 'react';
import './dashboard.css';

import Sidebar from '../../components/common/Sidebar';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import NavButton from '../../components/common/NavButton';
import Main from '../../components/homepage/Main';

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