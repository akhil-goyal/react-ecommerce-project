import React, { createContext, useEffect, useState } from 'react';
import { authMethods } from '../firebase-utils/auth-methods';

export const allProducts = createContext();

const ProductsContext = ({ children }) => {

    const [products, setProducts] = useState([]);
    let [data, setData] = useState(products);

    let [testHook, setTestHook] = useState([]);

    console.log('Testing Hook : ', testHook);

    useEffect(() => {
        if (products.length > 0) {
            setData(products);
        }
        console.log('Product Hook From Context ...');
    }, [products]);

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
                data,
                testHook,
                setProducts,
                setFilters,
                setTestHook,
                setData,
                handleProductsData
            }}>
            {children}
        </allProducts.Provider>
    )
}

export { ProductsContext };