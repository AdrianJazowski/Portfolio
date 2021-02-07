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
import { Link } from "react-router-dom";

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
          <a href="https://github.com/AdrianJazowski" target="_blank">
            <AiFillGithub />
          </a>
          <Link>
            <AiFillMail />
          </Link>
        </FooterIcons>
      </FooterMedia>
      <FooterNavigation>
        <FooterLink>Strona główna</FooterLink>
        <FooterLink> O mnie</FooterLink>
        <FooterLink> Projekty</FooterLink>
        <FooterLink>Kontakt</FooterLink>
      </FooterNavigation>
      <FooterP>Prawa autorskie © {data} | Adrian Jazowski</FooterP>
    </FooterStyles>
  );
};

export default Footer;
