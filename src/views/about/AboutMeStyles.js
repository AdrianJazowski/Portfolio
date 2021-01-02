/** @format */

import { Card, Accordion } from "react-bootstrap";
import styled, { css } from "styled-components";

export const AboutMeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
`;
export const LeftAbouteMeDiv = styled.div`
  display: flex;
  flex: 1;
`;
export const RightAbouteMeDiv = styled.div`
  display: flex;
  flex: 1;
`;
export const Skills = styled.div`
  margin: auto;
  text-align: center;
  width: 100%;
`;
export const AccordionH2 = styled.h2`
  text-align: center;
  padding-bottom: 24px;
  margin: 10px;
`;

export const SkillsIcons = styled.div`
  font-size: 100px;
  margin: 15px;
  /* &:svg {
    color: yellow;
  } */
`;
export const CardAccordion = styled(Card)`
  background: transparent;
`;

export const CustomAccordion = styled(Accordion)`
  width: 100%;
  align-self: center;
`;
export const ContainerForText = styled.div`
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  padding: 3em;
  border-radius: 3em;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(40px);
  border: solid 2px transparent;
  background-clip: padding-box;
  box-shadow: 10px 10px 10px rgba(46, 54, 68, 0.08);
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
export const TextInGrid = styled.h5``;
export const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 25% 25% 25% 25%;
`;
