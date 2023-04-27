import "./navbar.css";
import {HamburgerIcon} from '@chakra-ui/icons'
import React from 'react'
import Resume from "../downloads/Shivkant_Dubey_Resume.pdf"
// import {NavLink} from "react-router-dom"
import { Menu,MenuButton,MenuList,MenuItem,IconButton, Flex,Link } from "@chakra-ui/react";
import {FcAbout} from 'react-icons/fc'
import {GiSkills} from "react-icons/gi"
import {SiCodeproject} from "react-icons/si"
import {RiContactsFill} from "react-icons/ri"
import {ImDownload} from "react-icons/im"
import {HiHome} from 'react-icons/hi'
import { NavHashLink as NavLink } from "react-router-hash-link";
import ThemeToggler from "../components/ThemeToggler";
// import Projects from "../components/scripts/Projects";


const Navbar = () => {
  return (
    <Flex bgColor={'gray.400'} className="navbar" id={'nav-menu'}>
         <div id="name">Shivkant Dubey</div>
        <div className="options">
        
        <div className="nav-link home"><NavLink to="#home"><HiHome/>Home</NavLink></div>
        <div className="nav-link about"><NavLink to="#about"><FcAbout />About Me</NavLink></div>
        <div className="nav-link skills"><NavLink to="#skills"><GiSkills />Skills</NavLink></div>
        <div className="nav-link projects"><NavLink to="#projects"><SiCodeproject />Projects</NavLink></div>
        <div className="nav-link contact"><NavLink to="#contact"><RiContactsFill />Contacts</NavLink></div>
        {/* <div className="nav-link resume"><NavLink to="#resume-button-1"><RiContactsFill />Resume</NavLink></div> */}
        <div id={'resume-button-1'} onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1-mavXJADg6YAZ238dOZnevFlbx6RsWay/view?usp=share_link"
                  );
                }} className="nav-link resume"><a id='resume-link-1'  href={Resume} download={'Shivkant_Dubey_Resume'}><ImDownload/>Resume</a></div>
        {/* <Resume/> */}
        </div>
        <div id="ham_icon">
        <Menu>
                <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
            />
            <MenuList>
            <NavLink to="#aboutme"><MenuItem icon={<FcAbout />} >
                    About Me
                </MenuItem></NavLink>
                <NavLink to="#skills"> <MenuItem icon={<GiSkills />}>
                    Skills
                </MenuItem></NavLink>
                <NavLink to="#projects"> <MenuItem icon={<SiCodeproject />}>
                    Projects
                </MenuItem></NavLink>
                <NavLink to="/contacts"><MenuItem icon={<RiContactsFill />}>
                    Contacts
                </MenuItem></NavLink>
                <a href={Resume} download={'Shivkant_Dubey_Resume'} ><MenuItem icon={<ImDownload/>}>
                    Resume
                </MenuItem></a>
            </MenuList>
        </Menu>
            
        </div>
        <ThemeToggler/>
    </Flex>
  )
}

export default Navbar