import React from 'react'
import ReactDOM from 'react-dom'
import 'css/index.css'
import App from './App'
import AuthContext from './contexts/auth-context';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <AuthContext>
            <App />
        </AuthContext>
    </HashRouter>
    , document.getElementById('root'))