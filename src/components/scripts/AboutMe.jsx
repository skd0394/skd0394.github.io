import React from 'react'
import { Text,Box, Flex, HStack,Icon, Link, Divider, Grid, Spacer, Heading, Button, Image } from '@chakra-ui/react';
import Resume from "../../downloads/Shivkant-Dubey-Resume.pdf"
import styles from  "../styles/aboutme.module.css"
import {FaGithub,FaGoogle,FaInstagram,FaLinkedinIn} from "react-icons/fa"
import TypeWriterEffect from "react-typewriter-effect"
import {MdDocumentScanner} from "react-icons/md"
import {ImDownload} from "react-icons/im"

const AboutMe = () => {

  return (
    <>
    <Box id='about' m='80px auto 40px auto'>
      <Box textAlign='center' mb={'40px'}>
        <Heading>About Me</Heading>
      </Box>
    <Flex w='90%' display={['grid','grid','flex','flex']} justifyContent={['center','center','space-evenly','space-evenly']} gap={["10px","10px","0px","0px"]} m={["auto","auto","auto","auto"]}>
			<Flex flexDir={'column'} w={['40%','35%','30%','22%']} alignItems={'center'} justifyContent={'space-around'} m={['auto','auto','auto','auto']}> 
				<Image w={'100%'}  borderRadius={'50%'} className='home-img' mb={'40px'} src="https://avatars.githubusercontent.com/u/107461174?s=400&u=c8072d4e15a3869a29398b63a6e3be5b5f3edb40&v=4" alt='profile_pic'/>
        <a id={'resume-button-2'} href={Resume} download={'Shivkant_Dubey_Resume'}>
          <Button fontSize={['x-small','smaller','small','normal']} h={['30px','40px','50px','50px']} w={['60px','80px','100px','125px']} gap='5px' onClick={() => {
                      window.open(
                        "https://drive.google.com/file/d/1-mavXJADg6YAZ238dOZnevFlbx6RsWay/view?usp=share_link"
                      );
                    }}><ImDownload/>Resume
          </Button>
        </a>
			</Flex>
		<Grid textAlign={'center'} w={["80%","70%","60%",'50%']} m={['auto','auto','','']} mt={'0px'}>
      <Text m={'auto'} display={'flex'} gap='5px' fontSize={['2xl','3xl','4xl','5xl']} fontWeight={'500'}>Hi, <span id={styles.hand}>🤚</span> I'm</Text><Text
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize={['2xl','3xl','4xl','5xl']}
  fontWeight='extrabold'

  id='user-detail-name'
>
  Shivkant Dubey
</Text>
  <Box m={'auto'} fontSize={['1em','1.5em','2em','2.5em']}>
    <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          // color: '',
          fontWeight: 500,
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
  </Box>
      
      <Text w={'70%'} fontSize={['x-small','small','normal','medium']} m={'auto'} mt={'20px'} mb={'30px'} id='user-detail-intro' textAlign="justify" >
      <b>Logical</b> and <b>result-driven</b> full-stack
      developer dedicated to building
      user-focused websites. An analytical problem
      solver with a <b>calm</b> and <b>focused</b> mindset.
      Technically Proficient in React, Javascript, HTML, CSS etc...
			</Text>
      <HStack spacing={['30px','40px','50px','60px']} justifyContent={'center'} ml={['0px','10px','20px','30px']}>
        <Link id='contact-github' href='https://github.com/skd0394' alt={'git_hub'} isExternal><Icon as={FaGithub} boxSize={['30px','60px','70px','60px']}  /></Link>
        <Link id='contact-linkedin' href='https://www.linkedin.com/in/shiv-kant-dubey-94334b245/' alt={'git_hub'} isExternal><Icon as={FaLinkedinIn} boxSize={['30px','50px','50px','60px']}  /></Link>
        <Link id='contact-Insta' href='https://www.instagram.com/sh_iv6317/' alt={'git_hub'} isExternal><Icon as={FaInstagram} boxSize={['30px','60px','70px','60px']}  /></Link>
        <Link id='contact-email' href='https://github.com/skd0394' alt={'git_hub'} isExternal ><Icon as={MdDocumentScanner} boxSize={['30px','60px','70px','60px']}  /></Link>
      </HStack>
    </Grid> 
	</Flex>
  </Box>
  <Divider mt={'50px'} />
  </>
  )
}

export default AboutMe