import React from 'react'
import './landing.css';

import Trending from '../../components/landing-page/trending/Trending';
import Highlights from '../../components/landing-page/highlights/Highlights';
import Reviews from '../../components/landing-page/reviews/Reviews';
import Newsletter from '../../components/landing-page/newsletter/Newsletter';
import Footer from '../../components/common/footer/Footer';
import Navbar from '../../components/landing-page/navbar/Navbar';

const LandingPage = ({trendingProducts}) => {
    return (
        <div>
            <main>

                <Navbar />

                <Trending trendingProducts={trendingProducts} />

                <Highlights />

                <Reviews />

                <Newsletter />

            </main>
            <Footer />
        </div>
    )
}

export default LandingPage;