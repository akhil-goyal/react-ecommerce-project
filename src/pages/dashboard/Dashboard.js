import React, { useContext, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './dashboard.css';

import Sidebar from 'components/common/sidebar/Sidebar';
import Header from 'components/common/header/Header';
import Footer from 'components/common/footer/Footer';
import NavButton from 'components/common/nav-button/NavButton';
import Main from 'components/home-page/main/Main';

import ProductsContext from '../../contexts/product-context';
import { firebaseAuth } from '../../contexts/auth-context';

const Dashboard = ({ history, trendingProducts }) => {

    const { handleSignOut } = useContext(firebaseAuth);

    const signOutHandler = async () => {
        await handleSignOut();
        history.push('/signin');
    }

    const products = useContext(ProductsContext);
    const [productResult, setProductResult] = useState(products);

    useEffect(() => {
        setProductResult(products);
    }, []);

    return (
        <>
            <Sidebar />

            <Header />

            <h1>Login Successful...</h1>

            <button onClick={signOutHandler}>Sign Out</button>

            <Main trendingProducts={trendingProducts} productsList={productResult} />

            <Footer />

            <NavButton />
        </>
    )
}

export default withRouter(Dashboard);