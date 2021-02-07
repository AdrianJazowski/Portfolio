/** @format */

import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";

export const CustomNav = styled.nav`
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;
export const BrandInNav = styled(Link)`
  color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  &:hover {
    color: rgba(15, 193, 107, 0.9);

    @media screen and (max-width: 960px) {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(25%, 50%);
    }
  }
`;
export const NavMenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const NavMenuUl = styled.ul`
  margin: 0;
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: end;
  z-index: 100;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;

    ${({ navIconToggle }) =>
      navIconToggle &&
      css`
        background: #242222;
        left: 0;
        opacity: 1;
        transition: all 0.5s ease;
        z-index: 1;
      `}
  }
`;
export const NavMenuLi = styled.li`
  display: flex;
  align-items: center;
  height: 80px;
`;
export const LinkInNav = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  &:hover {
    color: rgba(15, 193, 107, 0.9);
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      background-color: #1888ff;
      border-radius: 0;
    }
  }
`;
export const ProjectsCaretInNav = styled(AiFillCaretDown)`
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
