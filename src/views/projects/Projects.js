/** @format */

import React, { useContext } from "react";
import FiltrByProjectCategory from "../../components/filters/FiltrByProjectCategory";
import PortfolioContext from "../../context";
import {
  ProjectCardDeck,
  ProjectCard,
  CardImg,
  CardText,
  CardH2,
  CardIcons,
  CardStats,
  CardFooter,
} from "./ProjectsStyles";

const Projects = () => {
  const value = useContext(PortfolioContext);
  const { selectedProjects } = value;
  return (
    <>
      <FiltrByProjectCategory />
      <ProjectCardDeck>
        {selectedProjects.map((project) => {
          const {
            projectName,
            projectImg,
            procjetTitle,
            gitLink,
            projectIcons,
          } = project;
          return (
            <ProjectCard>
              <CardImg src={projectImg} />
              <CardText>
                <CardH2>{projectName}</CardH2>
                <CardIcons>
                  {console.log(projectIcons)}
                  {projectIcons.map((icon) => {
                    return icon;
                  })}
                </CardIcons>
              </CardText>
              <CardFooter href={gitLink}>{gitLink}</CardFooter>
            </ProjectCard>
          );
        })}
      </ProjectCardDeck>
    </>
  );
};

export default Projects;

{
  /* <ProjectCard>
<ProjectCardImg variant="top" src={projectImg} />
<ProjectCardBody>
  <ProjectCardTitle>{projectName}</ProjectCardTitle>
  <ProjectCardText>{procjetTitle}</ProjectCardText>
</ProjectCardBody>
<ProjectCardFooter>
  <small>{gitLink}</small>
</ProjectCardFooter>
</ProjectCard> */
}
