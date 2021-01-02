/** @format */

import React from "react";
import { routes } from "../../routes/Routes";
import Photo from "../../assets/homeImg.png";
import {
  HomeWrapper,
  LeftHomeDiv,
  RightHomeDiv,
  HomeH1,
  LinkInHome,
  DivForImg,
  HomeImg,
} from "./HomeStyles";
import AboutMe from "../about/AboutMe";
import Projects from "../projects/Projects";

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <LeftHomeDiv>
          <HomeH1>
            Cześć,
            <br /> mam na imię Adrian
            <br />i jestem <br />
            Junior Frontend Developerem
          </HomeH1>
          <LinkInHome to={routes.contact}>Kontakt</LinkInHome>
        </LeftHomeDiv>
        <RightHomeDiv>
          <DivForImg>
            <HomeImg src={Photo}></HomeImg>
          </DivForImg>
        </RightHomeDiv>
      </HomeWrapper>
      <AboutMe />
      <Projects />
    </>
  );
};

export default Home;
