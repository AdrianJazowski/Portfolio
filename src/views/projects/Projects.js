/** @format */

import React, { useContext } from "react";
import { CardDeck, Card } from "react-bootstrap";
import FiltrByProjectCategory from "../../components/filters/FiltrByProjectCategory";
import PortfolioContext from "../../context";

const Projects = () => {
  const value = useContext(PortfolioContext);
  const { selectedProjects } = value;
  return (
    <>
      <FiltrByProjectCategory />
      <CardDeck>
        {selectedProjects.map((project) => {
          const { projectName, projectImg, procjetTitle, gitLink } = project;
          return (
            <Card>
              <Card.Img variant="top" src={projectImg} />
              <Card.Body>
                <Card.Title>{projectName}</Card.Title>
                <Card.Text>{procjetTitle}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{gitLink}</small>
              </Card.Footer>
            </Card>
          );
        })}
      </CardDeck>
    </>
  );
};

export default Projects;
