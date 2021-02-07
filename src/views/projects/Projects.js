/** @format */

import React, { useContext, useState } from "react";
import FiltrByProjectCategory from "../../components/filters/FiltrByProjectCategory";
import PortfolioContext from "../../context";
import {
  ProjectCardDeck,
  CardImg,
  CardIcons,
  Cardwrapper,
  CardInner,
  FrontCard,
  BackCard,
  CardContent,
  CardHeader,
  CardBody,
  ProjectPageWrapper,
} from "./ProjectsStyles";
import { AiFillGithub } from "react-icons/ai";
import Flip from "react-reveal/Flip";

const Projects = () => {
  const value = useContext(PortfolioContext);
  const { selectedProjects, toggleIsFlipped } = value;

  return (
    <>
      <ProjectPageWrapper>
        <FiltrByProjectCategory />
        <ProjectCardDeck>
          {selectedProjects.map((project) => {
            const {
              projectName,
              projectImg,
              procjetTitle,
              gitLink,
              projectIcons,
              isFlipped,
              id,
            } = project;
            return (
              <Flip left>
                <Cardwrapper>
                  <CardInner
                    onClick={() => toggleIsFlipped(id)}
                    isFlipped={isFlipped}
                  >
                    <FrontCard>
                      <h2>{projectName}</h2>
                    </FrontCard>
                    <BackCard>
                      <CardContent>
                        <CardHeader>
                          <CardImg src={projectImg} alt={projectName} />
                          <h2>{projectName}</h2>
                        </CardHeader>
                        <CardBody>
                          <h3>{procjetTitle}</h3>
                        </CardBody>
                        <CardIcons>
                          {projectIcons.map((icon) => {
                            return icon;
                          })}
                          <a href={gitLink} target="_blank">
                            <AiFillGithub />
                          </a>
                        </CardIcons>
                      </CardContent>
                    </BackCard>
                  </CardInner>
                </Cardwrapper>
              </Flip>
            );
          })}
        </ProjectCardDeck>
      </ProjectPageWrapper>
    </>
  );
};

export default Projects;
