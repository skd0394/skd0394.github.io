import { Box, Divider, Flex, Grid, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const Skills = () => {
  return (
    <>
        <Grid id='skills' m={'80px auto 100px auto'} justifyContent={'center'} textAlign='center'>
          <Heading>Skills</Heading>
          <Spacer mb={'40px'}/>
          <Flex justifyContent={'center'}>
            <Grid>
            <Image w={'100px'} h='100px' src='https://img.icons8.com/color/256/html-5.png' alt='html' />
            <Text fontSize={'medium'} fontWeight={'bold '} >HTML</Text>
            </Grid>
            <Grid><Image w={'100px'} h='100px' src='https://img.icons8.com/stickers/256/css3.png' alt='css' /><Text fontSize={'medium'} fontWeight={'bold '} >CSS</Text></Grid>
            <Grid><Image w={'100px'} h='100px' src='https://img.icons8.com/arcade/256/javascript.png' alt='js' /><Text fontSize={'medium'} fontWeight={'bold '} >JAVASCRIPT</Text></Grid>
            <Grid><Image w={'100px'} h='100px' src='https://img.icons8.com/bubbles/256/react.png' alt='react' /><Text fontSize={'medium'} fontWeight={'bold '} >React</Text></Grid>
            <Grid><Image w={'100px'} h='100px' src='https://img.icons8.com/fluency/256/typescript.png' alt='ts' /><Text fontSize={'medium'} fontWeight={'bold '} >TypesScript</Text></Grid>
            <Grid><Image w={'100px'} h='100px' src='https://img.icons8.com/color/256/redux.png' alt='redux' /><Text fontSize={'medium'} fontWeight={'bold '} >Redux</Text></Grid>
            <Grid><Image w={'100px'} h='100px' src='https://static-00.iconduck.com/assets.00/next-js-icon-256x256-6j7ddke7.png' alt='redux' /><Text fontSize={'medium'} fontWeight={'bold '} >Next.js</Text></Grid>
          </Flex>
        </Grid>
    </>
  )
}

export default Skills