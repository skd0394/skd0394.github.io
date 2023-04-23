import { Box, Divider, Flex, Grid, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import Tools from './Tools'

const Skills = () => {
  return (
    <>
        <Grid id='skills' m={'80px auto 100px auto'} justifyContent={'center'} textAlign='center'>
          <Heading>Skills</Heading>
          <Spacer mb={'40px'}/>
          <Flex justifyContent={'center'}>
            <Grid className='skills-card' >
            <Image className='skills-card-img'  w={'100px'} h='100px' src='https://img.icons8.com/color/256/html-5.png' alt='html' />
            <Text className='skills-card-name' fontSize={'medium'} fontWeight={'bold '} >HTML</Text>
            </Grid>
            <Grid className='skills-card'><Image className='skills-card-img' w={'100px'} h='100px' src='https://img.icons8.com/stickers/256/css3.png' alt='css' /><Text className='skills-card-name' fontSize={'medium'} fontWeight={'bold '} >CSS</Text></Grid>
            <Grid className='skills-card'><Image className='skills-card-img' w={'100px'} h='100px' src='https://img.icons8.com/arcade/256/javascript.png' alt='js' /><Text className='skills-card-name' fontSize={'medium'} fontWeight={'bold '} >JAVASCRIPT</Text></Grid>
            <Grid className='skills-card'><Image className='skills-card-img' w={'100px'} h='100px' src='https://img.icons8.com/bubbles/256/react.png' alt='react' /><Text className='skills-card-name' fontSize={'medium'} fontWeight={'bold '} >React</Text></Grid>
            <Grid className='skills-card'><Image className='skills-card-img' w={'100px'} h='100px' src='https://img.icons8.com/fluency/256/typescript.png' alt='ts' /><Text className='skills-card-name' fontSize={'medium'} fontWeight={'bold '} >TypesScript</Text></Grid>
            <Grid className='skills-card'><Image className='skills-card-img' w={'100px'} h='100px' src='https://img.icons8.com/color/256/redux.png' alt='redux' /><Text className='skills-card-name' fontSize={'medium'} fontWeight={'bold '} >Redux</Text></Grid>
            <Grid className='skills-card'><Image className='skills-card-img' w={'100px'} h='100px' src='https://static-00.iconduck.com/assets.00/next-js-icon-256x256-6j7ddke7.png' alt='redux' /><Text className='skills-card-name' fontSize={'medium'} fontWeight={'bold '} >Next.js</Text></Grid>
          </Flex>
          <Flex m={'auto'} gap={'8px'}>
          <Grid className='skills-card'><Image className='skills-card-img' w={'100px'} h='100px' src='https://img.icons8.com/color/256/nodejs.png' alt='css' /><Text className='skills-card-name' fontSize={'medium'} fontWeight={'bold '} >Node.js</Text></Grid>
          <Grid className='skills-card'><Image className='skills-card-img' w={'100px'} h='100px' src='https://img.icons8.com/officel/256/express-js.png' alt='css' /><Text className='skills-card-name' fontSize={'medium'} fontWeight={'bold '} >Express.js</Text></Grid>
          <Grid className='skills-card'><Image className='skills-card-img' w={'100px'} h='100px' src='https://img.icons8.com/color/256/mongodb.png' alt='css' /><Text className='skills-card-name' fontSize={'medium'} fontWeight={'bold '} >MongoDB</Text></Grid>
          </Flex>
        </Grid>
        <Tools/>
    </>
  )
}

export default Skills