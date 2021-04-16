import React, { useState, useContext, useEffect } from 'react';
import { Pagination } from 'antd';
import './pagination.css';
import { usePagination } from "./PagnationHook";

import { allProducts } from '../../../contexts/product-context';

const PaginationComponent = () => {

    const { products, setProducts } = useContext(allProducts);
    const [pageNum, setPageNum] = useState(1)

    const onPageChange = (current, size) => {
        setPageNum(current)
    }

    const maxResults = 6;

    let paginatedProducts = products
        .slice((pageNum - 1) * maxResults, (pageNum - 1) * maxResults + maxResults)

    console.log('HURAAYY! :', paginatedProducts);

    useEffect(() => {
        setProducts(paginatedProducts);
    }, [pageNum]);

    return (
        <section>

            <nav aria-label="Pagination" className="pagination text-center container">

                <article>
                    <p><strong>Displaying 1-6 of {products.length} products.</strong></p>
                </article>

                <Pagination
                    id="pagination"
                    current={pageNum}
                    defaultPageSize={maxResults}
                    total={products.length}
                    onChange={onPageChange}
                />

                {/* <nav>
                    <ol className="pages flex">
                        <li><a href="#" aria-label="Current Page, Page 1" aria-current="true">1</a></li>
                        <li><a href="#" aria-label="Page 2">2</a></li>
                        <li><a href="#" aria-label="Page 3">3</a></li>
                        <li><a href="#" aria-label="Page 4">4</a></li>
                        <li><a href="#" aria-label="Page 5">5</a></li>
                    </ol>
                </nav>

                <article className="buttons-prev-next container">

                    <a href="#">Previous</a>
                    <a href="#">Next</a>
                </article> */}

            </nav>
        </section>
    )
}

export default PaginationComponent;