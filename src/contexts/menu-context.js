import React, { createContext, useState } from 'react';

export const menuItems = createContext();

const MenuContext = ({ children }) => {

    const [menuWidth, setMenuWidth] = useState('0em');
    const [filtersMenu, setFiltersMenu] = useState('block');

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