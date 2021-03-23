import React from 'react';
import { useParams } from 'react-router-dom';

const Product = ({ productsList }) => {

    const { slug } = useParams();

    const product = productsList.find((prod) => prod.slug() === slug) || productsList[0];

    const { img, name, description } = product.features;

    return (
        <>
            <h1>Product Page</h1>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>
        </>
    )
}

export default Product;