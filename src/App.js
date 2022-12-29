import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Navbar/Nav_apps/about';
import Events from './Navbar/Nav_apps/events';
import Blogs from './Navbar/Nav_apps/blogs';
import AnnualReport from './Navbar/Nav_apps/annual';



function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		{/* <Route path='/' exact component={Home} /> */}
		<Route path='/about' component={About} />
		<Route path='/events' component={Events} />
		<Route path='/annual' component={AnnualReport} />
		<Route path='/blogs' component={Blogs} />
	</Routes>
	</Router>
);
}

export default App;

