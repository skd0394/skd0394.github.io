import { Button } from '@chakra-ui/react'
import React from 'react'
import {ImDownload} from "react-icons/im"

const Resume = () => {
  return (
    <div id='resume-button-1'>
      <a  href="/downloads/Shivkant_Dubey_Resume.pdf" download={'Shivkant_Dubey_Resume'} target={'_blank'}><Button mt={20} gap={'5px'}> <ImDownload/> Resume </Button></a>
    </div>
  )
}

export default Resume