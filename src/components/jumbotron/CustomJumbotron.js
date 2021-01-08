/** @format */

import React from "react";
import { Jumbotron } from "react-bootstrap";
import { StyledJumbotron } from "./CustomJumbotronStyles";

const CustomJumbotron = ({ children }) => {
  return (
    <div>
      <StyledJumbotron>
        <h1>{children}</h1>
      </StyledJumbotron>
    </div>
  );
};

export default CustomJumbotron;
