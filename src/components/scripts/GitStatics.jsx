import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import '../styles/gitStats.module.css'
import GitHubCalendar from 'react-github-calendar';


const GitStatics = () => {
            
  return (
    <>
        <Heading textAlign={'center'} m={'80px auto 50px auto'}>My Statistics</Heading>   
        <Flex flexDir={'column'} gap={'40px'} alignItems={'center'} >
                <Box ml={'400px'} className={'gitStats'}>
                    <Image id='github-stats-card' src='https://github-readme-stats.vercel.app/api/top-langs?username=skd0394&show_icons=true&locale=en&layout=compact' alt='localstats'/>
                </Box>
                
                <Box  ml={'400px'}>
                    <Image id='github-streak-stats' src='https://github-readme-streak-stats.herokuapp.com/?user=skd0394&' alt='localstats'/>
                </Box>
                <Box  mr={'400px'}  >
                    <Image id='github-top-langs' src='https://github-readme-stats.vercel.app/api/top-langs/?username=skd0394&layout=compact' alt='localstats'/>
                </Box>
        </Flex>
        <Flex m={'50px auto 40px auto'} flexDir={'column'} alignItems={'center'} gap={'40px'}>
            <Heading>My GitHub Calendar</Heading>
            <GitHubCalendar color={'aqua'} username="skd0394" />
        </Flex>
    </>
  )
}

export default GitStatics