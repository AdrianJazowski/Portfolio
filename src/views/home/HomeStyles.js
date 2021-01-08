/** @format */

import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import bgPhoto from "../../assets/bg.jpg";

export const HomeWrapper = styled.div`
  text-align: center;
  width: 100vw;
  height: 90vh;
  background-image: url(${bgPhoto});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -10;
`;
export const LeftHomeDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -5;
`;
export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;
export const HomeH1 = styled.h1`
  font-size: 6rem;
  font-weight: 800;
  color: #fff;
`;
export const HomeH2 = styled.h2`
  margin-top: rem;
  font-weight: 600;
  color: #fff;
`;
export const LinkInHome = styled(Link)`
  height: 50px;
  width: 155px;
  background-color: rgba(21, 101, 192, 0.1);
  color: #fff;
  border: 2px solid rgba(15, 193, 107, 0.6);
  position: absolute;
  margin-top: 6rem;
  transform: translate(-225%, -50%);
  ${({ aboutMe }) =>
    aboutMe &&
    css`
      transform: translate(125%, -50%);
    `}
  &:hover {
    background-color: rgba(15, 193, 107, 0.9);
  }
`;
export const TextInLink = styled.span`
  position: absolute;
  transform: translate(-50%, 50%);
`;
// export const DivForImg = styled.div``;
// export const HomeImg = styled.img`
//   position: absolute;
//   top: 40%;
//   left: 50%;
//   margin-right: -50%;
//   transform: translate(-50%, -50%);
//   width: 350px;
//   height: 300px;
// `;
