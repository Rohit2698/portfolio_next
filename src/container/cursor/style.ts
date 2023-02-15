import { keyframes } from "@emotion/react";
import Styled from "@emotion/styled";

type CursorProps = {
    cursorLeftPos: string;
    cursorTopPos: string;
}

const cursor1AfterMove = keyframes`
    from {
    scale: 1.3;
    opacity: 1;
  }
  to {
    scale: 1;
    opacity: 0.2;
  }
`;

export const StyledCursor = Styled.div<CursorProps>`
    top: ${(props) => props.cursorTopPos};
    left: ${(props) => props.cursorLeftPos};
    z-index: 10;
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 100%;
    // transition: all 0.05s;
    transition-timing-function: linear;
        // animation: cursor1Move 0.5s infinite alternate;
    pointer-events: none;
    background-color: white;

    ::after {
        content: "";
  padding: 15px;
  border: 1px solid rgb(127, 242, 255);
  top: -13px;
  left: -14px;
  position: absolute;
  border-radius: 100%;
  animation: ${cursor1AfterMove} 0.5s infinite alternate;
    }
    @media screen and (max-width:1024px) {
  
    display: none;
  
}
`;
