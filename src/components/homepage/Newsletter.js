import React from 'react';

const Newsletter = () => {
    return (
        <section className="newsletter-subscription container">

            <article>
                <h2 className="subheading text-center">Subscribe to our newsletter</h2>
            </article>

            <article className="newsletter">

                <p>Subscribe to get latest information about the new coming plants in our nursery.
                Be the first one to bring them home.
                </p>
                <input className="newsletter-email" type="email" placeholder="Email Address" />
                <button className="newsletter-button">Subscribe</button>
                <small>Unsubscribe anytime. We won't spam you ever. Promise :)</small>
            </article>

        </section>
    )
}

export default Newsletter;