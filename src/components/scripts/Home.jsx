import React from 'react'
import Navbar from '../../Navbar/Navbar'
import AboutMe from './AboutMe'
import GitStatics from './GitStatics'
import Projects from './Projects'
import Skills from './Skills'
import Contacts from "./Contacts"
import '../../global.css'

const Home = () => {
  return (
    <div id={'home'}>
      <Navbar/>
      <AboutMe/>
      <GitStatics/>
      <Skills/>
      <Projects/>
      <Contacts/>
    </div>
  )
}

export default Home