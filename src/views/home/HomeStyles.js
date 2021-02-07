/** @format */

import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import bgPhoto from "../../assets/bg.jpg";
import { FaArrowCircleUp } from "react-icons/fa";

export const HomeWrapper = styled.div`
  text-align: center;
  width: 100vw;
  height: 90vh;
  background-image: url(${bgPhoto});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -10;

  @media screen and (max-width: 1025px) {
    background-size: cover;
  }
  @media screen and (max-width: 420px) {
  }
`;
export const LeftHomeDiv = styled.div`
  width: 100vw;
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
  @media screen and (max-width: 1025px) {
    font-size: 5rem;
    font-weight: 600;
  }
  @media screen and (max-width: 420px) {
    font-size: 2rem;
    font-weight: 600;
  }
`;
export const HomeH2 = styled.h2`
  margin-top: rem;
  font-weight: 600;
  color: #fff;
  @media screen and (max-width: 1025px) {
    font-size: 5rem;
  }
  @media screen and (max-width: 420px) {
    font-size: 1.5rem;
  }
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
    color: white;
  }
  @media screen and (max-width: 1025px) {
    height: 100px;
    width: 250px;
    transform: translate(-130%, -50%);
    ${({ aboutMe }) =>
      aboutMe &&
      css`
        transform: translate(30%, -50%);
      `}
  }
  @media screen and (max-width: 420px) {
    display: none;
  }
`;
export const TextInLink = styled.span`
  position: absolute;
  transform: translate(-50%, 50%);
  @media screen and (max-width: 1025px) {
    font-size: 3rem;
    font-weight: 400;
    transform: translate(-50%, 10%);
  }
`;

export const Arrow = styled(FaArrowCircleUp)`
  position: fixed;
  z-index: 999;
  bottom: 5%;
  right: 5%;
  font-size: 48px;
  color: rgba(15, 193, 107, 0.9);
  cursor: pointer;
  @media screen and (max-width: 1025px) {
  }
  @media screen and (max-width: 420px) {
    right: 10%;
  }
`;
