/** @format */
import "bootstrap/dist/css/bootstrap.min.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  transition: .3s;
}
body{
  ${
    "" /* background: linear-gradient(252deg, rgba(49,76,140,1) 5%, rgba(64,64,87,1) 36%, rgba(61,107,116,1) 92%); */
  }

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
