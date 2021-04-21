import React, { createContext, useState } from 'react';

// Creating a new context.
export const menuItems = createContext();

const MenuContext = ({ children }) => {

    // Declaring the initial states.
    const [menuWidth, setMenuWidth] = useState('0.01em');
    const [filtersMenu, setFiltersMenu] = useState('block');

    // Passing the states so that they may be used
    // by the child components that fall under the scope
    // of this provider.
    return (
        <menuItems.Provider
            value={{
                menuWidth,
                filtersMenu,
                setMenuWidth,
                setFiltersMenu
            }}>
            {children}
        </menuItems.Provider>
    )
}

export { MenuContext };