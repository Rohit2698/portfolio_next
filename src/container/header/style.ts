import { keyframes } from '@emotion/react';
import Styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const HeaderContainer = Styled.div`
    text-align: center;
    height: 100%;
    position: relative;
`;

export const ScrollDownLink = Styled.a`
    position: absolute;
    right: -2.3rem;
    bottom: 5rem;
    transform: rotate(90deg);
    font-weight: 300;
    font-size: 0.9rem;
`;

export const gradientMovement = keyframes`
    0%{
        background-position:left;
    }50%{
        background-position: right;
    }
    100%{
        background-position:left;
    }
`;
export const MotionDivMe = Styled(motion.div)`
    width: 20rem;
    height: 20rem;
    position: relative;
    left: calc(50% - 10rem);
    margin-top: 4rem;
    border-radius: 50%;
    overflow: hidden;
    padding: 2rem 0;
    background: linear-gradient(120deg,transparent, var(--color-primary), transparent);
    animation: ${gradientMovement} 6s infinite ease-in-out;
    background-size: 250%;
    
`;


export const StyledImage  = Styled.img`
    display: block;
    width: 100%;
    object-fit: ;
    display: flex;
    justify-content: center;
    transform: scale(0.7);
    position: relative;
    position: relative;
    bottom: 50px;
`;

export const Header = Styled(motion.header)`
    min-height: 100vh;
    padding-top: 7rem;
    overflow: hidden;
`;

export const StyledDocumentContainer = Styled.div`
    margin-top: 2.5rem;
    display: flex;
    gap: 1.2rem;
    justify-content: center;
`;