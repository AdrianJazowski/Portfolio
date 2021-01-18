/** @format */

import React, { useContext, useState } from "react";
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
  Cardwrapper,
  CardInner,
  FrontCard,
  BackCard,
  CardContent,
  CardHeader,
  CardBody,
  ProjectPageWrapper,
} from "./ProjectsStyles";

const Projects = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const value = useContext(PortfolioContext);
  const { selectedProjects } = value;

  const handleIsFlipped = () => {
    setIsFlipped(!isFlipped);
  };
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
            } = project;
            return (
              <Cardwrapper>
                <CardInner onClick={handleIsFlipped} isFlipped={isFlipped}>
                  <FrontCard>
                    <h2>{projectName}</h2>
                  </FrontCard>
                  <BackCard>
                    <CardContent>
                      <CardHeader>
                        <CardImg src={projectImg} alt={projectName} />
                        <h2>{projectName}s</h2>
                      </CardHeader>
                      <CardBody>
                        <h3>{procjetTitle}</h3>
                      </CardBody>
                      <CardIcons>
                        {console.log(projectIcons)}
                        {projectIcons.map((icon) => {
                          return icon;
                        })}
                      </CardIcons>
                    </CardContent>
                  </BackCard>
                </CardInner>
              </Cardwrapper>
            );
          })}
        </ProjectCardDeck>
      </ProjectPageWrapper>
    </>
  );
};

export default Projects;

{
  /* <ProjectCard>
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
</ProjectCard> */
}
