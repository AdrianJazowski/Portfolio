/** @format */
import React, { useContext } from "react";
import { Col, Form } from "react-bootstrap";
import PortfolioContext from "../../context";
import { StyledForm } from "./FilterByProjectCategoryStyled";

const FiltrByProjectCategory = () => {
  const value = useContext(PortfolioContext);
  const { projects, handleProjectCategory } = value;

  const categories = [
    "all",
    ...new Set(projects.map((category) => category.typeProject)),
  ];

  return (
    <Form.Group>
      {categories.map((category) => {
        return (
          <>
            <StyledForm
              type="radio"
              label={category}
              name="formHorizontalRadios"
              id={category}
              onChange={handleProjectCategory}
            />
          </>
        );
      })}
    </Form.Group>
  );
};

export default FiltrByProjectCategory;
