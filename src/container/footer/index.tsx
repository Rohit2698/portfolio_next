import React from "react";
import { ImGithub, ImInstagram, ImLinkedin } from "react-icons/im";
import { FooterContainer, FooterCopyrightContainer, FooterSocial, PeraLinks } from "./style";

const Footer = () => {
  return (
    <FooterContainer>
    <PeraLinks className='peralinks'>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#websites">Websites</a></li>
      <li><a href="#contact">Contact</a></li>
    </PeraLinks>
    <FooterSocial>
      <a href="https://github.com/Rohit2698" target={"_blank"}><ImGithub/></a>
      <a href="https://www.linkedin.com/in/rohit-thakur-535769185/" target={"_blank"}><ImLinkedin/></a>
      <a href="https://www.instagram.com/rohitthakur09/" target={"_blank"}><ImInstagram/></a>
    </FooterSocial>
    <FooterCopyrightContainer>
      <small>&copy; Rohit Thakur. All rights reserved</small>
    </FooterCopyrightContainer>
  </FooterContainer>
  );
};

export default Footer;
