import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './product-list.css';

import { allProducts } from '../../../contexts/product-context';

import newLabel from 'img/new.png';

const ProductsList = () => {

    const { products, setProducts, filters, setFilters } = useContext(allProducts);

    useEffect(() => {

        let filteredData = [...products];

        if (filters.query)
            filteredData = filteredData.filter((prod) => prod.features.name.toLowerCase().includes(filters.query.toLowerCase().trim()))
        if (filters.rating !== 'all')
            filteredData = filteredData.filter((prod) => Number(prod.features.rating) >= Number(filters.rating))
        if (filters.plantsType !== 'all')
            filteredData = filteredData.filter((prod) => prod.features.category.toLowerCase() === filters.plantsType.toLowerCase())
        if (filters.potRequirement !== 'all')
            filteredData = filteredData.filter((prod) => prod.features.potAvailability === filters.potRequirement.toLowerCase())
        if (filters.plantSize !== 'all')
            filteredData = filteredData.filter((prod) => prod.features.plantSize.toLowerCase() === filters.plantSize.toLowerCase())

        // Sort if appropriate
        switch (filters.sortBy) {
            case `highest`:
                filteredData.sort((a, b) => a.features.initialPrice - b.features.initialPrice)
                break;
            case `lowest`:
                filteredData.sort((a, b) => b.features.initialPrice - a.features.initialPrice)
                break;
            case `rating`:
                filteredData.sort((a, b) => b.features.rating - a.features.rating)
                break;
        }

        // Assign the filtered products to the result state
        setProducts(filteredData)

    }, [filters]);

    useEffect(() => {
        products
    }, []);

    const buildSlug = name => {

        return name.toString().toLowerCase()
            .replace(/\s+/g, '-') // Replacing spaces with hyphen (-)
            .replace(/&/g, '-and-') // Replacing '&' with 'and'
            .replace(/[^\w\-]+/g, '') // Removing all special characters
            .replace(/\-\-+/g, '-') // Replacing multiple hyphens with single hyphen
            .replace(/^-+/, '') // Trimming hyphen from start of the slug
            .replace(/-+$/, '') // Trimming hyphen from end of the sloug

    }

    const applyDiscount = (initialPrice, discount) => {
        let finalPrice = initialPrice - discount / 100 * initialPrice;
        return finalPrice
    }

    const productList = products.map(product => {

        let finalPrice = applyDiscount(product.features.initialPrice, product.features.discount);
        let productSlug = buildSlug(product.features.name);

        return (
            <article key={product.id} className="product container my-1">

                <section>

                    <figure>
                        <img className="product-picture" src={product.features.img} alt={product.features.name} />
                    </figure>

                    <article className="product-title-icons flex">

                        <figure className="product-title-newflash flex">

                            <h3>{product.features.name}</h3>

                            {
                                product.features.isNew ? <img className="new-product-icon" src={newLabel} alt="New Product Label" /> : ''
                            }

                        </figure>

                        <article className="flex">

                            <figure><i className="fas fa-shopping-cart"></i></figure>
                            <figure><i className="fas fa-heart"></i></figure>
                        </article>

                    </article>

                    <article className="product-price-ratings flex">

                        <data value={finalPrice}><del>${product.features.initialPrice}</del> <ins>${finalPrice}</ins></data>

                        <article className="product-ratings flex">

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

                        <span><strong>Discount : </strong> <em>{product.features.discount}% off</em></span>

                        <span><strong>Category : </strong> <em>{product.features.category}</em></span>
                    </article>

                    <br />

                    <article>

                        <p>{product.features.description.substring(0, 80)}...</p>
                    </article>

                    <article>

                        <Link to={`/product/${productSlug}`} className="button-product-details"><u>View details</u></Link>

                    </article>

                </section>

                <section>

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
        )
    })

    return (
        <section className="grid products-list">

            {productList}

        </section>
    )
}

export default ProductsList;