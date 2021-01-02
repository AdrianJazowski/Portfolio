/** @format */

import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const LeftHomeDiv = styled.div`
  position: relative;
  flex: 1;
  height: 90vh;
`;
export const RightHomeDiv = styled.div`
  position: relative;
  flex: 1;
  height: 90vh;
  background-color: blue;
`;
export const HomeH1 = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;
export const LinkInHome = styled(Link)`
  height: 25px;
  width: 100px;
  color: red;
  border: 2px solid black;
  position: absolute;
  top: 70%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;
export const DivForImg = styled.div``;
export const HomeImg = styled.img`
  position: absolute;
  top: 40%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 300px;
`;
