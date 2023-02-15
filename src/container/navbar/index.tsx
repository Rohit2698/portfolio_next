import React, { useState } from 'react'
import {FaHome} from 'react-icons/fa'
import {ImUser} from 'react-icons/im'
import {AiFillAppstore} from 'react-icons/ai'
import {RiMessage3Fill} from 'react-icons/ri'
import { StyledLink, StyledNav } from './style';

function Navbar() {

  const [activeNav, setActiveNav] = useState('#home')

  return (
    <StyledNav>
      <StyledLink href="#home" onClick={()=>setActiveNav("#home")} isactive={activeNav==='#home' ? 1 : 0}><FaHome/></StyledLink>
      <StyledLink href="#about" onClick={()=>setActiveNav("#about")} isactive={activeNav==='#about' ? 1 : 0}><ImUser/></StyledLink>
      <StyledLink href="#websites" onClick={()=>setActiveNav("#websites")} isactive={activeNav==='#websites' ? 1 : 0}><AiFillAppstore/></StyledLink>
      <StyledLink href="#contact" onClick={()=>setActiveNav("#contact")} isactive={activeNav==='#contact' ? 1 : 0}><RiMessage3Fill/></StyledLink>
    </StyledNav>
  )
}

export default Navbar