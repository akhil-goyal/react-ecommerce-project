import React from 'react';

const Filters = () => {
    return (
        <section className="display-filters">

            <article className="product-filters flex">

                <h2>Filters</h2>
                <figure className="button-filters"><i className="fas fa-sliders-h"></i></figure>
            </article>

            <article>

                <form className="filters">

                    <section className="filter-options">

                        <fieldset>

                            <legend>Plant type :</legend>

                            <nav>
                                <ul className="filter-plant-types">

                                    <li>
                                        <input type="checkbox" name="type-filter" value="outdoor" id="filter-outdoor" />
                                        <label htmlFor="filter-outdoor">Outdoor</label>
                                    </li>

                                    <li>
                                        <input type="checkbox" name="type-filter" value="indoor" id="filter-indoor" />
                                        <label htmlFor="filter-indoor">Indoor</label>
                                    </li>

                                    <li>
                                        <input type="checkbox" name="type-filter" value="aerial" id="filter-aerial" />
                                        <label htmlFor="filter-aerial">Aerial</label>
                                    </li>

                                </ul>
                            </nav>

                        </fieldset>

                        <fieldset className="my-1">

                            <legend>Pot requirement :</legend>

                            <nav>
                                <ul className="filter-pot-requirement">

                                    <li><input type="checkbox" name="req-filter" value="incl" id="filter-incl" /> <label
                                        htmlFor="filter-incl">Including Pot</label></li>

                                    <li><input type="checkbox" name="req-filter" value="excl" id="filter-excl" /> <label
                                        htmlFor="filter-excl">Excluding Pot</label></li>

                                </ul>
                            </nav>

                        </fieldset>

                        <fieldset className="my-1">

                            <legend>Plant size :</legend>

                            <nav>
                                <ol className="filter-plant-size">

                                    <li><input type="checkbox" name="size-filter" value="input-seed" id="filter-seed" /> <label
                                        htmlFor="filter-seed">Seedlings</label></li>

                                    <li><input type="checkbox" name="size-filter" value="input-sapling" id="filter-sapling" /> <label
                                        htmlFor="filter-sapling">Sapling</label></li>

                                    <li><input type="checkbox" name="size-filter" value="input-peak" id="filter-peak" /> <label
                                        htmlFor="filter-peak">Peak</label></li>

                                </ol>
                            </nav>

                        </fieldset>

                        <fieldset className="my-1">

                            <legend>Ratings (above)</legend>

                            <nav>
                                <ol className="filter-list">

                                    <li>
                                        <input type="radio" name="rating" value="4" id="aboveFour" />
                                        <label htmlFor="aboveFour">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </label>
                                    </li>

                                    <li>
                                        <input type="radio" name="rating" value="3" id="aboveThree" />
                                        <label htmlFor="aboveThree">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </label>
                                    </li>

                                    <li>
                                        <input type="radio" name="rating" value="2" id="aboveTwo" />
                                        <label htmlFor="aboveTwo">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </label>
                                    </li>

                                    <li>
                                        <input type="radio" name="rating" value="1" id="aboveOne" />
                                        <label htmlFor="aboveOne">
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </label>
                                    </li>

                                </ol>
                            </nav>

                        </fieldset>

                        <fieldset>

                            <label className="label-sort" htmlFor="sort">Sort by</label>

                            <select name="sort" id="sort">

                                <option value="relevance">Relevance</option>
                                <option value="new-arrivals">Newest Arrivals</option>
                                <option value="high-to-low">Price, lowest to highest</option>
                                <option value="low-to-high">Price, highest to lowest</option>

                            </select>

                        </fieldset>

                    </section>

                </form>
            </article>

        </section>
    )
}

export default Filters;