/** @format */

import React, { useState } from "react";
import {
  HomeWrapper,
  LeftHomeDiv,
  HomeH1,
  Content,
  HomeH2,
  LinkInHome,
  TextInLink,
  Arrow,
} from "./HomeStyles";
import AboutMe from "../about/AboutMe";
import Projects from "../projects/Projects";
import CustomJumbotron from "../../components/jumbotron/CustomJumbotron";
import Footer from "../../components/footer/Footer";
import { animateScroll } from "react-scroll";
import ContactForm from "../contact/Contact";

const Home = () => {
  const [isGoToTopBtnVisible, setIsGoToTopBtnVisible] = useState(false);

  const showAndHideGoToTopBtn = () => {
    if (!isGoToTopBtnVisible && window.pageYOffset > 300) {
      setIsGoToTopBtnVisible(true);
    } else if (isGoToTopBtnVisible && window.pageYOffset <= 300) {
      setIsGoToTopBtnVisible(false);
    }
  };

  window.addEventListener("scroll", showAndHideGoToTopBtn);

  return (
    <>
      {isGoToTopBtnVisible ? (
        <Arrow onClick={() => animateScroll.scrollToTop()}>go top</Arrow>
      ) : null}

      <HomeWrapper>
        <LeftHomeDiv>
          <Content>
            <HomeH1>Front-End Developer</HomeH1>
            <HomeH2>Adrian Jazowski</HomeH2>
            <LinkInHome aboutMe>
              <TextInLink>Projekty</TextInLink>
            </LinkInHome>
            <LinkInHome>
              <TextInLink> Kontakt</TextInLink>
            </LinkInHome>
          </Content>
        </LeftHomeDiv>
      </HomeWrapper>
      <CustomJumbotron>Sekcja o mnie </CustomJumbotron>
      <AboutMe />
      <CustomJumbotron>Projekty</CustomJumbotron>
      <Projects />
      <CustomJumbotron>Formularz kontaktowy</CustomJumbotron>
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
