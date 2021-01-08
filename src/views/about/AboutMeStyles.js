/** @format */

import { Card, Accordion } from "react-bootstrap";
import styled, { css } from "styled-components";

export const AboutMeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
  background: linear-gradient(
    41deg,
    rgba(238, 174, 202, 0.19371498599439774) 0%,
    rgba(148, 187, 233, 0.30015756302521013) 100%
  );
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
  svg {
    color: rgba(15, 193, 107, 0.5);
    &:hover {
      color: rgba(15, 193, 107, 0.9);
    }
  }
`;
export const CardAccordion = styled(Card)`
  backdrop-filter: blur(40px);
  border: solid 2px transparent;
  background-clip: padding-box;
  box-shadow: 10px 10px 10px rgba(46, 54, 68, 0.48);
  background: transparent;
`;

export const CustomAccordion = styled(Accordion)`
  width: 100%;
  align-self: center;
  backdrop-filter: blur(40px);
  border: solid 2px transparent;
  background-clip: padding-box;
  box-shadow: 10px 10px 10px rgba(46, 54, 68, 0.48);
`;
export const ContainerForText = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3em;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(40px);
  border: solid 2px transparent;
  background-clip: padding-box;
  align-items: center;
  text-align: center;
  box-shadow: 10px 10px 10px rgba(46, 54, 68, 0.48);
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
  font-size: 18px;
`;
export const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 25% 25% 25% 25%;
`;
