import React from 'react'
import './landing.css';

import logo from 'img/logo.png';
import plant1 from 'img/plant1.jpg';
import plant2 from 'img/plant2.jpg';
import plant3 from 'img/plant3.jpg';
import plant4 from 'img/plant4.jpg';
import plant5 from 'img/plant5.jpg';
import plant6 from 'img/plant6.jpg';
import highlight1 from 'img/highlight-1.jpg';
import highlight2 from 'img/highlight-2.jpg';
import highlight3 from 'img/highlight-3.jpg';
import customer1 from 'img/customer1.jpg';
import customer2 from 'img/customer2.jpg';
import customer3 from 'img/customer3.jpg';


const LandingPage = () => {
    return (
        <div>
            <main>

                <section className="landing-nav-hero ">

                    <div className="landing-navbar container">
                        <div className="container flex">

                            <div className="landing-logo">
                                <p>Spruce</p>
                                <img src={logo} style={{height: '2rem', width: '1.5rem'}} alt="" />
                            </div>

                            <nav>
                                <ul>
                                    <li><a href="pages/sign-up.html">Register</a></li>
                                    <li><a href="pages/sign-in.html">Login In</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className="landing-hero container">
                        <h1>Spruce</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas eum molestiae, delectus eligendi
            optio recusandae animi iusto facilis dolorem sint.</p>
                        <a className="btn-join-us" href="pages/sign-up.html">Join Us</a>
                    </div>

                </section>

                <section className="trending">

                    <h5 className="hidden">""</h5>

                    <article>
                        <h2 className="subheading text-center">What's blooming?</h2>
                    </article>

                    <article className="trending-products">

                        <h5 className="hidden">""</h5>

                        <figure className="trending-product flex">
                            <img src={plant1} alt="Plant" />
                            <figcaption className="text-center"><em>Silver Dollar Plant</em></figcaption>
                        </figure>
                        <figure className="trending-product flex">
                            <img src={plant2} alt="Plant" />
                            <figcaption className="text-center"><em>String Of Pearls</em></figcaption>
                        </figure>
                        <figure className="trending-product flex">
                            <img src={plant3} alt="Plant" />
                            <figcaption className="text-center"><em>Peace Lily</em></figcaption>
                        </figure>
                        <figure className="trending-product flex">
                            <img src={plant4} alt="Plant" />
                            <figcaption className="text-center"><em>Areca Palm</em></figcaption>
                        </figure>
                        <figure className="trending-product flex">
                            <img src={plant5} alt="Plant" />
                            <figcaption className="text-center"><em>Grafted Ficus Bonsai</em></figcaption>
                        </figure>
                        <figure className="trending-product flex">
                            <img src={plant6} alt="Plant" />
                            <figcaption className="text-center"><em>Calathea Orbifolia</em></figcaption>
                        </figure>
                        <figure className="trending-product flex">
                            <img src={plant1} alt="Plant" />
                            <figcaption className="text-center"><em>Silver Dollar Plant</em></figcaption>
                        </figure>
                        <figure className="trending-product flex">
                            <img src={plant2} alt="Plant" />
                            <figcaption className="text-center"><em>String Of Pearls</em></figcaption>
                        </figure>
                        <figure className="trending-product flex">
                            <img src={plant3} alt="Plant" />
                            <figcaption className="text-center"><em>Peace Lily</em></figcaption>
                        </figure>
                        <figure className="trending-product flex">
                            <img src={plant4} alt="Plant" />
                            <figcaption className="text-center"><em>Areca Palm</em></figcaption>
                        </figure>
                    </article>

                </section>

                <section className="highlights container">

                    <article>
                        <h2 className="subheading text-center">Why Spruce?</h2>
                    </article>

                    <div className="highlights-grid">
                        <div className="highlight">
                            <div className="highlights-image">
                                <img src={highlight1} alt="" />
                            </div>

                            <div className="highlight-description">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aliquid, placeat a ipsa dicta
                                vero eligendi corporis, quam consequatur minima dolore natus quo odit quas reiciendis saepe?
                                Cupiditate mollitia repellat dicta pariatur nobis, quae ducimus aspernatur odio totam, quos
                                reprehenderit, officiis nemo. Beatae facilis sequi at possimus debitis magni nam doloremque
                                quibusdam recusandae rem assumenda, odit aspernatur accusamus id a atque aut quo quae
                                consequatur odio illum eligendi eum et. Possimus iusto atque praesentium at voluptatum ullam
                                qui cumque, vitae soluta voluptate, illum vel! Corporis ad qui dolore omnis quae sapiente
                                quasi debitis dolores vitae voluptatem consectetur velit expedita facilis nam culpa quod,
                                neque maxime dignissimos excepturi? Quaerat rem esse officia necessitatibus veritatis
                                nesciunt? Minima repellendus voluptates nobis sequi impedit minus corporis a at nesciunt
                                asperiores deleniti non, nisi, commodi consequuntur vel temporibus excepturi! Sapiente
                                nostrum enim ipsam similique ab, nam nemo, quo inventore tempore amet obcaecati, in aliquam
                                eligendi quae at mollitia molestiae suscipit itaque placeat? Accusantium corrupti error ea
                                aspernatur iste inventore illum fugiat debitis iusto velit nam labore officia numquam earum
                                temporibus, culpa mollitia optio! Sequi asperiores laborum temporibus earum! Dignissimos,
                                molestiae quae laborum et voluptates tempora delectus facilis eligendi unde cum saepe illo
                    asperiores officiis laudantium.</p>
                            </div>
                        </div>

                        <div className="highlight">
                            <div className="highlight-description">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eius expedita esse, provident
                                officia voluptates voluptatum vitae minima maiores illo? Earum officia aspernatur cum harum
                                assumenda ullam provident corporis totam obcaecati quia laborum, labore fuga iusto
                                voluptatibus, magni molestiae. Ducimus vitae inventore debitis ipsum vel quasi vero.
                                Aliquid, voluptate. Veniam rerum excepturi illo deserunt laboriosam distinctio cumque hic
                                commodi necessitatibus culpa labore odio laborum perferendis odit velit beatae praesentium
                                molestiae magni recusandae inventore, maiores, unde repudiandae fugit facere? Perferendis
                                eligendi possimus, error labore distinctio dolores tempore sapiente ducimus expedita maxime
                                consequatur modi sed commodi ad, nam molestiae dignissimos ea esse fugiat saepe eum optio
                                nesciunt nemo tenetur. Debitis omnis natus tempora ipsam minus optio possimus officiis
                                delectus ad? Autem eius ratione adipisci eveniet in quae quidem quaerat error
                                necessitatibus. Inventore, aliquid, earum, aut veniam voluptates magni laborum placeat
                                debitis pariatur illum odio totam optio sequi cum id atque facilis ducimus. Nulla nam sint
                                quia illum eum suscipit deserunt, corporis neque facere, vero odio repellendus eius
                                asperiores sed, omnis atque excepturi nostrum. Commodi, tempora, temporibus necessitatibus
                                distinctio voluptate doloribus culpa asperiores ad voluptatibus saepe mollitia dicta
                                laborum, sint deleniti maiores aut odit odio assumenda. Id maxime fugiat aliquid quidem
                    voluptas accusantium!</p>
                            </div>

                            <div className="highlights-image">
                                <img src={highlight2} alt="" />
                            </div>
                        </div>

                        <div className="highlight">
                            <div className="highlights-image">
                                <img src={highlight3} alt="" />
                            </div>

                            <div className="highlight-description">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium nulla officia dolores
                                provident totam consequatur, expedita recusandae voluptate facere sit vitae obcaecati optio
                                mollitia assumenda alias nobis perferendis minima ullam cumque, quidem impedit blanditiis
                                accusantium! Autem at ipsa deserunt, doloribus rerum blanditiis cupiditate possimus dolores
                                laboriosam dolorem mollitia inventore, quae, omnis a quod nobis commodi corporis ipsum dicta
                                illum corrupti? Facere quasi est at nobis ratione ex id, consequatur obcaecati, mollitia
                                nesciunt blanditiis dolorum, aut ipsum pariatur culpa quo hic fugit tempora incidunt.
                                Corporis quia facilis, alias inventore fuga est dolor atque. Cupiditate, deserunt? Tempora
                                iusto libero numquam odio ab. Blanditiis temporibus et saepe explicabo facilis maiores
                                culpa. Repellendus blanditiis, obcaecati dicta tempore, culpa repellat doloribus quasi saepe
                                in, ipsa labore at odio sed error veniam corrupti debitis quam architecto odit atque
                                reiciendis! Repudiandae aliquid reiciendis quis adipisci id! Iste aliquid suscipit maxime
                                consequuntur ipsa? Molestias voluptates blanditiis cumque repellat nisi perferendis neque
                                rerum ratione totam dignissimos, architecto modi doloremque, maiores quam ut amet, labore
                                corporis doloribus explicabo? Adipisci beatae ipsum ratione labore accusantium molestias
                                alias minima laudantium. Omnis illo amet praesentium, eligendi facere sit voluptatem fugiat,
                                eius laboriosam iure repudiandae debitis error. Error optio at repudiandae reprehenderit
                    recusandae vel.</p>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="customer-reviews container">

                    <h5 className="hidden">""</h5>

                    <article>
                        <h2 className="subheading text-center">Our happy anthophiles :)</h2>
                    </article>

                    <article className="reviews">

                        <h5 className="hidden">""</h5>

                        <article className="review-1">
                            <h5 className="hidden">""</h5>

                            <img src={customer1} alt="User 1" />

                            <section className="customer-review-name">

                                <h5 className="hidden">""</h5>

                                <p>
                                    Spruce has all the beautiful greens that enchance the beauty of my garden. Thank you to the
                                    team Spruce.
                </p>
                                <strong>- John Doe</strong>
                            </section>
                        </article>

                        <section className="separator-vertical">
                            <h5 className="hidden">""</h5>

                        </section>

                        <article className="review-2">
                            <h5 className="hidden">""</h5>

                            <img src={customer2} alt="User 2" />
                            <section className="customer-review-name">
                                <h5 className="hidden">""</h5>

                                <p>
                                    Whenever I have to make a new addition to my home garden, I always look upto Spruce to get
                                    some stuff.
                </p>
                                <strong>- Sarah Williams</strong>
                            </section>
                        </article>

                        <section className="separator-vertical">
                            <h5 className="hidden">""</h5>
                        </section>

                        <article className="review-3">

                            <h5 className="hidden">""</h5>

                            <img src={customer3} alt="User 3" />

                            <section className="customer-review-name">

                                <h5 className="hidden">""</h5>

                                <p>
                                    Spruce is a great website for all my needs. I can find every beautiful plant/flowers over
                                    here for my home
                                    and office.
                </p>
                                <strong>- Ken Stark</strong>
                            </section>
                        </article>

                    </article>

                </section>

                <section className="newsletter-subscription container">
                    <h5 className="hidden">""</h5>

                    <article>
                        <h2 className="subheading text-center">Subscribe to our newsletter</h2>
                    </article>

                    <article className="newsletter">
                        <h5 className="hidden">""</h5>

                        <p>Subscribe to get latest information about the new coming plants in our nursery.
                        Be the first one to bring them home.
        </p>
                        <input className="newsletter-email" type="email" placeholder="Email Address" />
                        <button className="newsletter-button">Subscribe</button>
                        <small>Unsubscribe anytime. We won't spam you ever. Promise :)</small>
                    </article>

                </section>

            </main>

            <footer className="page-footer">

                <nav>
                    <ul className="social">
                        <li><a target="_blank" href="https://www.facebook.com"><i className="fab fa-facebook"></i></a></li>
                        <li><a target="_blank" href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
                        <li><a target="_blank" href="https://www.twitter.com"><i className="fab fa-twitter-square"></i></a></li>
                    </ul>
                </nav>

                <nav aria-label="Legal">
                    <ul className="legal">
                        <li><a href="#">Terms of Use</a></li>
                        <li>|</li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li>|</li>
                        <li><a href="#">Accessibility Policy</a></li>
                    </ul>
                </nav>

                <p className="text-center"><small className="copyright">Copyright &copy; 2021 | Spruce</small></p>

            </footer>
        </div>
    )
}

export default LandingPage;