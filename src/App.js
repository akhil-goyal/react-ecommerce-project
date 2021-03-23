import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from 'components/home-page/HomePage';
import About from 'components/about-us/About';
import Categories from 'components/categories/Categories';
import Contact from 'components/contact-us/Contact';
import Gallery from 'components/gallery/Gallery';
import Product from 'components/product-page/Product';
import Page404 from 'components/page-404/Page404';

import { trendingProducts, productsList } from './products';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<HomePage trendingProducts={trendingProducts} productsList={productsList} />
				</Route>
				<Route path="/about" component={About} />
				<Route path="/categories" component={Categories} />
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