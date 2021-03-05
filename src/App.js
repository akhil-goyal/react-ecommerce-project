import React from 'react';
import 'css/App.css';
import HomePage from 'components/home-page/HomePage';

import { trendingProducts, productsList } from './products';

console.log(trendingProducts, productsList);

const App = () => {
	return (
		<>
			<HomePage />
		</>
	)
}

export default App