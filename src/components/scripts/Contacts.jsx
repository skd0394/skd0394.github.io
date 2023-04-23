import { Box, Flex, Grid, Heading, Input, Link, Text } from '@chakra-ui/react'
import {MdEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {TfiGithub} from "react-icons/tfi"
import {BsFillTelephoneFill} from "react-icons/bs"
import {} from "react-icons/"
import React from 'react'

const Contacts = () => {
  return (
    <>
        <Box textAlign={'center'} id='contact' >
          <Heading m={'50px auto auto auto'}>Contact Me</Heading>
          <Flex justifyContent={'center'} alignItems={'center'} gap={'40px'} >
                <Flex flexDir={'column'} gap={'20px'} textAlign={'left'} >
                  <Flex flexDir={'column'} ga-="10px" >
                      <Text fontWeight={'bold'} >Get in Touch</Text>
                      <Text w='300px' >Reach Out for any Problems, Questions, Hiring, Discussions etc....</Text>
                  </Flex>
                  <Flex flexDir={'column'} gap={'5px'} >
                      <Link href='*'>
                        <Flex id='contact-email' gap="5px"  >
                          <MdEmail/>
                          <Text>shivkd1908@gmail.com</Text>
                        </Flex>
                      </Link>
                      <Link href='*'>
                        <Flex gap="5px" >
                          <BsLinkedin/>
                          <Text>LinkedIn</Text>
                        </Flex>
                      </Link>
                      <Link href='*'>
                        <Flex gap="5px">
                          <TfiGithub/>
                          <Text>GitHub</Text>
                        </Flex>
                      </Link>
                      <Flex gap="5px" id='contact-phone' >
                        <BsFillTelephoneFill/>
                        <Text>+91 8542000179</Text>
                      </Flex>
                  </Flex>
                </Flex>
                <Grid gridTemplateColumns={'repeat(1,1fr)'} gap={'7px'} mt={'100px'}  >
                  <Text fontWeight={'bold'} fontSize={'medium'} >Message Me</Text>
                      <Input type={'text'} placeholder='Enter Name' required />
                      <Input type={'Number'} placeholder='Enter Mobile Number' required  />
                      <Input type={'email'} placeholder='Enter Email' required  />
                      <Input type={'text'} placeholder='Any Description' h='200px' />
                </Grid>
        </Flex>
      </Box>
    </>
  )
}

export default Contacts