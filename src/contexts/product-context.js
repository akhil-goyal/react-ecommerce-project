import React, { createContext, useEffect, useState } from 'react';
import { authMethods } from '../firebase-utils/auth-methods';

// Creating a new context.
export const allProducts = createContext();

const ProductsContext = ({ children }) => {

    // Declaring the initial states.
    const [products, setProducts] = useState([]);
    let [data, setData] = useState(products);

    let [filteredData, setFilteredData] = useState([]);

    // Loading products from firestore & storing them into
    // a local state.
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

    // Passing the states so that they may be used
    // by the child components that fall under the scope
    // of this provider.
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