import React, { createContext, useEffect, useState } from 'react';
import { authMethods } from '../firebase-utils/auth-methods';

export const allProducts = createContext();

const ProductsContext = ({ children }) => {

    const [products, setProducts] = useState([]);
    let [data, setData] = useState(products);

    let [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            setData(products);
        }
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
                filteredData,
                setProducts,
                setFilters,
                setFilteredData,
                setData,
                handleProductsData
            }}>
            {children}
        </allProducts.Provider>
    )
}

export { ProductsContext };