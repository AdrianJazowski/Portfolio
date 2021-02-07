/** @format */

import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PortfolioContext from "./context";
import MainTemplate from "./templates/MainTemplate";
import Home from "./views/home/Home";
import { projectsData } from "./data/projectsData";

const App = () => {
  const [projects, setProjects] = useState([...projectsData]);
  const [selectedProjects, setSelectedProjects] = useState([...projectsData]);
  const [navIconToggle, setNavIconToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdownMenuToggle, setDropdownMenuToggle] = useState(false);
  const [projectCategoryFilter, setProjectCategoryFilter] = useState("all");

  const handleProjectCategory = (e) => {
    setProjectCategoryFilter(e.target.value);
  };

  const toggleIsFlipped = (projectId) => {
    const flippedProjects = selectedProjects.map((project) => {
      if (project.id === projectId) {
        project.isFlipped = !project.isFlipped;
      }
      return project;
    });

    setSelectedProjects([...flippedProjects]);
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
          projectCategoryFilter,
          handleProjectCategory,
          selectedProjects,
          toggleIsFlipped,
        }}
      >
        <MainTemplate>
          <Home />
        </MainTemplate>
      </PortfolioContext.Provider>
    </BrowserRouter>
  );
};

export default App;
