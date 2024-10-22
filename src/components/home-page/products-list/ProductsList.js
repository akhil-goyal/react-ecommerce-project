import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './product-list.css';

import { allProducts } from '../../../contexts/product-context';

import newLabel from 'img/new.png';

const ProductsList = () => {

    // Importing products, filters states & methods from products context.
    const { filters, data, filteredData, setFilteredData } = useContext(allProducts);

    // This hook will fire up whenever there's a change in any flters data.
    useEffect(() => {

        // Duplicating the original products array.
        let filteredData = [...data];

        // Setting the values of filterd data on the basis of current state
        // and extracting it from firestore.
        if (filters.query)
            filteredData = filteredData.filter((prod) => prod.features.name.toLowerCase().includes(filters.query.toLowerCase().trim()))
        if (filters.plantsType !== 'all')
            filteredData = filteredData.filter((prod) => prod.features.category.toLowerCase() === filters.plantsType.toLowerCase())
        if (filters.potRequirement !== 'all')
            filteredData = filteredData.filter((prod) => prod.features.potAvailability === Boolean(filters.potRequirement.toLowerCase()))
        if (filters.plantSize !== 'all')
            filteredData = filteredData.filter((prod) => prod.features.plantSize.toLowerCase() === filters.plantSize.toLowerCase())

        // Setting the ratings state on the basis of rating
        // selected by the user.
        if (filters.rating !== 'all') {
            switch (filters.rating) {
                case '4':
                    filteredData = filteredData.filter((prod) => prod.features.rating >= 4 && prod.features.rating <= 5);
                    break;
                case '3':
                    filteredData = filteredData.filter((prod) => prod.features.rating >= 3 && prod.features.rating <= 4);
                    break;
                case '2':
                    filteredData = filteredData.filter((prod) => prod.features.rating >= 2 && prod.features.rating <= 3);
                    break;
                case '1':
                    filteredData = filteredData.filter((prod) => prod.features.rating >= 1 && prod.features.rating <= 2);
                    break;
            }
        }

        // Setting the sorting option state on the basis of
        // Sorting selected by user.
        switch (filters.sortBy) {
            case 'rating':
                filteredData.sort((a, b) => b.features.rating - a.features.rating);
                break;
            case 'new':
                filteredData = filteredData.filter((prod) => prod.features.isNew === true);
                break;
            case 'lowest':
                filteredData.sort((a, b) => applyDiscount(a.features.initialPrice, a.features.discount) - applyDiscount(b.features.initialPrice, b.features.discount));
                break;
            case 'highest':
                filteredData.sort((a, b) => applyDiscount(b.features.initialPrice, b.features.discount) - applyDiscount(a.features.initialPrice, a.features.discount));
                break;
        }

        // Setting the filteredData state as new filtered data.
        setFilteredData(filteredData);

    }, [filters]);

    // Function to build a new slug as per the product name.
    const buildSlug = name => {

        return name.toString().toLowerCase()
            .replace(/\s+/g, '-') // Replacing spaces with hyphen (-)
            .replace(/&/g, '-and-') // Replacing '&' with 'and'
            .replace(/[^\w\-]+/g, '') // Removing all special characters
            .replace(/\-\-+/g, '-') // Replacing multiple hyphens with single hyphen
            .replace(/^-+/, '') // Trimming hyphen from start of the slug
            .replace(/-+$/, '') // Trimming hyphen from end of the sloug

    }

    // Function to apply discount on the basis of initial price
    // & discount values of a product.
    const applyDiscount = (initialPrice, discount) => {
        let finalPrice = initialPrice - discount / 100 * initialPrice;
        return finalPrice
    }

    const productList = filteredData.map(product => {

        let finalPrice = applyDiscount(product.features.initialPrice, product.features.discount);
        let productSlug = buildSlug(product.features.name);

        return (
            <article key={product.id} className="product container my-1">

                <section>

                    <figure>
                        <Link to={`/product/${productSlug}`}>
                            <img className="product-picture" src={product.features.img} alt={product.features.name} />
                        </Link>
                    </figure>

                    <article className="product-title-icons flex">

                        <figure className="product-title-newflash flex">

                            <h3>{product.features.name}</h3>

                            {
                                product.features.isNew ? <img className="new-product-icon" src={newLabel} alt="New Product Label" /> : ''
                            }

                        </figure>

                        <article className="flex">

                            <figure ><i className="fas fa-shopping-cart"></i></figure>
                            <figure><i className="fas fa-heart"></i></figure>
                        </article>

                    </article>

                    <article className="product-price-ratings flex">

                        <data value={finalPrice}><del>${product.features.initialPrice.toFixed(2)}</del> <ins>${finalPrice.toFixed(2)}</ins></data>

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