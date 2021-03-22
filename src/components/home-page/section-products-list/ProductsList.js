import React from 'react';
import { Link } from 'react-router-dom';

import newLabel from 'img/new.png';

const ProductsList = ({ productsList }) => {

    const products = productsList.map(product => (

        <article key={product.id} className="product container my-1">

            <h5 className="hidden">""</h5>

            <section>

                <h5 className="hidden">""</h5>

                <figure>
                    <img className="product-picture" src={product.features.img} alt={product.features.name} />
                </figure>

                <article className="product-title-icons flex">

                    <h5 className="hidden">""</h5>

                    <figure className="product-title-newflash flex">

                        <h3>{product.features.name}</h3>

                        {
                            product.features.isNew ? <img className="new-product-icon" src={newLabel} alt="New Product Label" /> : ''
                        }

                    </figure>

                    <article className="flex">

                        <h5 className="hidden">""</h5>

                        <figure><i className="fas fa-shopping-cart"></i></figure>
                        <figure><i className="fas fa-heart"></i></figure>
                    </article>

                </article>

                <article className="product-price-ratings flex">

                    <h5 className="hidden">""</h5>

                    <data value={product.features.discountedPrice()}><del>${product.features.initialPrice}</del> <ins>${product.features.discountedPrice()}</ins></data>

                    <article className="product-ratings flex">

                        <h5 className="hidden">""</h5>

                        <p>{product.features.rating}</p>
                        <figure>
                            {
                                <>
                                    <i className={(product.features.rating == 0) ? 'far fa-star' : (product.features.rating > 0 && product.features.rating < 1) ? 'fas fa-star-half-alt' : 'fas fa-star'}></i>
                                    <i className={(product.features.rating > 1 && product.features.rating < 2) ? 'fas fa-star-half-alt' : (product.features.rating >= 2) ? 'fas fa-star' : 'far fa-star'}></i>
                                    <i className={(product.features.rating > 2 && product.features.rating < 3) ? 'fas fa-star-half-alt' : (product.features.rating >= 3) ? 'fas fa-star' : 'far fa-star'}></i>
                                    <i className={(product.features.rating > 3 && product.features.rating < 4) ? 'fas fa-star-half-alt' : (product.features.rating >= 4) ? 'fas fa-star' : 'far fa-star'}></i>
                                    <i className={(product.features.rating > 4 && product.features.rating < 5) ? 'fas fa-star-half-alt' : (product.features.rating >= 5) ? 'fas fa-star' : 'far fa-star'}></i>
                                </>
                            }
                        </figure>
                    </article>

                </article>

                <article className="product-discount-category">

                    <h5 className="hidden">""</h5>

                    <span><strong>Discount : </strong> <em>{product.features.discount}% off</em></span>

                    <span><strong>Category : </strong> <em>{product.features.category}</em></span>
                </article>

                <br />

                <article>

                    <h5 className="hidden">""</h5>

                    <p>{product.features.description.substring(0, 80)}...</p>
                </article>

                <article>

                    <h5 className="hidden">""</h5>

                    <Link to={`/product/${product.id}`} className="button-product-details"><u>View details</u></Link>

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
                                    <input id={`pot${product.id}-req`} type="radio" name="pot-requirement" value="req" />
                                    <label htmlFor={`pot${product.id}-req`}>Required</label>
                                </li>

                                <li>
                                    <input id={`pot${product.id}-not-req`} type="radio" name="pot-requirement" value="not-req" />
                                    <label htmlFor={`pot${product.id}-not-req`}>Not required</label>
                                </li>

                            </ul>
                        </nav>

                    </fieldset>

                    <fieldset className="my-1">

                        <legend>Plant Size :</legend>

                        <nav>
                            <ol className="size-fields">

                                <li>
                                    <input id={`pot${product.id}-size-1`} type="radio" name="plant-size" value="seed" />
                                    <label htmlFor={`pot${product.id}-size-1`}>Seedlings</label>
                                </li>

                                <li>
                                    <input id={`pot${product.id}-size-2`} type="radio" name="plant-size" value="sapling" />
                                    <label htmlFor={`pot${product.id}-size-2`}>Sapling</label>
                                </li>

                                <li>
                                    <input id={`pot${product.id}-size-3`} type="radio" name="plant-size" value="peak" />
                                    <label htmlFor={`pot${product.id}-size-3`}>Peak</label>
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
    ))

    return (
        <section className="grid products-list">

            {products}

        </section>
    )
}

export default ProductsList;