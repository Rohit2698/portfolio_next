import React from 'react'
import {motion} from "framer-motion"
import { StyledDocumentContainer } from '../container/header/style'
import { CV_LINK } from '../constant/siteconstant'

const MyDocument = () => {
  return (
    <StyledDocumentContainer>
        <motion.a href={CV_LINK} target={"_blank"} className='btn'
        initial={{opacity:0, x:-100}}
        animate={{opacity:1, x:0}}
        exit={{}}
        transition={{duration:1, delay:1.5}}
        >View CV</motion.a>
        <motion.a href="#contact" className='btn btn-primary'
        initial={{opacity:0, x:100}}
        animate={{opacity:1, x:0}}
        exit={{}}
        transition={{duration:1, delay:1.5}}
        
        >Contact</motion.a>
    </StyledDocumentContainer>
  )
}

export default MyDocument