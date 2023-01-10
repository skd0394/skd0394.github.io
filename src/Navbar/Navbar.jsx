import "./navbar.css";
import {HamburgerIcon} from '@chakra-ui/icons'
import React from 'react'
import {NavLink} from "react-router-dom"
import { Menu,MenuButton,MenuList,MenuItem,IconButton } from "@chakra-ui/react";
import {FcAbout} from 'react-icons/fc'
import {GiSkills} from "react-icons/gi"
import {SiCodeproject} from "react-icons/si"
import {RiContactsFill} from "react-icons/ri"
import {ImDownload} from "react-icons/im"
import {HiHome} from 'react-icons/hi'


const Navbar = () => {
  return (
    <div className="navbar">
         <div id="name">Shivkant Dubey</div>
        <div className="options">
        
        <div><NavLink to="/"><HiHome/>Home</NavLink></div>
        <div><NavLink to="/aboutme"><FcAbout />About Me</NavLink></div>
        <div><NavLink to="/skills"><GiSkills />Skills</NavLink></div>
        <div><NavLink to="/projects"><SiCodeproject />Projects</NavLink></div>
        <div><NavLink to="/contacts"><RiContactsFill />Contacts</NavLink></div>
        <div><NavLink to="/resume"><ImDownload/>Resume</NavLink></div>
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
            <NavLink to="/aboutme"><MenuItem icon={<FcAbout />} >
                    About Me
                </MenuItem></NavLink>
                <NavLink to="/skills"> <MenuItem icon={<GiSkills />}>
                    Skills
                </MenuItem></NavLink>
                <NavLink to="/projects"> <MenuItem icon={<SiCodeproject />}>
                    Projects
                </MenuItem></NavLink>
                <NavLink to="/contacts"><MenuItem icon={<RiContactsFill />}>
                    Contacts
                </MenuItem></NavLink>
                <NavLink to="/resume"><MenuItem icon={<ImDownload/>}>
                    Resume
                </MenuItem></NavLink>
            </MenuList>
        </Menu>
            
        </div>
        
    </div>
  )
}

export default Navbar