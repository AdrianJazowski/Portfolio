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
  background: linear-gradient(
    41deg,
    rgba(238, 174, 202, 0.19371498599439774) 0%,
    rgba(148, 187, 233, 0.30015756302521013) 100%
  );

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
