import React, { createContext, useState } from 'react';

export const menuItems = createContext();

const MenuContext = ({ children }) => {

    const [menuWidth, setMenuWidth] = useState('0em');

    return (
        <menuItems.Provider
            value={{
                menuWidth,
                setMenuWidth
            }}>
            {children}
        </menuItems.Provider>
    )
}

export { MenuContext };