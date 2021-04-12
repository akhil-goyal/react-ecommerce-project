import React from 'react';
import './page-404.css';

const Page404 = () => {
    return (
        <>
            <main>

                <div className="page-404">
                    <img src="img/page-404.jpg" alt="" />
                </div>

                <div className="page-404-message">
                    <h1>Oh Snap!</h1>
                    <h4>Looks like the resource you are trying to access is either broken or doesn't exist.</h4>
                </div>

            </main>
        </>
    )
}

export default Page404;