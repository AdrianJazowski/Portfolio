/** @format */

import React, { useContext } from "react";
import {
  BrandInNav,
  CustomNav,
  NavMenuIcon,
  NavMenuUl,
  NavMenuLi,
  LinkInNav,
} from "./NavigationStyles";
import { GiHamburgerMenu, GiCrossedSwords } from "react-icons/gi";
import PortfolioContext from "../../context";
import AboutMe from "../../views/about/AboutMe";

const Navigation = () => {
  const value = useContext(PortfolioContext);
  const {
    handleNavIconToggle,
    navIconToggle,
    handleCloseMobileMenu,
    onMouseEnter,
    onMouseLeave,
  } = value;
  return (
    <>
      <CustomNav>
        <BrandInNav>Adrian Jazowski</BrandInNav>
        <NavMenuIcon onClick={handleNavIconToggle}>
          {navIconToggle ? (
            <GiCrossedSwords style={{ color: "white" }} />
          ) : (
            <GiHamburgerMenu style={{ color: "white" }} />
          )}
        </NavMenuIcon>

        <NavMenuUl navIconToggle={navIconToggle}>
          <NavMenuLi>
            <LinkInNav onClick={handleCloseMobileMenu}>Strona główna</LinkInNav>
          </NavMenuLi>

          <NavMenuLi>
            <LinkInNav href="#aboutMe" onClick={handleCloseMobileMenu}>
              O mnie
            </LinkInNav>
          </NavMenuLi>
          <NavMenuLi onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <LinkInNav onClick={handleCloseMobileMenu}>Projekty</LinkInNav>
          </NavMenuLi>
          <NavMenuLi>
            <LinkInNav onClick={handleCloseMobileMenu}>Kontakt</LinkInNav>
          </NavMenuLi>
        </NavMenuUl>
      </CustomNav>
    </>
  );
};

export default Navigation;
