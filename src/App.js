// PACKAGES
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

// COMPONENTS
import LandingPage from 'pages/landing/LandingPage';
import SignUp from 'pages/sign-up/SignUp';
import SignIn from 'pages/sign-in/SignIn';
import Dashboard from 'pages/dashboard/Dashboard';
import Gallery from 'pages/gallery/Gallery';
import About from 'pages/about/About';
import Contact from 'pages/contact/Contact';
import Product from 'pages/product/Product';
import Cart from 'pages/cart/Cart';
import Checkout from 'pages/checkout/Checkout';
import Page404 from 'pages/page-404/Page404';

// CONTEXTS
import ProductsContext from './contexts/product-context';

// OTHERS
import { trendingProducts, productsList } from './products';

const App = () => {
	return (
		<ProductsContext.Provider value={productsList}>
			<Router>
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route path="/signup" component={SignUp} />
					<Route path="/signin" component={SignIn} />
					<Route path="/dashboard">
						<Dashboard trendingProducts={trendingProducts} />
					</Route>
					<Route path="/gallery" component={Gallery} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="/product/:slug">
						<Product productsList={productsList} />
					</Route>
					<Route path="/cart" component={Cart} />
					<Route path="/checkout" component={Checkout} />
					<Route path="*" component={Page404} />
				</Switch>
			</Router>
		</ProductsContext.Provider>
	)
}

export default App;