/** @format */

import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PortfolioContext from "./context";
import { routes } from "./routes/Routes";
import MainTemplate from "./templates/MainTemplate";
import AboutMe from "./views/about/AboutMe";
import Contact from "./views/contact/Contact";
import Home from "./views/home/Home";
import Projects from "./views/projects/Projects";

const App = () => {
  const [navIconToggle, setNavIconToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdownMenuToggle, setDropdownMenuToggle] = useState(false);

  const handleNavIconToggle = () => setNavIconToggle(!navIconToggle);
  const handleCloseMobileMenu = () => setNavIconToggle(false);
  const handleDropdownMenuToggle = () => setDropdownMenuToggle(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <BrowserRouter>
      <PortfolioContext.Provider
        value={{
          handleNavIconToggle,
          navIconToggle,
          handleCloseMobileMenu,
          dropdown,
          handleDropdownMenuToggle,
          dropdownMenuToggle,
          setDropdown,
          onMouseEnter,
          onMouseLeave,
        }}
      >
        <MainTemplate>
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route exact path={routes.aboutMe} component={AboutMe} />
            <Route exact path={routes.projects} component={Projects} />
            <Route exact path={routes.contact} component={Contact} />
          </Switch>
        </MainTemplate>
      </PortfolioContext.Provider>
    </BrowserRouter>
  );
};

export default App;
