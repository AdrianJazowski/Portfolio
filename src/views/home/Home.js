/** @format */

import React from "react";
import { routes } from "../../routes/Routes";
import {
  HomeWrapper,
  LeftHomeDiv,
  HomeH1,
  Content,
  HomeH2,
  LinkInHome,
  TextInLink,
} from "./HomeStyles";
import AboutMe from "../about/AboutMe";
import Projects from "../projects/Projects";
import CustomJumbotron from "../../components/jumbotron/CustomJumbotron";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <LeftHomeDiv>
          <Content>
            <HomeH1>Front-End Developer</HomeH1>
            <HomeH2>Adrian Jazowski</HomeH2>
            <LinkInHome contact to={routes.projects}>
              <TextInLink>Projekty</TextInLink>
            </LinkInHome>
            <LinkInHome aboutMe to={routes.contact}>
              <TextInLink> Kontakt</TextInLink>
            </LinkInHome>
          </Content>
        </LeftHomeDiv>
      </HomeWrapper>
      <CustomJumbotron>kilka słow o mnie</CustomJumbotron>
      <AboutMe />
      <CustomJumbotron>Projekty</CustomJumbotron>
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
