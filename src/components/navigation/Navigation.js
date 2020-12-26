/** @format */

import React, { useContext } from "react";
import { BranInNav, CustomNav, NavMenuIcon } from "./NavigationStyles";
import { GiHamburgerMenu, GiCrossedSwords } from "react-icons/gi";
import PortfolioContext from "../../context";

const Navigation = () => {
  const value = useContext(PortfolioContext);
  const { handleNavIconToggle, navIconToggle } = value;
  return (
    <>
      <CustomNav>
        <BranInNav>Adrian Jazowski</BranInNav>
        <NavMenuIcon onClick={handleNavIconToggle}>
          {navIconToggle ? <GiCrossedSwords /> : <GiHamburgerMenu />}
        </NavMenuIcon>
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
