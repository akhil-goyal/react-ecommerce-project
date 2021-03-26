import React from 'react';

import customerOne from 'img/customer1.jpg';
import customerTwo from 'img/customer2.jpg';
import customerThree from 'img/customer3.jpg';

const Reviews = () => {
    return (
        <section className="customer-reviews container">

            <h5 className="hidden">""</h5>

            <article>
                <h2 className="subheading text-center">Our happy anthophiles :)</h2>
            </article>

            <article className="reviews">

                <h5 className="hidden">""</h5>

                <article className="review-1">
                    <h5 className="hidden">""</h5>

                    <img src={customerOne} alt="User 1" />

                    <section className="customer-review-name">

                        <h5 className="hidden">""</h5>

                        <p>
                            Spruce has all the beautiful greens that enchance the beauty of my garden. Thank you to the team Spruce.
          </p>
                        <strong>- John Doe</strong>
                    </section>
                </article>

                <section className="separator-vertical">
                    <h5 className="hidden">""</h5>

                </section>

                <article className="review-2">
                    <h5 className="hidden">""</h5>

                    <img src={customerTwo} alt="User 2" />
                    <section className="customer-review-name">
                        <h5 className="hidden">""</h5>

                        <p>
                            Whenever I have to make a new addition to my home garden, I always look upto Spruce to get some stuff.
          </p>
                        <strong>- Sarah Williams</strong>
                    </section>
                </article>

                <section className="separator-vertical">
                    <h5 className="hidden">""</h5>
                </section>

                <article className="review-3">

                    <h5 className="hidden">""</h5>

                    <img src={customerThree} alt="User 3" />

                    <section className="customer-review-name">

                        <h5 className="hidden">""</h5>

                        <p>
                            Spruce is a great website for all my needs. I can find every beautiful plant/flowers over here for my home and office.
          </p>
                        <strong>- Ken Stark</strong>
                    </section>
                </article>

            </article>

        </section>
    )
}

export default Reviews;