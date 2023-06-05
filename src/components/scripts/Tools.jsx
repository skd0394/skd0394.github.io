import { Box, Grid, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const Tools = () => {
  return (
    <>
          {/* <Grid id='tools' textAlign={'center'} gap={'-200px'}> */}
            {/* <Heading h={'fit-content'}>Tools</Heading> */}
            {/* <Spacer mb={'40px'}/> */}
          {/* <Grid border={'1px solid white'} textAlign={'center'} gridTemplateColumns={['repeat(1,1fr)','repeat(2,1fr)','repeat(2,1fr)','repeat(2,1fr)']} gap={'20px'}> */}
            {/* <Grid><Image w={'100px'} h={['40px','60px','80px','100px']} src='https://img.icons8.com/color/256/visual-studio--v1.png' alt='css' /><Text fontSize={['small','small','normal','medium']} fontWeight={'bold '} >VS Code</Text></Grid> */}
            {/* <Grid><Image w={'100px'} h={['40px','60px','80px','100px']} src='https://dashboard.render.com/static/media/logo-redesign-02-word-dark.0811da26fe4b1f9a9b6c642d91bbcf73.svg' alt='js' /><Text fontSize={['small','small','normal','medium']} fontWeight={'bold '} >Render</Text></Grid> */}
            {/* <Grid><Image w={'100px'} h={['40px','60px','80px','100px']} src='https://img.icons8.com/plasticine/256/github-squared.png' alt='react' /><Text fontSize={['small','small','normal','medium']} fontWeight={'bold '} >GitHub</Text></Grid> */}
            {/* <Grid><Image w={'100px'} h={['40px','60px','80px','100px']} src='https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/256/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png' alt='ts' /><Text fontSize={['small','small','normal','medium']} fontWeight={'bold '} >Netlify</Text></Grid> */}
          {/* </Grid> */}
          {/* </Grid> */}

          <Grid id='tools' textAlign={'center'}>
          <Heading h={'fit-content'}>Tools</Heading>
          {/* <Spacer mb={'10px'}/>/ */}
          <Grid gridTemplateColumns={['repeat(1,1fr)','repeat(2,1fr)','repeat(2,1fr)','repeat(2,1fr)']} textAlign={'center'} gap={'20px'} mt={'-140px'}>
            <Grid justifyContent={'center'} className='skills-card' ><Box m={'auto'}  w={['40px','60px','80px','100px']} h={['40px','60px','80px','100px']}><Image className='skills-card-img' src='https://img.icons8.com/color/256/visual-studio--v1.png' alt='html' /></Box><Text className='skills-card-name' fontSize={['small','small','normal','medium']} fontWeight={'bold '} >VS Code</Text></Grid>
            <Grid justifyContent={'center'} className='skills-card' ><Box m={'auto'}  w={['40px','60px','80px','100px']} h={['40px','60px','80px','100px']}><Image className='skills-card-img' src='https://dashboard.render.com/static/media/logo-redesign-02-word-dark.0811da26fe4b1f9a9b6c642d91bbcf73.svg' alt='css' /></Box><Text className='skills-card-name' fontSize={['small','small','normal','medium']} fontWeight={'bold '} >Render</Text></Grid>
            <Grid justifyContent={'center'} className='skills-card' ><Box m={'auto'}  w={['40px','60px','80px','100px']} h={['40px','60px','80px','100px']}><Image className='skills-card-img' src='https://img.icons8.com/plasticine/256/github-squared.png' alt='js' /></Box><Text className='skills-card-name' fontSize={['small','small','normal','medium']} fontWeight={'bold '} >GitHub</Text></Grid>
            <Grid justifyContent={'center'} className='skills-card' ><Box m={'auto'}  w={['40px','60px','80px','100px']} h={['40px','60px','80px','100px']}><Image className='skills-card-img' src='https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/256/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png' alt='react' /></Box><Text className='skills-card-name' fontSize={['small','small','normal','medium']} fontWeight={'bold '} >Netlify</Text></Grid>
          </Grid>
        </Grid>
    </>
  )
}

export default Tools