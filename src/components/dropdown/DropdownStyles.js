/** @format */

import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const DropdownUl = styled.ul`
  background: red;
  width: 200px;
  position: absolute;
  top: 80px;
  list-style: none;
  text-align: start;

  ${({ dropdown }) =>
    dropdown &&
    css`
      display: none;
    `}
`;
export const DropdownLi = styled.li`
  background: #1888ff;
  cursor: pointer;
  &:hover {
    background: #5cabff;
  }
`;
export const DropdownLink = styled(Link)`
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: #fff;
  padding: 16px;
`;
