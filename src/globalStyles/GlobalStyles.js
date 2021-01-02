/** @format */
import "bootstrap/dist/css/bootstrap.min.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body{
  background-color: rgb(206, 201, 201);
}
a{
  text-decoration: none;
  color: white;
  &:hover{
    text-decoration:none;
    color: white;
  }
}
`;

export default GlobalStyles;
