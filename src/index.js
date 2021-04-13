import React from 'react'
import ReactDOM from 'react-dom'
import 'css/index.css'
// import 'css/media-queries.css';
import App from './App'
import AuthProvider from './contexts/AuthProvider';

ReactDOM.render(
    <AuthProvider>
        <App />
    </AuthProvider>
    , document.getElementById('root'))