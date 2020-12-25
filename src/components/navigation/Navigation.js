/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes/Routes";
import { CustomNav, CustomNavbar } from "./NavigationStyles";

const Navigation = () => {
  return (
    <>
      <CustomNavbar bg="dark" variant="dark">
        <Link exact to={routes.home}>
          Adrian Jazowski
        </Link>
        <CustomNav>
          <Link exact to={routes.home}>
            Strona główna
          </Link>
          <Link to={routes.aboutMe}>O mnie</Link>
          <Link to={routes.projects}>Moje projekty</Link>
          <Link to={routes.contact}>Kontakt</Link>
        </CustomNav>
      </CustomNavbar>
    </>
  );
};

export default Navigation;
