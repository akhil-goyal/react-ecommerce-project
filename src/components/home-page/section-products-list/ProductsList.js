import React from 'react';

import newLabel from 'img/new.png';
import plantOne from 'img/plant1.jpg';
import plantTwo from 'img/plant2.jpg';
import plantThree from 'img/plant3.jpg';
import plantFour from 'img/plant4.jpg';
import plantFive from 'img/plant5.jpg';
import plantSix from 'img/plant6.jpg';

const ProductsList = () => {
    return (
        <section className="grid products-list">

            <h5 className="hidden">""</h5>

            <article className="product container my-1">

                <h5 className="hidden">""</h5>

                <section>

                    <h5 className="hidden">""</h5>

                    <figure>
                        <img className="product-picture" src={plantOne} alt="Silver Dollar Plant" />
                    </figure>

                    <article className="product-title-icons flex">

                        <h5 className="hidden">""</h5>

                        <figure className="product-title-newflash flex">

                            <h3>Silver Dollar Plant</h3>
                            <img className="new-product-icon" src={newLabel} alt="" />

                        </figure>

                        <article className="flex">

                            <h5 className="hidden">""</h5>

                            <figure><i className="fas fa-shopping-cart"></i></figure>
                            <figure><i className="fas fa-heart"></i></figure>
                        </article>

                    </article>

                    <article className="product-price-ratings flex">

                        <h5 className="hidden">""</h5>

                        <data value="40"><del>$50.00</del> <ins>$40.00</ins></data>

                        <article className="product-ratings flex">

                            <h5 className="hidden">""</h5>

                            <p>4.5</p>
                            <figure>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </figure>
                        </article>

                    </article>

                    <article className="product-discount-category">

                        <h5 className="hidden">""</h5>

                        <span><strong>Discount : </strong> <em>20% off</em></span>

                        <span><strong>Category : </strong> <em>Indoor</em></span>
                    </article>

                    <br />

                    <article>

                        <h5 className="hidden">""</h5>

                        <p>
                            If you’re looking for drought-tolerant plants, succulents like the Xerosicyos da...
              </p>
                    </article>

                    <article>

                        <h5 className="hidden">""</h5>

                        <a href="#" className="button-product-details"><u>View details</u></a>

                    </article>

                </section>

                <section>

                    <h5 className="hidden">""</h5>

                    <form>

                        <fieldset>

                            <legend>Pot requirement :</legend>

                            <nav>
                                <ul className="pot-fields">

                                    <li>
                                        <input id="pot1-req" type="radio" name="pot-requirement" value="req" />
                                        <label htmlFor="pot1-req">Required</label>
                                    </li>

                                    <li>
                                        <input id="pot1-not-req" type="radio" name="pot-requirement" value="not-req" />
                                        <label htmlFor="pot1-not-req">Not required</label>
                                    </li>

                                </ul>
                            </nav>

                        </fieldset>

                        <fieldset className="my-1">

                            <legend>Plant Size :</legend>

                            <nav>
                                <ol className="size-fields">

                                    <li>
                                        <input id="pot1-size-1" type="radio" name="plant-size" value="seed" />
                                        <label htmlFor="pot1-size-1">Seedlings</label>
                                    </li>

                                    <li>
                                        <input id="pot1-size-2" type="radio" name="plant-size" value="sapling" />
                                        <label htmlFor="pot1-size-2">Sapling</label>
                                    </li>

                                    <li>
                                        <input id="pot1-size-3" type="radio" name="plant-size" value="peak" />
                                        <label htmlFor="pot1-size-3">Peak</label>
                                    </li>

                                </ol>
                            </nav>

                        </fieldset>

                        <fieldset>
                            <button className="button-buy my-1">Buy Now</button>
                        </fieldset>

                    </form>
                </section>

            </article>

            <article className="product container my-1">

                <h5 className="hidden">""</h5>

                <section>

                    <h5 className="hidden">""</h5>

                    <figure>
                        <img className="product-picture" src={plantTwo} alt="String of pearls" />
                    </figure>

                    <article className="product-title-icons flex">

                        <h5 className="hidden">""</h5>

                        <figure className="product-title-newflash flex">

                            <h3>String of pearls</h3>

                        </figure>

                        <article className="flex">

                            <h5 className="hidden">""</h5>

                            <figure><i className="fas fa-shopping-cart"></i></figure>
                            <figure><i className="fas fa-heart"></i></figure>
                        </article>

                    </article>

                    <article className="product-price-ratings flex">

                        <h5 className="hidden">""</h5>

                        <data value="72.25"><del>$85.00</del> <ins>$72.25</ins></data>

                        <article className="product-ratings flex">

                            <h5 className="hidden">""</h5>

                            <p>5.0</p>
                            <figure>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </figure>
                        </article>

                    </article>

                    <article className="product-discount-category">

                        <h5 className="hidden">""</h5>

                        <span><strong>Discount : </strong> <em>15% off</em></span>

                        <span><strong>Category : </strong> <em>Aerial</em></span>

                    </article>

                    <br />

                    <article>

                        <h5 className="hidden">""</h5>

                        <p>
                            What a unique houseplant! Guests are sure to comment on the grace of your beauti...
              </p>

                    </article>

                    <article>

                        <h5 className="hidden">""</h5>

                        <a href="#" className="button-product-details"><u>View details</u></a>

                    </article>

                </section>

                <section>

                    <h5 className="hidden">""</h5>

                    <form>

                        <fieldset>

                            <legend>Pot requirement :</legend>

                            <nav>
                                <ul className="pot-fields">

                                    <li>
                                        <input id="pot2-req" type="radio" name="pot-requirement" value="req" />
                                        <label htmlFor="pot2-req">Required</label>
                                    </li>

                                    <li>
                                        <input id="pot2-not-req" type="radio" name="pot-requirement" value="not-req" />
                                        <label htmlFor="pot2-not-req">Not required</label>
                                    </li>

                                </ul>
                            </nav>

                        </fieldset>

                        <fieldset className="my-1">

                            <legend>Plant Size :</legend>

                            <nav>
                                <ol className="size-fields">

                                    <li>
                                        <input id="pot2-size-1" type="radio" name="plant-size" value="seed" />
                                        <label htmlFor="pot2-size-1">Seedlings</label>
                                    </li>

                                    <li>
                                        <input id="pot2-size-2" type="radio" name="plant-size" value="sapling" />
                                        <label htmlFor="pot2-size-2">Sapling</label>
                                    </li>

                                    <li>
                                        <input id="pot2-size-3" type="radio" name="plant-size" value="peak" />
                                        <label htmlFor="pot2-size-3">Peak</label>
                                    </li>

                                </ol>
                            </nav>

                        </fieldset>

                        <fieldset>
                            <button className="button-buy my-1">Buy Now</button>
                        </fieldset>

                    </form>
                </section>

            </article>

            <article className="product container my-1">

                <h5 className="hidden">""</h5>

                <section>

                    <h5 className="hidden">""</h5>

                    <figure>
                        <img className="product-picture" src={plantThree} alt="Peace Lilly" />
                    </figure>

                    <article className="product-title-icons flex">

                        <h5 className="hidden">""</h5>

                        <figure className="product-title-newflash flex">

                            <h3>Peace Lilly</h3>
                            <img className="new-product-icon" src={newLabel} alt="" />

                        </figure>

                        <article className="flex">

                            <h5 className="hidden">""</h5>

                            <figure><i className="fas fa-shopping-cart"></i></figure>
                            <figure><i className="fas fa-heart"></i></figure>
                        </article>

                    </article>

                    <article className="product-price-ratings flex">

                        <h5 className="hidden">""</h5>

                        <data value="30.36"><del>$33.00</del> <ins>$30.36</ins></data>

                        <article className="product-ratings flex">

                            <h5 className="hidden">""</h5>

                            <p>4.0</p>
                            <figure>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </figure>
                        </article>

                    </article>

                    <article className="product-discount-category">

                        <h5 className="hidden">""</h5>

                        <span><strong>Discount : </strong> <em>8% off</em></span>

                        <span><strong>Category : </strong> <em>Indoor</em></span>

                    </article>

                    <br />

                    <article>

                        <h5 className="hidden">""</h5>

                        <p>
                            Sometimes flowering plants prove the most challenging to keep healthy, but certa...
              </p>
                    </article>

                    <article>

                        <h5 className="hidden">""</h5>

                        <a href="#" className="button-product-details"><u>View details</u></a>

                    </article>

                </section>

                <section>

                    <h5 className="hidden">""</h5>

                    <form>

                        <fieldset>

                            <legend>Pot requirement :</legend>

                            <nav>
                                <ul className="pot-fields">

                                    <li>
                                        <input id="pot3-req" type="radio" name="pot-requirement" value="req" />
                                        <label htmlFor="pot3-req">Required</label>
                                    </li>

                                    <li>
                                        <input id="pot3-not-req" type="radio" name="pot-requirement" value="not-req" />
                                        <label htmlFor="pot3-not-req">Not required</label>
                                    </li>

                                </ul>
                            </nav>

                        </fieldset>

                        <fieldset className="my-1">

                            <legend>Plant Size :</legend>

                            <nav>
                                <ol className="size-fields">

                                    <li>
                                        <input id="pot3-size-1" type="radio" name="plant-size" value="seed" />
                                        <label htmlFor="pot3-size-1">Seedlings</label>
                                    </li>

                                    <li>
                                        <input id="pot3-size-2" type="radio" name="plant-size" value="sapling" />
                                        <label htmlFor="pot3-size-2">Sapling</label>
                                    </li>

                                    <li>
                                        <input id="pot3-size-3" type="radio" name="plant-size" value="peak" />
                                        <label htmlFor="pot3-size-3">Peak</label>
                                    </li>

                                </ol>
                            </nav>

                        </fieldset>

                        <fieldset>
                            <button className="button-buy my-1">Buy Now</button>
                        </fieldset>

                    </form>
                </section>

            </article>

            <article className="product container my-1">

                <h5 className="hidden">""</h5>

                <section>

                    <h5 className="hidden">""</h5>

                    <figure>
                        <img className="product-picture" src={plantFour} alt="Areca Palm" />
                    </figure>

                    <article className="product-title-icons flex">

                        <h5 className="hidden">""</h5>

                        <figure className="product-title-newflash flex">

                            <h3>Areca Palm</h3>

                        </figure>

                        <article className="flex">

                            <h5 className="hidden">""</h5>

                            <figure><i className="fas fa-shopping-cart"></i></figure>
                            <figure><i className="fas fa-heart"></i></figure>
                        </article>

                    </article>

                    <article className="product-price-ratings flex">

                        <h5 className="hidden">""</h5>

                        <data value="66.88"><del>$76.00</del> <ins>$66.88</ins></data>

                        <article className="product-ratings flex">

                            <h5 className="hidden">""</h5>

                            <p>3.5</p>
                            <figure>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <i className="far fa-star"></i>
                            </figure>
                        </article>

                    </article>

                    <article className="product-discount-category">

                        <h5 className="hidden">""</h5>

                        <span><strong>Discount : </strong> <em>12% off</em></span>

                        <span><strong>Category : </strong> <em>Outdoor</em></span>
                    </article>

                    <br />

                    <article>

                        <h5 className="hidden">""</h5>

                        <p>
                            Dypsis lutescens, commonly known as golden cane palm or areca palm, makes a love...
              </p>
                    </article>

                    <article>

                        <h5 className="hidden">""</h5>

                        <a href="#" className="button-product-details"><u>View details</u></a>

                    </article>

                </section>

                <section>

                    <h5 className="hidden">""</h5>

                    <form>

                        <fieldset>

                            <legend>Pot requirement :</legend>

                            <nav>
                                <ul className="pot-fields">

                                    <li>
                                        <input id="pot4-req" type="radio" name="pot-requirement" value="req" />
                                        <label htmlFor="pot4-req">Required</label>
                                    </li>

                                    <li>
                                        <input id="pot4-not-req" type="radio" name="pot-requirement" value="not-req" />
                                        <label htmlFor="pot4-not-req">Not required</label>
                                    </li>

                                </ul>
                            </nav>

                        </fieldset>

                        <fieldset className="my-1">

                            <legend>Plant Size :</legend>

                            <nav>
                                <ol className="size-fields">

                                    <li>
                                        <input id="pot4-size-1" type="radio" name="plant-size" value="seed" />
                                        <label htmlFor="pot4-size-1">Seedlings</label>
                                    </li>

                                    <li>
                                        <input id="pot4-size-2" type="radio" name="plant-size" value="sapling" />
                                        <label htmlFor="pot4-size-2">Sapling</label>
                                    </li>

                                    <li>
                                        <input id="pot4-size-3" type="radio" name="plant-size" value="peak" />
                                        <label htmlFor="pot4-size-3">Peak</label>
                                    </li>

                                </ol>
                            </nav>

                        </fieldset>

                        <fieldset>
                            <button className="button-buy my-1">Buy Now</button>
                        </fieldset>

                    </form>
                </section>

            </article>

            <article className="product container my-1">

                <h5 className="hidden">""</h5>

                <section>

                    <h5 className="hidden">""</h5>

                    <figure>
                        <img className="product-picture" src={plantFive} alt="Grafted Ficus Bonsai" />
                    </figure>

                    <article className="product-title-icons flex">

                        <h5 className="hidden">""</h5>

                        <figure className="product-title-newflash flex">

                            <h3>Grafted Ficus Bonsai</h3>
                            <img className="new-product-icon" src={newLabel} alt="" />

                        </figure>

                        <article className="flex">

                            <h5 className="hidden">""</h5>

                            <figure><i className="fas fa-shopping-cart"></i></figure>
                            <figure><i className="fas fa-heart"></i></figure>
                        </article>

                    </article>

                    <article className="product-price-ratings flex">

                        <h5 className="hidden">""</h5>

                        <data value="22.80"><del>$24.00</del> <ins>$22.80</ins></data>

                        <article className="product-ratings flex">

                            <h5 className="hidden">""</h5>

                            <p>4.0</p>
                            <figure>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </figure>
                        </article>

                    </article>

                    <article className="product-discount-category">

                        <h5 className="hidden">""</h5>

                        <span><strong>Discount : </strong> <em>5% off</em></span>

                        <span><strong>Category : </strong> <em>Indoor</em></span>
                    </article>

                    <br />

                    <article>

                        <h5 className="hidden">""</h5>

                        <p>
                            Are you looking for a small desk plant sure to spark conversation? Ficus microca...
              </p>
                    </article>

                    <article>

                        <h5 className="hidden">""</h5>

                        <a href="#" className="button-product-details"><u>View details</u></a>

                    </article>

                </section>

                <section>

                    <h5 className="hidden">""</h5>

                    <form>

                        <fieldset>

                            <legend>Pot requirement :</legend>

                            <nav>
                                <ul className="pot-fields">

                                    <li>
                                        <input id="pot5-req" type="radio" name="pot-requirement" value="req" />
                                        <label htmlFor="pot5-req">Required</label>
                                    </li>

                                    <li>
                                        <input id="pot5-not-req" type="radio" name="pot-requirement" value="not-req" />
                                        <label htmlFor="pot5-not-req">Not required</label>
                                    </li>

                                </ul>
                            </nav>

                        </fieldset>

                        <fieldset className="my-1">

                            <legend>Plant Size :</legend>

                            <nav>
                                <ol className="size-fields">

                                    <li>
                                        <input id="pot5-size-1" type="radio" name="plant-size" value="seed" />
                                        <label htmlFor="pot5-size-1">Seedlings</label>
                                    </li>

                                    <li>
                                        <input id="pot5-size-2" type="radio" name="plant-size" value="sapling" />
                                        <label htmlFor="pot5-size-2">Sapling</label>
                                    </li>

                                    <li>
                                        <input id="pot5-size-3" type="radio" name="plant-size" value="peak" />
                                        <label htmlFor="pot5-size-3">Peak</label>
                                    </li>

                                </ol>
                            </nav>

                        </fieldset>

                        <fieldset>
                            <button className="button-buy my-1">Buy Now</button>
                        </fieldset>

                    </form>
                </section>

            </article>

            <article className="product container my-1">

                <h5 className="hidden">""</h5>

                <section>

                    <h5 className="hidden">""</h5>

                    <figure>
                        <img className="product-picture" src={plantSix} alt="Calathea Orbifolia" />
                    </figure>

                    <article className="product-title-icons flex">

                        <h5 className="hidden">""</h5>

                        <figure className="product-title-newflash flex">

                            <h3>Calathea Orbifolia</h3>

                        </figure>

                        <article className="flex">

                            <h5 className="hidden">""</h5>

                            <figure><i className="fas fa-shopping-cart"></i></figure>
                            <figure><i className="fas fa-heart"></i></figure>
                        </article>

                    </article>

                    <article className="product-price-ratings flex">

                        <h5 className="hidden">""</h5>

                        <data value="53.60"><del>$67.00</del> <ins>$53.60</ins></data>

                        <article className="product-ratings flex">

                            <h5 className="hidden">""</h5>

                            <p>4.5</p>
                            <figure>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </figure>
                        </article>

                    </article>

                    <article className="product-discount-category">

                        <h5 className="hidden">""</h5>

                        <span><strong>Discount : </strong> <em>20% off</em></span>

                        <span><strong>Category : </strong> <em>Outdoor</em></span>
                    </article>

                    <br />

                    <article>

                        <h5 className="hidden">""</h5>

                        <p>
                            Smooth streaks of white stand out against the vivid green leaves of the Calathea...
              </p>
                    </article>

                    <article>

                        <h5 className="hidden">""</h5>

                        <a href="#" className="button-product-details"><u>View details</u></a>

                    </article>

                </section>

                <section>

                    <h5 className="hidden">""</h5>

                    <form>

                        <fieldset>

                            <legend>Pot requirement :</legend>

                            <nav>
                                <ul className="pot-fields">

                                    <li>
                                        <input id="pot6-req" type="radio" name="pot-requirement" value="req" />
                                        <label htmlFor="pot6-req">Required</label>
                                    </li>

                                    <li>
                                        <input id="pot6-not-req" type="radio" name="pot-requirement" value="not-req" />
                                        <label htmlFor="pot6-not-req">Not required</label>
                                    </li>

                                </ul>
                            </nav>

                        </fieldset>

                        <fieldset className="my-1">

                            <legend>Plant Size :</legend>

                            <nav>
                                <ol className="size-fields">

                                    <li>
                                        <input id="pot6-size-1" type="radio" name="plant-size" value="seed" />
                                        <label htmlFor="pot6-size-1">Seedlings</label>
                                    </li>

                                    <li>
                                        <input id="pot6-size-2" type="radio" name="plant-size" value="sapling" />
                                        <label htmlFor="pot6-size-2">Sapling</label>
                                    </li>

                                    <li>
                                        <input id="pot6-size-3" type="radio" name="plant-size" value="peak" />
                                        <label htmlFor="pot6-size-3">Peak</label>
                                    </li>

                                </ol>
                            </nav>

                        </fieldset>

                        <fieldset>
                            <button className="button-buy my-1">Buy Now</button>
                        </fieldset>

                    </form>
                </section>

            </article>

        </section>
    )
}

export default ProductsList;