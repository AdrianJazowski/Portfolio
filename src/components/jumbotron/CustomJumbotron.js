/** @format */

import React from "react";
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
