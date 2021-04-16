import React, { useContext } from 'react';
import './filters.css';
import { allProducts } from '../../../contexts/product-context';

const Filters = () => {

    const { filters, setFilters } = useContext(allProducts);

    const handleRatingChange = (event) => {

        console.log('FILTER RATING : ', event.target.value);
        setFilters({
            ...filters,
            rating: event.target.value
        });
    }

    const handlePlantTypeChange = (event) => {

        console.log('FILTER PLANT TYPE : ', event.target.value);

        setFilters({
            ...filters,
            plantsType: event.target.value
        });

    }

    const handlePotRequirementChange = (event) => {

        console.log('FILTER POT REQUIREMENT : ', event.target.value);

        setFilters({
            ...filters,
            potRequirement: event.target.value
        });

    }

    const handlePlantSizeChange = (event) => {

        console.log('FILTER PLANT SIZE : ', event.target.value);

        setFilters({
            ...filters,
            plantSize: event.target.value
        });

    }

    const handleSortByChange = (event) => {

        console.log('FILTER SORT BY : ', event.target.value);

        setFilters({
            ...filters,
            sortBy: event.target.value
        });

    }

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
                                        <input onChange={handlePlantTypeChange} type="radio" name="type-filter" value="outdoor" id="filter-outdoor" />
                                        <label htmlFor="filter-outdoor">Outdoor</label>
                                    </li>

                                    <li>
                                        <input onChange={handlePlantTypeChange} type="radio" name="type-filter" value="indoor" id="filter-indoor" />
                                        <label htmlFor="filter-indoor">Indoor</label>
                                    </li>

                                    <li>
                                        <input onChange={handlePlantTypeChange} type="radio" name="type-filter" value="aerial" id="filter-aerial" />
                                        <label htmlFor="filter-aerial">Aerial</label>
                                    </li>

                                </ul>
                            </nav>

                        </fieldset>

                        <fieldset className="my-1">

                            <legend>Pot requirement :</legend>

                            <nav>
                                <ul className="filter-pot-requirement">

                                    <li><input onChange={handlePotRequirementChange} type="radio" name="req-filter" value="true" id="filter-incl" /> <label
                                        htmlFor="filter-incl">Including Pot</label></li>

                                    <li><input onChange={handlePotRequirementChange} type="radio" name="req-filter" value="false" id="filter-excl" /> <label
                                        htmlFor="filter-excl">Excluding Pot</label></li>

                                </ul>
                            </nav>

                        </fieldset>

                        <fieldset className="my-1">

                            <legend>Plant size :</legend>

                            <nav>
                                <ol className="filter-plant-size">

                                    <li><input onChange={handlePlantSizeChange} type="radio" name="size-filter" value="seedling" id="filter-seed" /> <label
                                        htmlFor="filter-seed">Seedlings</label></li>

                                    <li><input onChange={handlePlantSizeChange} type="radio" name="size-filter" value="sapling" id="filter-sapling" /> <label
                                        htmlFor="filter-sapling">Sapling</label></li>

                                    <li><input onChange={handlePlantSizeChange} type="radio" name="size-filter" value="peak" id="filter-peak" /> <label
                                        htmlFor="filter-peak">Peak</label></li>

                                </ol>
                            </nav>

                        </fieldset>

                        <fieldset className="my-1">

                            <legend>Ratings (above)</legend>

                            <nav>
                                <ol className="filter-list">

                                    <li>
                                        <input onChange={handleRatingChange} type="radio" name="rating" value="4" id="aboveFour" />
                                        <label htmlFor="aboveFour">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </label>
                                    </li>

                                    <li>
                                        <input onChange={handleRatingChange} type="radio" name="rating" value="3" id="aboveThree" />
                                        <label htmlFor="aboveThree">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </label>
                                    </li>

                                    <li>
                                        <input onChange={handleRatingChange} type="radio" name="rating" value="2" id="aboveTwo" />
                                        <label htmlFor="aboveTwo">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </label>
                                    </li>

                                    <li>
                                        <input onChange={handleRatingChange} type="radio" name="rating" value="1" id="aboveOne" />
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

                            <select onChange={handleSortByChange} name="sort" id="sort">

                                <option disabled>Select</option>
                                <option value="rating">Ratings</option>
                                <option value="new">Newest Arrivals</option>
                                <option value="lowest">Price, lowest to highest</option>
                                <option value="highest">Price, highest to lowest</option>

                            </select>

                        </fieldset>

                    </section>

                </form>

            </article>

        </section>
    )
}

export default Filters;