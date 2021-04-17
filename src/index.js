import React from 'react'
import ReactDOM from 'react-dom'
import 'css/index.css'
import App from './App'
import AuthContext from './contexts/auth-context';
import { ProductsContext } from './contexts/product-context';
import { MenuContext } from './contexts/menu-context';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <AuthContext>
            <ProductsContext>
                <MenuContext>
                    <App />
                </MenuContext>
            </ProductsContext>
        </AuthContext>
    </HashRouter>
    , document.getElementById('root'))