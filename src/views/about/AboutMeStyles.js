/** @format */

import { Card, Accordion } from "react-bootstrap";
import styled, { css } from "styled-components";
import cardReverse from "../../assets/cardReverse.jpg";

export const AboutMeWrapper = styled.div`
  display: block;
  height: 120vh;
`;
export const LeftAbouteMeDiv = styled.div`
  width: 80%;
  height: 60vh;
  display: flex;
  margin: auto;
`;
export const RightAbouteMeDiv = styled.div`
  width: 80%;
  height: 60vh;
  display: flex;
  margin: auto;
`;
export const Skills = styled.div`
  margin: auto;
  text-align: center;
  width: 100%;
`;
export const AboutMeH2 = styled.h2`
  color: #fff;
  text-align: center;
  padding-bottom: 24px;
  margin: 10px;
`;

export const SkillsIcons = styled.div`
  font-size: 100px;
  margin: 15px;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  svg {
    color: rgba(15, 193, 107, 0.5);
    &:hover {
      color: rgba(15, 193, 107, 0.9);
    }
  }
`;

export const ContainerForText = styled.div`
  display: flex;
  /* background-image: url(${cardReverse}); */
  background-color: rgba(15, 193, 107, 0.1);
  border-radius: 3em;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(5px);
  border: solid 2px transparent;
  background-clip: padding-box;
  align-items: center;
  text-align: center;
  box-shadow: 0px 0px 15px 10px rgb(15 193 107 / 50%);
  ${({ one }) =>
    one &&
    css`
      grid-column: 1/2;
      grid-row: 1/2;
    `}
  ${({ two }) =>
    two &&
    css`
      grid-column: 2/3;
      grid-row: 2/3;
    `}
    ${({ three }) =>
    three &&
    css`
      grid-column: 1/2;
      grid-row: 3/4;
    `}
    ${({ four }) =>
    four &&
    css`
      grid-column: 2/3;
      grid-row: 4/5;
    `}
`;
export const TextInGrid = styled.h5`
  padding: 0 12px;
  font-size: 18px;
  color: white;
`;
export const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 25% 25% 25% 25%;
`;

export const IconContainer = styled.div`
  width: 20%;
  p {
    font-size: 22px;
    color: #fff;
  }
`;
