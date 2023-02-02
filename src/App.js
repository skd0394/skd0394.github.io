import React from 'react';
// import './App.css';
import Navbar from './Navbar/Navbar';
// import './Navbar/navbar.css';
import ThemeToggler from './components/ThemeToggler';
// import './global.css'
import AboutMe from './components/scripts/AboutMe';
function App() {
	
return (
	<div id='parent'>
		<Navbar/>
		<AboutMe/>
		<ThemeToggler/>
	</div>
);
}

export default App;

