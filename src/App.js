// PACKAGES
import React, { useContext } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

// PAGES
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
import { firebaseAuth } from './contexts/auth-context';

// OTHERS
import { trendingProducts, productsList } from './products';

const App = () => {

	const { token } = useContext(firebaseAuth)

	return (
		<ProductsContext.Provider value={productsList}>
			<Switch>
				<Route exact path="/">
					<LandingPage trendingProducts={trendingProducts} />
				</Route>
				<Route path="/signup" component={SignUp} />
				<Route path="/signin" component={SignIn} />
				<Route path='/dashboard' render={renderProps => token === null ? <SignIn /> : <Dashboard />} />
				<Route path="/gallery" render={renderProps => token === null ? <SignIn /> : <Gallery />} />
				<Route path="/about" render={renderProps => token === null ? <SignIn /> : <About />} />
				<Route path="/contact" render={renderProps => token === null ? <SignIn /> : <Contact />} />
				<Route path="/product/:slug" render={renderProps => token === null ? <SignIn /> : <Product productsList={productsList} />} />
				<Route path="/cart" render={renderProps => token === null ? <SignIn /> : <Cart />} />
				<Route path="/checkout" render={renderProps => token === null ? <SignIn /> : <Checkout />} />
				<Route path="*" component={Page404} />
			</Switch>
		</ProductsContext.Provider>
	)
}

export default App;