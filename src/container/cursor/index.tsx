import React, { useEffect, useState } from 'react'
import { StyledCursor } from './style';

const AnimatedCursor = () => {
    const [cursorPositionX, setCursorPositionX] = useState<string>('');
    const [cursorPositionY, setCursorPositionY] = useState<string>('');
    
    useEffect(()=>{
        window.addEventListener('mousemove',(e)=>{
            setCursorPositionX(`${e.pageX-3}px`)
            setCursorPositionY(`${e.pageY-3}px`)
        })
        
        return (() => {
            window.removeEventListener('mousemove', () => {
                setCursorPositionX(``);
                setCursorPositionY(``);  
            });
        })
    },[])
  
    return (
    <StyledCursor cursorLeftPos={cursorPositionX} cursorTopPos={cursorPositionY}/>
  )
}

export default AnimatedCursor