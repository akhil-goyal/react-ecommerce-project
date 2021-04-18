// PACKAGES
import React, { useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

// COMPONENTS & PAGES
import PrivateRoute from "components/helpers/Protected";
import PublicRoute from "components/helpers/Public";
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
import { allProducts } from './contexts/product-context';
import { firebaseAuth } from './contexts/auth-context';

// OTHERS
import { trendingProducts, productsList } from './products';
import loader from 'img/loader.gif';

const App = () => {

	const { isAuth, loading, handleUserAuth } = useContext(firebaseAuth);
	const { handleProductsData } = useContext(allProducts);

	handleUserAuth();

	useEffect(() => {
		handleProductsData();
	}, [])

	return loading === true ? (
		<div className="loader">
			<img src={loader} alt="Site Loader" />
		</div>
	) : (
		<Switch>

			<Route exact path="/" authenticated={isAuth}>
				<LandingPage trendingProducts={trendingProducts} />
			</Route>

			<PublicRoute exact path="/signup" authenticated={isAuth} component={SignUp} />
			<PublicRoute exact path="/signin" authenticated={isAuth} component={SignIn} />

			<PrivateRoute exact path="/dashboard" authenticated={isAuth} component={Dashboard} />
			<PrivateRoute exact path="/gallery" authenticated={isAuth} component={Gallery} />
			<PrivateRoute exact path="/about" authenticated={isAuth} component={About} />
			<PrivateRoute exact path="/contact" authenticated={isAuth} component={Contact} />
			<PrivateRoute exact path="/product/:slug" authenticated={isAuth} >
				<Product productsList={productsList} />
			</PrivateRoute>
			<PrivateRoute exact path="/cart" authenticated={isAuth} component={Cart} />
			<PrivateRoute exact path="/checkout" authenticated={isAuth} component={Checkout} />

			<Route path="*" component={Page404} />

		</Switch>
	)
}

export default App;