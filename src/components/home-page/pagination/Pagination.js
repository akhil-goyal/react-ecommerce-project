import React, { useState, useContext, useEffect } from 'react';
import './pagination.css';

import { allProducts } from '../../../contexts/product-context';

const PaginationComponent = () => {

    // Importing products & filter method from products context.
    const { data, setFilteredData } = useContext(allProducts);

    // Declaring the initial states.
    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);
    const [pageNumbersLimit] = useState(6);
    const [maximumPageNumberLimit, setMaximumPageNumberLimit] = useState(6);
    const [minimumPageNumberLimit, setMinimumPageNumberLimit] = useState(0);

    // Setting the current on the click of a page number.
    const handleClick = (event) => {
        setcurrentPage(Number(event.target.id));
    };

    // Initializing an empty array.
    const pages = [];

    // Storing the page numbers in pages array. Pages array are
    // being calculated on the basis of length of data & number of
    // products allowed per page. For example : 30/6 = 5 pages.
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pages.push(i);
    }

    // Setting index of first & last product on a page.
    // For example : indexOfLastItem => 1*5 = 5, indexOfFirstItem => 5-5=0
    // So, the current page will show items with index from 0 to 5 (i.e 6 products.)
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Setting the current 6 products in currentItems.
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Passign the current items in the data so that
    // paginated data is displayed when the products list loads up.
    // This may change as the incoming data from firestore changes.
    useEffect(() => {
        setFilteredData(currentItems);
    }, [data]);

    // This hook will fire up when the page number is changed.
    // It will result in setting the previous/next set of products
    // and setting them again into products list.
    useEffect(() => {
        setFilteredData(currentItems);
    }, [currentPage]);

    // When the next button is clicked.
    const handleNextButton = () => {

        // Incrementing the currentPage state by 1.
        setcurrentPage(currentPage + 1);

        if (currentPage + 1 > maximumPageNumberLimit) {
            setMaximumPageNumberLimit(maximumPageNumberLimit + pageNumbersLimit);
            setMinimumPageNumberLimit(minimumPageNumberLimit + pageNumbersLimit);
        }
    };

    // When the previous button is clicked.
    const handlePreviousButton = () => {

        // Decrementing the currentPage state by 1.
        setcurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumbersLimit == 0) {
            setMaximumPageNumberLimit(maximumPageNumberLimit - pageNumbersLimit);
            setMinimumPageNumberLimit(minimumPageNumberLimit - pageNumbersLimit);
        }
    };


    // Virtual page increment button that will fire up when a page
    // number is clicked.
    let pageIncrementButton = null;
    if (pages.length > maximumPageNumberLimit) {
        pageIncrementButton = <li onClick={handleNextButton}> &hellip; </li>;
    }

    // Virtual page decrement button that will fire up when a page
    // number is clicked.
    let pageDecrementButton = null;
    if (minimumPageNumberLimit >= 1) {
        pageDecrementButton = <li onClick={handlePreviousButton}> &hellip; </li>;
    }

    // Function to render the page numbers as per the
    // values stord in pages array.
    const showPageNumbers = pages.map((number) => {
        if (number < maximumPageNumberLimit + 1 && number > minimumPageNumberLimit) {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className={currentPage === number ? "active" : null}
                >
                    {number}
                </li>
            );
        } else {
            return null;
        }
    });

    return (
        <>
            <section>

                <nav aria-label="Pagination" className="pagination text-center container">

                    <article>
                        <p><strong>Displaying {indexOfFirstItem + 1}-{indexOfLastItem} of {data.length} products.</strong></p>
                    </article>

                    <nav>
                        <ol className="pages flex">
                            {pageDecrementButton}
                            {showPageNumbers}
                            {pageIncrementButton}
                        </ol>
                    </nav>

                    <article className="buttons-prev-next container">
                        <a onClick={handlePreviousButton} disabled={currentPage == pages[0] ? true : false}>Previous</a>
                        <a onClick={handleNextButton} disabled={currentPage == pages[pages.length - 1] ? true : false}>Next</a>
                    </article>
                </nav>
            </section>

        </>
    )
}

export default PaginationComponent;