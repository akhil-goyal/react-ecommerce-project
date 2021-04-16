import React, { createContext, useState } from 'react';
import { authMethods } from '../firebase-utils/auth-methods';

export const allProducts = createContext();

const ProductsContext = ({ children }) => {

    const [products, setProducts] = useState([]);

    const handleProductsData = () => {
        authMethods.getProductsMethod(setProducts);
    }

    return (
        <allProducts.Provider value={{ products, handleProductsData }}>
            {children}
        </allProducts.Provider>
    )
}

export { ProductsContext };