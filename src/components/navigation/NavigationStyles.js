/** @format */
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

export const CustomNavbar = styled(Navbar)`
  display: flex;
  justify-content: end;
  width: 100vw;
  height: 10vh;
  a {
    margin: 10px;
    font-size: 24px;
    font-weight: 500;
  }
`;
export const CustomNav = styled(Nav)`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;
