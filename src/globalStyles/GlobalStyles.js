/** @format */
import "bootstrap/dist/css/bootstrap.min.css";
import { createGlobalStyle } from "styled-components";
import bgPhoto from "../assets/bgForPages.jpg";

const GlobalStyles = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  transition: .3s;
}
body{
  background-image: url(${bgPhoto});

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
