import React from 'react';
import './trending.css';

const Trending = ({ trendingProducts }) => {

    const products = trendingProducts.map((product) => ((
        <figure key={product.id} className="trending-product flex">
            <img src={product.img} alt={product.name} />
            <figcaption className="text-center"><em>{product.name}</em></figcaption>
        </figure>
    )))

    return (
        <section className="trending">

            <article>
                <h2 className="subheading text-center">What's blooming?</h2>
            </article>

            <article className="trending-products">

                {products}

            </article>

        </section>
    )
}

export default Trending;