import React from 'react';
import 'css/App.css';
import HomePage from 'components/home-page/HomePage';

import { trendingProducts, productsList } from './products';

const App = () => {
	return (
		<>
			<HomePage trendingProducts={trendingProducts} productsList={productsList} />
		</>
	)
}

export default App