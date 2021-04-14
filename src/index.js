import React from 'react'
import ReactDOM from 'react-dom'
import 'css/index.css'
import App from './App'
import AuthProvider from './contexts/AuthProvider';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <AuthProvider>
            <App />
        </AuthProvider>
    </HashRouter>
    , document.getElementById('root'))