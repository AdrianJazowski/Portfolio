/** @format */

import React, { useContext } from "react";
import {
  BrandInNav,
  CustomNav,
  NavMenuIcon,
  NavMenuUl,
  NavMenuLi,
  LinkInNav,
  ProjectsCaretInNav,
} from "./NavigationStyles";
import { GiHamburgerMenu, GiCrossedSwords } from "react-icons/gi";
import PortfolioContext from "../../context";
import { routes } from "../../routes/Routes";
import Dropdown from "../dropdown/Dropdown";

const Navigation = () => {
  const value = useContext(PortfolioContext);
  const {
    handleNavIconToggle,
    navIconToggle,
    handleCloseMobileMenu,
    dropdown,
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
        {/* <ul className={click ? 'nav-menu active: nav-menu></>ul} */}
        <NavMenuUl navIconToggle={navIconToggle}>
          {/* to jest to samo co powyzej */}
          <NavMenuLi>
            <LinkInNav to={routes.home} onClick={handleCloseMobileMenu}>
              Strona główna
            </LinkInNav>
          </NavMenuLi>

          <NavMenuLi>
            <LinkInNav to={routes.aboutMe} onClick={handleCloseMobileMenu}>
              O mnie
            </LinkInNav>
          </NavMenuLi>
          <NavMenuLi onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <LinkInNav to={routes.projects} onClick={handleCloseMobileMenu}>
              Projekty
              <ProjectsCaretInNav />
            </LinkInNav>
            {dropdown && <Dropdown />}
          </NavMenuLi>
          <NavMenuLi>
            <LinkInNav to={routes.contact} onClick={handleCloseMobileMenu}>
              Kontakt
            </LinkInNav>
          </NavMenuLi>
        </NavMenuUl>
      </CustomNav>
    </>
  );
};

export default Navigation;

// <CustomNavbar expand="md" bg="dark">
// <Link exact to={routes.home}>
//   Adrian Jazowski
// </Link>
// <CustomNav>
//   <Link exact to={routes.home}>
//     Strona główna
//   </Link>
//   <Link to={routes.aboutMe}>O mnie</Link>
//   <Link to={routes.projects}>Moje projekty</Link>
//   <Link to={routes.contact}>Kontakt</Link>
// </CustomNav>
// </CustomNavbar>
