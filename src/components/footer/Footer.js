/** @format */

import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import {
  FooterH2,
  FooterIcons,
  FooterMedia,
  FooterStyles,
  FooterNavigation,
  FooterLink,
  FooterP,
} from "./FooterStyles";
import { routes } from "../../routes/Routes";

const Footer = () => {
  const data = new Date().getFullYear();
  return (
    <FooterStyles>
      <FooterMedia>
        <FooterH2>Social Media</FooterH2>
        <FooterIcons>
          <a
            href="https://www.linkedin.com/in/adrian-jazowski/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
          <AiFillGithub />
          <AiFillMail />
        </FooterIcons>
      </FooterMedia>
      <FooterNavigation>
        <FooterLink to={routes.home}>Strona główna</FooterLink>
        <FooterLink to={routes.aboutMe}>O mnie</FooterLink>
        <FooterLink to={routes.projects}>Projekty</FooterLink>
        <FooterLink to={routes.contact}>Kontakt</FooterLink>
      </FooterNavigation>
      <FooterP>Prawa autorskie © {data} | Adrian Jazowski</FooterP>
    </FooterStyles>
  );
};

export default Footer;
