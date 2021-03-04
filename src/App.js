import React from 'react';
import 'css/App.css';
import HomePage from 'components/HomePage/HomePage';

// let openMenu = document.querySelector(".menu-bar");
// let closeMenu = document.querySelector('.menu-close');

// let buttonFilters = document.querySelector('.button-filters');
// let filterFields = document.querySelector('.filter-options');

// let userIcon = document.querySelector('.user-image');

// openMenu.addEventListener('click', () => {
//     document.querySelector(".side-bar").style.width = "17em";
// });

// closeMenu.addEventListener('click', () => {
//     document.querySelector(".side-bar").style.width = "0";
// });

// buttonFilters.addEventListener('click', () => {
//     filterFields.classList.toggle('filter-options');
// });

// userIcon.addEventListener('click', () => {
//     document.querySelector(".side-bar").style.width = "17em";
// });

const App = () => {
	return (
		<>
			<HomePage/>
		</>
	)
}

export default App