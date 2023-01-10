import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Contacts from '../components/scripts/Contacts';
import Projects from '../components/scripts/Projects';
import Resume from '../components/scripts/Resume';
import AboutMe from '../components/scripts/AboutMe';
import Skills from '../components/scripts/Skills';
const PortRoutes = () => {
  return (
    <div>
        <Routes>
			<Route path='/aboutme' element={<AboutMe/>}/>
			<Route path='/skills' element={<Skills/>}/>
			<Route path='/projects' element={<Projects/>}/>
			<Route path='/contacts' element={<Contacts/>}/>
			<Route path='/resume' element={<Resume/>}/>
		</Routes>
    </div>
  )
}

export default PortRoutes