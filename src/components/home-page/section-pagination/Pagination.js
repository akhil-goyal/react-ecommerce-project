import React from 'react';

const Pagination = () => {
    return (
        <section>

            <h5 className="hidden">""</h5>

            <nav aria-label="Pagination" className="pagination text-center container">

                <article>

                    <h5 className="hidden">""</h5>

                    <p><strong>Displaying 1-6 of 24 products.</strong></p>

                </article>

                <nav>
                    <ol className="pages flex">
                        <li><a href="#" aria-label="Current Page, Page 1" aria-current="true">1</a></li>
                        <li><a href="#" aria-label="Page 2">2</a></li>
                        <li><a href="#" aria-label="Page 3">3</a></li>
                        <li><a href="#" aria-label="Page 4">4</a></li>
                        <li><a href="#" aria-label="Page 5">5</a></li>
                    </ol>
                </nav>

                <article className="buttons-prev-next container">


                    <h5 className="hidden">""</h5>

                    <a href="#">Previous</a>
                    <a href="#">Next</a>
                </article>

            </nav>
        </section>
    )
}

export default Pagination;