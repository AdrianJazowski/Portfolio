/** @format */

import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PortfolioContext from "./context";
import { routes } from "./routes/Routes";
import MainTemplate from "./templates/MainTemplate";
import AboutMe from "./views/about/AboutMe";
import Contact from "./views/contact/Contact";
import Home from "./views/home/Home";
import Projects from "./views/projects/Projects";
import { projectsData } from "./views/projects/projectsData";

const App = () => {
  const [projects, setProjects] = useState(projectsData);
  const [selectedProjects, setSelectedProjects] = useState(projectsData);
  const [navIconToggle, setNavIconToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdownMenuToggle, setDropdownMenuToggle] = useState(false);
  const [projectCategoryFilter, setProjectCategoryFilter] = useState("all");

  const handleProjectCategory = (e) => {
    setProjectCategoryFilter(e.target.id);
  };

  const FiltrByProjectCategory = () => {
    let tempCategory = [...projects];
    if (projectCategoryFilter !== "all") {
      tempCategory = tempCategory.filter((category) => {
        return category.typeProject === projectCategoryFilter;
      });
    }
    setSelectedProjects([...tempCategory]);
  };

  useEffect(() => {
    FiltrByProjectCategory();
  }, [projectCategoryFilter]);

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
          projects,
          setProjects,
          projectCategoryFilter,
          setProjectCategoryFilter,
          handleProjectCategory,
          selectedProjects,
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
