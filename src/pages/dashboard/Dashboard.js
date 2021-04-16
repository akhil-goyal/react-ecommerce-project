import React from 'react';
import { withRouter } from 'react-router-dom';
import './dashboard.css';

import Sidebar from 'components/common/sidebar/Sidebar';
import Header from 'components/common/header/Header';
import Footer from 'components/common/footer/Footer';
import NavButton from 'components/common/nav-button/NavButton';
import Main from 'components/home-page/main/Main';

const Dashboard = ({ trendingProducts }) => {

    return (
        <>
            <Sidebar />

            <Header />

            <Main trendingProducts={trendingProducts} />

            <Footer />

            <NavButton />
        </>
    )
}

export default withRouter(Dashboard);