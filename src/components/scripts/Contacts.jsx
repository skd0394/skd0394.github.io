import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react'
import {MdEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {TfiGithub} from "react-icons/tfi"
import {BsFillTelephoneFill} from "react-icons/bs"
import {} from "react-icons/"
import React from 'react'

const Contacts = () => {
  return (
    <>
      <Box id={'contact'}  >
          <Heading mt={'50px'}>Contact Me</Heading>
          <Flex>
              <Flex flexDir={'column'}>
                  <Flex flexDir={'column'} >
                      <Text fontWeight={'bold'} >Get in Touch</Text>
                      <Text>Reach Out for any Problems, Questions, Hiring, Discussions etc....</Text>
                  </Flex>
                  <Flex>
                      
                  </Flex> 
              </Flex>
              <Flex flexDir={'column'}>
                  <Link href='*'>
                    <Flex>
                      <MdEmail/>
                      <Text>shivkd1908@gmail.com</Text>
                    </Flex>
                  </Link>
                  <Link href='*'>
                    <Flex>
                      <BsLinkedin/>
                      <Text>LinkedIn</Text>
                    </Flex>
                  </Link>
                  <Link href='*'>
                    <Flex>
                      <TfiGithub/>
                      <Text>GitHub</Text>
                    </Flex>
                  </Link>
                  <Flex>
                    <BsFillTelephoneFill/>
                    <Text>+91 8542000179</Text>
                  </Flex>
              </Flex>
          </Flex>
      </Box>
    </>
  )
}

export default Contacts