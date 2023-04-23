import { Box, Button, Divider, Flex, Grid, Heading, Image, Link, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const Projects = () => {
  return (
    <>
        <Divider orientation='horizontal' mb={'100px'}/>
         <Flex id='projects' flexDir={'column'}  alignItems={'center'} w={'80%'} m={'auto'} mb={'100px'}>
          <Heading mb={'100px'}>Featured Projects</Heading>
              <Flex gap={'20px'}  m={'auto'} className='project-card' >
                  <Image h={'300px'} w={'800px'} src='https://i.ibb.co/kgF231Z/Screenshot-20230122-164229.png' alt=''/>
                  <Flex flexDir={'column'} mt={'-20px'}>
                      <Text className="project-title" fontSize={'2xl'} fontWeight={'medium'}>Apple Clone</Text>
                      <Text className="project-description">Apple, Inc. engages in the design, manufacture, and sale of smartphones, personal computers, tablets, wearables and accessories, and other variety of related services.</Text>
                      <Flex className='project-tech-stack' flexDir={'column'}>
                      <Flex flexDir={'column'}>
                        <Text fontSize={'medium'} fontWeight={'medium'}> FrontEnd Tech Stacks</Text>
                        <Flex gap={'15px'}>
                        <Image h={'40px'} w={'40px'} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png' alt='React'/>     
                        <Image h={'40px'} w={'40px'} src='https://img.icons8.com/color/256/redux.png' alt='redux'/>
                        </Flex>
                      </Flex>
                      <Flex flexDir={'column'}>
                        <Text fontSize={'medium'} fontWeight={'medium'}> BackEnd Tech Stacks</Text>
                        <Flex gap={'15px'}>
                        <Image h={'40px'} w={'40px'} src='https://img.icons8.com/color/256/nodejs.png' alt='node.js'/>
                        <Image h={'40px'} w={'40px'} src='https://img.icons8.com/ios/256/express-js.png' alt='express'/>
                        <Image h={'40px'} w={'40px'} src='https://img.icons8.com/color/256/mongodb.png' alt='Mongodb'/>
                        </Flex>
                      </Flex>
                      </Flex>
                      <Flex gap={'10px'} pt={'20px'} m={'auto'}>
                      <Link className='project-deployed-link' href='https://blueapple.vercel.app/' isExternal ><Button h={'40px'}>Check it Out!</Button></Link>
                      <Link className='project-github-link' href='https://github.com/skd0394/Apple-Clone' isExternal><Button h={'40px'}>Code Base</Button></Link>
                      </Flex>
                  </Flex>
              </Flex>

              {/* 2nd project */}
              <Flex gap={'20px'} mt={'70px'} className='project-card'>
              <Flex flexDir={'column'} ml={'10px'}>
                      <Text className="project-title" fontSize={'2xl'} fontWeight={'medium'}>BlueMercury Clone</Text>
                      <Text className="project-description">Bluemercury is a skincare product Ecommerce website which gives you wide varieties of branded skincare , makeup care and many more products.</Text>
                      <Flex className='project-tech-stack' flexDir={'column'}>
                      <Flex flexDir={'column'}>
                        <Text fontSize={'medium'} fontWeight={'medium'}> FrontEnd Tech Stacks</Text>
                        <Flex gap={'5px'}>
                        <Image h={'40px'} w={'40px'} src='https://img.icons8.com/arcade/256/javascript.png' alt='JS'/>
                        <Image h={'40px'} w={'40px'} src='https://img.icons8.com/stickers/256/css3.png' alt='css'/>
                        <Image h={'40px'} w={'4 0px'} src='https://img.icons8.com/color/256/html-5.png' alt='HTML'/>
                        </Flex>
                      </Flex>
                      <Flex flexDir={'column'}>
                        <Text fontSize={'medium'} fontWeight={'medium'}> BackEnd Tech Stacks</Text>
                        <Flex gap={'5px'}>
                        <Image h={'40px'} w={'40px'} src='https://img.icons8.com/pulsar-color/256/json.png' alt='node.js'/>
                        </Flex>
                      </Flex>
                      </Flex>
                      <Flex gap={'10px'} mt={'20px'} m={'auto'}>
                      <Link className='project-deployed-link' href='https://monumental-cassata-c694c6.netlify.app/' isExternal><Button h={'40px'}>Check it Out!</Button></Link>
                      <Link className='project-github-link' href='https://github.com/skd0394/Bluemercury.com' isExternal><Button h={'40px'}>Code Base</Button></Link>
                      </Flex>
                  </Flex>
                  <Image h={'300px'} w={'800px'} src='https://user-images.githubusercontent.com/105901300/213781027-096ba501-b793-4774-98e4-535036182944.png' alt=''/>
              </Flex>

              {/* 3rd project */}

              <Flex gap={'20px'} mt={'80px'} className='project-card'>
                  <Image h={'300px'} w={'800px'} src='https://i.ibb.co/9cSfCRj/2023-02-21.png' alt=''/>
                  <Flex flexDir={'column'} mt={'-20px'}>
                      <Text className="project-title" fontSize={'2xl'} fontWeight={'medium'}>Airtable Clone</Text>
                      <Text className="project-description">This is a group project, Airtable is a low-code platform for building collaborative apps. Customize your workflow, collaborate, and achieve goals</Text>
                      <Flex className='project-tech-stack' flexDir={'column'}>
                      <Flex flexDir={'column'}>
                        <Text fontSize={'medium'} fontWeight={'medium'}> FrontEnd Tech Stacks</Text>
                        <Flex gap={'5px'}>
                        <Image h={'40px'} w={'40px'} src='https://img.icons8.com/arcade/256/javascript.png' alt='JS'/>
                        <Image h={'40px'} w={'40px'} src='https://img.icons8.com/stickers/256/css3.png' alt='css'/>
                        <Image h={'40px'} w={'4 0px'} src='https://img.icons8.com/color/256/html-5.png' alt='HTML'/>
                        </Flex>
                      </Flex>
                      <Flex flexDir={'column'}>
                        <Text fontSize={'medium'} fontWeight={'medium'}> BackEnd Tech Stacks</Text>
                        <Flex gap={'5px'}>
                        <Image h={'40px'} w={'40px'} src='https://img.icons8.com/pulsar-color/256/json.png' alt='json'/>
                        </Flex>
                      </Flex>
                      </Flex>
                      <Flex gap={'10px'} mt={'20px'} m={'auto'}>
                      <Link className='project-deployed-link' href='https://airtable.indspunk.com/' isExternal><Button h={'40px'}>Check it Out!</Button></Link>
                      <Link className='project-github-link' href='https://github.com/skd0394/Airtable-Clone' isExternal><Button h={'40px'}>Code Base</Button></Link>
                      </Flex>
                  </Flex>
              </Flex>

              {/* 4th project */}
              <Flex gap={'20px'} mt={'70px'} className='project-card'>
              <Flex flexDir={'column'} ml={'10px'}>
                      <Text  className="project-title" fontSize={'2xl'} fontWeight={'medium'}>BlueMercury Clone</Text>
                      <Text className="project-description">Bluemercury is a skincare product Ecommerce website which gives you wide varieties of branded skincare , makeup care and many more products.</Text>
                      <Flex className='project-tech-stack' flexDir={'column'}>
                      <Flex flexDir={'column'}>
                        <Text fontSize={'medium'} fontWeight={'medium'}> FrontEnd Tech Stacks</Text>
                        <Flex gap={'5px'}>
                        <Image h={'40px'} w={'40px'} src='https://img.icons8.com/arcade/256/javascript.png' alt='JS'/>
                        <Image h={'40px'} w={'40px'} src='https://img.icons8.com/stickers/256/css3.png' alt='css'/>
                        <Image h={'40px'} w={'4 0px'} src='https://img.icons8.com/color/256/html-5.png' alt='HTML'/>
                        </Flex>
                      </Flex>
                      <Flex flexDir={'column'}>
                        <Text fontSize={'medium'} fontWeight={'medium'}> BackEnd Tech Stacks</Text>
                        <Flex gap={'5px'}>
                        <Image h={'40px'} w={'40px'} src='https://img.icons8.com/pulsar-color/256/json.png' alt='node.js'/>
                        </Flex>
                      </Flex>
                      </Flex>
                      <Flex gap={'10px'} mt={'20px'} m={'auto'}>
                      <Link className='project-deployed-link' href='https://monumental-cassata-c694c6.netlify.app/' isExternal><Button h={'40px'}>Check it Out!</Button></Link>
                      <Link className="project-github-link" href='https://github.com/skd0394/Bluemercury.com' isExternal><Button h={'40px'}>Code Base</Button></Link>
                      </Flex>
                  </Flex>
                  <Image h={'300px'} w={'800px'} src='https://user-images.githubusercontent.com/105901300/213781027-096ba501-b793-4774-98e4-535036182944.png' alt=''/>
              </Flex>
              
        </Flex> 
    </>
  )
}

export default Projects