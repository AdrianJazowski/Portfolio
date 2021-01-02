/** @format */

import React from "react";
import {
  LeftAbouteMeDiv,
  RightAbouteMeDiv,
  AboutMeWrapper,
  Skills,
  SkillsIcons,
  AccordionH2,
  CardAccordion,
  CustomAccordion,
  ContainerForText,
  GridDiv,
  TextInGrid,
} from "./AboutMeStyles";
import { FaReact, FaJira, FaBitbucket, FaSlack } from "react-icons/fa";
import { DiJavascript, DiCss3, DiBootstrap, DiGitBranch } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { Accordion, Card } from "react-bootstrap";

const AboutMe = () => {
  return (
    <>
      <AboutMeWrapper>
        <LeftAbouteMeDiv>
          <GridDiv>
            <ContainerForText one>
              <TextInGrid>
                Cześć, ja jestem Adrian i skoro trafiłeś na tą strone to zapewne
                szukam pracy jak Junior Fronted Developer.
              </TextInGrid>
            </ContainerForText>
            <ContainerForText two>
              <TextInGrid>
                Kilka słow o mnie: Pochodze z okolic Krakowa, w wolnym czasie
                lubie grać w gry planszowe i programować.
              </TextInGrid>
            </ContainerForText>
            <ContainerForText three>
              <TextInGrid>
                Obecnie poszukuje pracy gdzie będe mógł rozpoczać swoją pierwsza
                prace jako Frontend. Rozważam prace zdalna jak i relokacje.
              </TextInGrid>
            </ContainerForText>
            <ContainerForText four>
              <TextInGrid>
                Zapraszam Cię to przejrzenia mojej strony gdzie możesz zobaczyć
                moje projekty oraz dowiedzieć się co potrafie.
              </TextInGrid>
            </ContainerForText>
          </GridDiv>
        </LeftAbouteMeDiv>
        <RightAbouteMeDiv>
          <CustomAccordion defaultActiveKey="0">
            <AccordionH2>Moje umiejętności</AccordionH2>
            <CardAccordion>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                FRONTEND
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Skills>
                    <SkillsIcons>
                      <FaReact />
                      <DiJavascript />
                      <SiRedux />
                      <DiCss3 />
                      <DiBootstrap />
                    </SkillsIcons>
                  </Skills>
                </Card.Body>
              </Accordion.Collapse>
            </CardAccordion>
            <CardAccordion>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                INNE
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <Skills>
                    <SkillsIcons>
                      <DiGitBranch />
                      <FaJira />
                      <FaBitbucket />
                      <FaSlack />
                    </SkillsIcons>
                    <h3>A ponadto:</h3>
                    <h4>
                      Znajomość RDW, Metodyka SCRUM, Wiedza o agile, obeznanie z
                      IDE, umiejętność znajdywania rozwiązań.
                    </h4>
                  </Skills>
                </Card.Body>
              </Accordion.Collapse>
            </CardAccordion>
          </CustomAccordion>
        </RightAbouteMeDiv>
      </AboutMeWrapper>
    </>
  );
};

export default AboutMe;
