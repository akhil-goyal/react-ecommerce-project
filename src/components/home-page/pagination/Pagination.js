import React, { useState, useContext, useEffect } from 'react';
import './pagination.css';

import { allProducts } from '../../../contexts/product-context';

const PaginationComponent = () => {

    const { data, setFilteredData } = useContext(allProducts);

    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);

    const [pageNumberLimit] = useState(6);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(6);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    const handleClick = (event) => {
        setcurrentPage(Number(event.target.id));
    };

    const pages = [];

    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        setFilteredData(currentItems);
    }, [data]);

    useEffect(() => {
        setFilteredData(currentItems);
    }, [currentPage]);

    const handleNextbtn = () => {
        setcurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const handlePrevbtn = () => {
        setcurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit == 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
    }

    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            console.log(number);
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
                            {pageDecrementBtn}
                            {renderPageNumbers}
                            {pageIncrementBtn}
                        </ol>
                    </nav>

                    <article className="buttons-prev-next container">
                        <a onClick={handlePrevbtn} disabled={currentPage == pages[0] ? true : false}>Previous</a>
                        <a onClick={handleNextbtn} disabled={currentPage == pages[pages.length - 1] ? true : false}>Next</a>
                    </article>
                </nav>
            </section>

        </>
    )
}

export default PaginationComponent;