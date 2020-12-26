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

  const handleNavIconToggle = () => setNavIconToggle(!navIconToggle);

  return (
    <BrowserRouter>
      <PortfolioContext.Provider value={{ handleNavIconToggle, navIconToggle }}>
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
