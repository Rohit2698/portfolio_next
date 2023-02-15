import React from 'react'
import {motion} from "framer-motion"
import MyDocument from './MyDocument'
import ME from "../assets/mylogo.png";
import { Header, HeaderContainer, MotionDivMe, ScrollDownLink, StyledImage } from '../container/header/style';

const MyInfo = () => {
  return (
    <Header id="home"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:0.2}}
    >
      <HeaderContainer className='container'>
        <motion.h5
        initial={{y:-100, opacity:0}}
        animate={{y:0, opacity:1}}
        exit={{y:0}}
        transition={{duration:1}}
        >Hello I'm</motion.h5>
        <motion.h1
        initial={{opacity:0, scale:4}}
        animate={{opacity:1, scale:1}}
        exit={{}}
        transition={{duration:1,delay:0.5}}
        >Rohit Thakur</motion.h1>
        <motion.h5 className="text-light"
        initial={{opacity:0, scale:0.1}}
        animate={{opacity:1, scale:1}}
        exit={{}}
        transition={{duration:1,delay:1}}
        
        >Front-End Developer</motion.h5>
        <MyDocument />
        <MotionDivMe className="me"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{}}
        transition={{duration:1,delay:2.5}}
        >
          <StyledImage src={ME} alt="me" />
        </MotionDivMe>
        <ScrollDownLink href="#contact" className="scroll_down">Scroll Down</ScrollDownLink>
      </HeaderContainer>
    </Header>

  )
}

export default MyInfo;