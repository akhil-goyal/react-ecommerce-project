import React, { createContext, useEffect, useState } from 'react';
import { authMethods } from '../firebase-utils/auth-methods';

export const allProducts = createContext();

const ProductsContext = ({ children }) => {

    const [products, setProducts] = useState([]);

    const [filters, setFilters] = useState({
        query: '',
        rating: 'all',
        sortBy: 'relevance',
        plantsType: 'all',
        potRequirement: 'all',
        plantSize: 'all',
        sortBy: 'none'
    });

    const handleProductsData = () => {
        authMethods.getProductsMethod(setProducts);
    }

    return (
        <allProducts.Provider
            value={{
                products,
                filters,
                setProducts,
                setFilters,
                handleProductsData
            }}>
            {children}
        </allProducts.Provider>
    )
}

export { ProductsContext };