import React from 'react'
import { Text,Box, Flex, HStack,Icon, Link, Divider, Grid, Spacer, Button } from '@chakra-ui/react';
import '../../global.css'
import styles from  "../styles/aboutme.module.css"
import {FaGithub,FaGoogle,FaInstagram,FaLinkedinIn} from "react-icons/fa"
import TypeWriterEffect from "react-typewriter-effect"
import {MdDocumentScanner} from "react-icons/md"
import {ImDownload} from "react-icons/im"

const AboutMe = () => {
  return (
    <>
    <Flex id='about' justifyContent={'center'} mt='100px' className={styles.about}  >
		<div id={styles.profile_card}>
			<div id='profile_pic'>
				<img className='home-img' src="https://avatars.githubusercontent.com/u/107461174?s=400&u=c8072d4e15a3869a29398b63a6e3be5b5f3edb40&v=4" alt='profile_pic'/>
			</div>
      <a id='resume-button-2' href="/downloads/Shivkant_Dubey_Resume.pdf" download={'Shivkant_Dubey_Resume'} target={'_blank'}><Button mt={20} gap={'5px'}> <ImDownload/> Resume </Button></a>
		</div>
		<Grid w={'50%'} mt={'0px'} className={styles.aboutmetext} >
      <Text display={'flex'} gap='5px' fontSize={'6xl'} fontWeight={'500'}>Hi, <span id={styles.hand}>🤚</span> I'm</Text><Text
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='6xl'
  fontWeight='extrabold'

  id='user-detail-name'
>
  Shivkant Dubey
</Text>
      <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          // color: '',
          fontWeight: 500,
          fontSize: '2.5em',
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          "Full Stack Web Developer"
        ]}
        multiTextDelay={1000}
        typeSpeed={100}
        multiTextLoop
      />
      <Text w={'70%'} mt={'20px'} mb={'30px'} id='user-detail-intro' >
      <b>Logical</b> and <b>result-driven</b> full-stack
      developer dedicated to building
      user-focused websites. Technically
      proficient and analytical problem
      solver with a <b>calm</b> and <b>focused</b> mindset.
			</Text>
      <HStack spacing={'24'} ml={'30px'}>
        <Link id='contact-github' href='https://github.com/skd0394' alt={'git_hub'} isExternal><Icon as={FaGithub} boxSize='50'  /></Link>
        <Link id='contact-linkedin' href='https://www.linkedin.com/in/shiv-kant-dubey-94334b245/' alt={'git_hub'} isExternal><Icon as={FaLinkedinIn} boxSize='50'  /></Link>
        <Link id='contact-Insta' href='https://www.instagram.com/sh_iv6317/' alt={'git_hub'} isExternal><Icon as={FaInstagram} boxSize='50'  /></Link>
        <Link id='contact-email' href='https://github.com/skd0394' alt={'git_hub'} isExternal ><Icon as={MdDocumentScanner} boxSize='50'  /></Link>
      </HStack>
    </Grid> 
	</Flex>
  <Divider mt={'50px'} />
  </>
  )
}

export default AboutMe