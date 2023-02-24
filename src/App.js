import React from 'react';
// import './App.css';
import Navbar from './Navbar/Navbar';
// import './Navbar/navbar.css';
import ThemeToggler from './components/ThemeToggler';
import './global.css'
import AboutMe from './components/scripts/AboutMe';
import Skills from './components/scripts/Skills';
import Projects from './components/scripts/Projects';
import GitStatics from './components/scripts/GitStatics';
function App() {
	// const handleMoves=(ev)=>{
	// 	ev.target.style.transform=`translateY${ev.clientY-25}px`;
	// 	ev.target.style.transform=`translateX${ev.clientX-25}px`;
	// }
return (
	<div id='parent'  >
		{/* <div id="foo" class="ball" ></div> */}
		<Navbar/>
		<AboutMe/>
		<GitStatics/>
		<Skills/>
		<Projects/>
		{/* <Contacts */}
		
	</div>
);
}

export default App;

