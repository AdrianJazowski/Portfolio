/** @format */
import "bootstrap/dist/css/bootstrap.min.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
a{
  color:blue;
  text-decoration: none;
  &:hover{
    text-decoration:none;
    color: red;
  }
}
`;

export default GlobalStyles;
