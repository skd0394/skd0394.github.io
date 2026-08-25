import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import '../styles/gitStats.module.css'
import GitHubCalendar from 'react-github-calendar';


const GitStatics = () => {

  return (
    <Flex m={'80px auto 40px auto'} flexDir={'column'} alignItems={'center'} gap={'40px'} >
        <Heading m='auto'>My GitHub Calendar</Heading>
        <GitHubCalendar color={'green'} username="skd0394" />
    </Flex>
  )
}

export default GitStatics