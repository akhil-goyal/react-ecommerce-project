import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Gallery from 'pages/Gallery';
import Product from 'pages/Product';
import Page404 from 'pages/Page404';

import { trendingProducts, productsList } from './products';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<HomePage trendingProducts={trendingProducts} productsList={productsList} />
				</Route>
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
				<Route path="/gallery" component={Gallery} />
				<Route path="/product/:slug">
					<Product productsList={productsList} />
				</Route>
				<Route path="*" component={Page404} />
			</Switch>
		</Router>
	)
}

export default App;