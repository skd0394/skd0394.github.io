import { Box, Divider, Flex, Grid, Heading, Icon, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import Tools from './Tools'
import {FaComments,FaUsers,FaLightbulb,FaSyncAlt,FaRegClock,FaChalkboardTeacher} from "react-icons/fa"

const Skills = () => {
  return (
    <>
      <Flex justifyContent={'center'} alignItems={'flex-start'} gap={'80px'}>
        <Grid id='skills' textAlign={'center'}>
          <Heading>Skills</Heading>
          {/* <Spacer mb={'10px'}/>/ */}
          <Grid gridTemplateColumns={['repeat(1,1fr)','repeat(3,1fr)','repeat(4,1fr)','repeat(4,1fr)']} textAlign={'center'} gap={'20px'} mt={'20px'}>
            <Grid justifyContent={'center'} className='skills-card' ><Box m={'auto'} w={['40px','60px','80px','100px']} h={['40px','60px','80px','100px']}><Image className='skills-card-img' src='https://img.icons8.com/color/256/html-5.png' alt='html' /></Box><Text className='skills-card-name' fontSize={['small','small','normal','medium']} fontWeight={'bold '} >HTML</Text></Grid>
            <Grid justifyContent={'center'} className='skills-card' ><Box m={'auto'} w={['40px','60px','80px','100px']} h={['40px','60px','80px','100px']}><Image className='skills-card-img' src='https://img.icons8.com/stickers/256/css3.png' alt='css' /></Box><Text className='skills-card-name' fontSize={['small','small','normal','medium']} fontWeight={'bold '} >CSS</Text></Grid>
            <Grid justifyContent={'center'} className='skills-card' ><Box m={'auto'} w={['40px','60px','80px','100px']} h={['40px','60px','80px','100px']}><Image className='skills-card-img' src='https://img.icons8.com/arcade/256/javascript.png' alt='js' /></Box><Text className='skills-card-name' fontSize={['small','small','normal','medium']} fontWeight={'bold '} >JAVASCRIPT</Text></Grid>
            <Grid justifyContent={'center'} className='skills-card' ><Box m={'auto'} w={['40px','60px','80px','100px']} h={['40px','60px','80px','100px']}><Image className='skills-card-img' src='https://img.icons8.com/bubbles/256/react.png' alt='react' /></Box><Text className='skills-card-name' fontSize={['small','small','normal','medium']} fontWeight={'bold '} >React</Text></Grid>
            <Grid justifyContent={'center'} className='skills-card' ><Box m={'auto'} w={['40px','60px','80px','100px']} h={['40px','60px','80px','100px']}><Image className='skills-card-img' src='https://img.icons8.com/fluency/256/typescript.png' alt='ts' /></Box><Text className='skills-card-name' fontSize={['small','small','normal','medium']} fontWeight={'bold '} >TypesScript</Text></Grid>
            <Grid justifyContent={'center'} className='skills-card' ><Box m={'auto'} w={['40px','60px','80px','100px']} h={['40px','60px','80px','100px']}><Image className='skills-card-img' src='https://img.icons8.com/color/256/redux.png' alt='redux' /></Box><Text className='skills-card-name' fontSize={['small','small','normal','medium']} fontWeight={'bold '} >Redux</Text></Grid>
            <Grid justifyContent={'center'} className='skills-card' ><Box m={'auto'} w={['40px','60px','80px','100px']} h={['40px','60px','80px','100px']}><Image className='skills-card-img' src='https://img.icons8.com/color/256/nextjs.png' alt='nextjs' /></Box><Text className='skills-card-name' fontSize={['small','small','normal','medium']} fontWeight={'bold '} >Next.js</Text></Grid>
            <Grid justifyContent={'center'} className='skills-card' ><Box m={'auto'} w={['40px','60px','80px','100px']} h={['40px','60px','80px','100px']}><Image className='skills-card-img' src='https://img.icons8.com/color/256/nodejs.png' alt='css' /></Box><Text className='skills-card-name' fontSize={['small','small','normal','medium']} fontWeight={'bold '} >Node.js</Text></Grid>
            <Grid justifyContent={'center'} className='skills-card' ><Box m={'auto'} w={['40px','60px','80px','100px']} h={['40px','60px','80px','100px']}><Image className='skills-card-img' src='https://img.icons8.com/officel/256/express-js.png' alt='css' /></Box><Text className='skills-card-name' fontSize={['small','small','normal','medium']} fontWeight={'bold '} >Express.js</Text></Grid>
            <Grid justifyContent={'center'} className='skills-card' ><Box m={'auto'} w={['40px','60px','80px','100px']} h={['40px','60px','80px','100px']}><Image className='skills-card-img' src='https://img.icons8.com/color/256/mongodb.png' alt='css' /></Box><Text className='skills-card-name' fontSize={['small','small','normal','medium']} fontWeight={'bold '} >MongoDB</Text></Grid>
          </Grid>
          <Heading mt={'60px'} fontSize={['xl','2xl','3xl','4xl']}>Soft Skills</Heading>
          <Grid gridTemplateColumns={['repeat(1,1fr)','repeat(3,1fr)','repeat(3,1fr)','repeat(3,1fr)']} textAlign={'center'} gap={'20px'} mt={'20px'} mb={'20px'}>
            <Grid justifyContent={'center'} className='skills-card' ><Box m={'auto'} w={['40px','60px','80px','100px']} h={['40px','60px','80px','100px']} display={'flex'} alignItems={'center'} justifyContent={'center'}><Icon as={FaComments} boxSize={['30px','40px','50px','60px']} /></Box><Text className='skills-card-name' fontSize={['small','small','normal','medium']} fontWeight={'bold '} >Communication</Text></Grid>
            <Grid justifyContent={'center'} className='skills-card' ><Box m={'auto'} w={['40px','60px','80px','100px']} h={['40px','60px','80px','100px']} display={'flex'} alignItems={'center'} justifyContent={'center'}><Icon as={FaUsers} boxSize={['30px','40px','50px','60px']} /></Box><Text className='skills-card-name' fontSize={['small','small','normal','medium']} fontWeight={'bold '} >Teamwork</Text></Grid>
            <Grid justifyContent={'center'} className='skills-card' ><Box m={'auto'} w={['40px','60px','80px','100px']} h={['40px','60px','80px','100px']} display={'flex'} alignItems={'center'} justifyContent={'center'}><Icon as={FaLightbulb} boxSize={['30px','40px','50px','60px']} /></Box><Text className='skills-card-name' fontSize={['small','small','normal','medium']} fontWeight={'bold '} >Problem Solving</Text></Grid>
            <Grid justifyContent={'center'} className='skills-card' ><Box m={'auto'} w={['40px','60px','80px','100px']} h={['40px','60px','80px','100px']} display={'flex'} alignItems={'center'} justifyContent={'center'}><Icon as={FaSyncAlt} boxSize={['30px','40px','50px','60px']} /></Box><Text className='skills-card-name' fontSize={['small','small','normal','medium']} fontWeight={'bold '} >Adaptability</Text></Grid>
            <Grid justifyContent={'center'} className='skills-card' ><Box m={'auto'} w={['40px','60px','80px','100px']} h={['40px','60px','80px','100px']} display={'flex'} alignItems={'center'} justifyContent={'center'}><Icon as={FaRegClock} boxSize={['30px','40px','50px','60px']} /></Box><Text className='skills-card-name' fontSize={['small','small','normal','medium']} fontWeight={'bold '} >Time Management</Text></Grid>
            <Grid justifyContent={'center'} className='skills-card' ><Box m={'auto'} w={['40px','60px','80px','100px']} h={['40px','60px','80px','100px']} display={'flex'} alignItems={'center'} justifyContent={'center'}><Icon as={FaChalkboardTeacher} boxSize={['30px','40px','50px','60px']} /></Box><Text className='skills-card-name' fontSize={['small','small','normal','medium']} fontWeight={'bold '} >Leadership</Text></Grid>
          </Grid>
        </Grid>
        <Tools/>
      </Flex>

    </>
  )
}

export default Skills