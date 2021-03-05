import React from 'react';

import plantOne from 'img/plant1.jpg';
import plantTwo from 'img/plant2.jpg';
import plantThree from 'img/plant3.jpg';
import plantFour from 'img/plant4.jpg';
import plantFive from 'img/plant5.jpg';
import plantSix from 'img/plant6.jpg';

const Trending = () => {
    return (
        <section className="trending">

            <h5 className="hidden">""</h5>

            <article>
                <h2 className="subheading text-center">What's blooming?</h2>
            </article>

            <article className="trending-products">

                <h5 className="hidden">""</h5>

                <figure className="trending-product flex">
                    <img src={plantOne} alt="Plant" />
                    <figcaption className="text-center"><em>Silver Dollar Plant</em></figcaption>
                </figure>
                <figure className="trending-product flex">
                    <img src={plantTwo} alt="Plant" />
                    <figcaption className="text-center"><em>String Of Pearls</em></figcaption>
                </figure>
                <figure className="trending-product flex">
                    <img src={plantThree} alt="Plant" />
                    <figcaption className="text-center"><em>Peace Lily</em></figcaption>
                </figure>
                <figure className="trending-product flex">
                    <img src={plantFour} alt="Plant" />
                    <figcaption className="text-center"><em>Areca Palm</em></figcaption>
                </figure>
                <figure className="trending-product flex">
                    <img src={plantFive} alt="Plant" />
                    <figcaption className="text-center"><em>Grafted Ficus Bonsai</em></figcaption>
                </figure>
                <figure className="trending-product flex">
                    <img src={plantSix} alt="Plant" />
                    <figcaption className="text-center"><em>Calathea Orbifolia</em></figcaption>
                </figure>
                <figure className="trending-product flex">
                    <img src={plantOne} alt="Plant" />
                    <figcaption className="text-center"><em>Silver Dollar Plant</em></figcaption>
                </figure>
                <figure className="trending-product flex">
                    <img src={plantTwo} alt="Plant" />
                    <figcaption className="text-center"><em>String Of Pearls</em></figcaption>
                </figure>
                <figure className="trending-product flex">
                    <img src={plantThree} alt="Plant" />
                    <figcaption className="text-center"><em>Peace Lily</em></figcaption>
                </figure>
                <figure className="trending-product flex">
                    <img src={plantFour} alt="Plant" />
                    <figcaption className="text-center"><em>Areca Palm</em></figcaption>
                </figure>
            </article>

        </section>
    )
}

export default Trending;