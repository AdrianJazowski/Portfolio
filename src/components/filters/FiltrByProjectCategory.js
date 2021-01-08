/** @format */
import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import PortfolioContext from "../../context";

const FiltrByProjectCategory = () => {
  const value = useContext(PortfolioContext);
  const { projects, handleProjectCategory } = value;

  const categories = [
    "all",
    ...new Set(projects.map((category) => category.typeProject)),
  ];

  return (
    <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Control
        as="select"
        onChange={handleProjectCategory}
        id="categorySelect"
      >
        {categories.map((category) => {
          return <option>{category}</option>;
        })}
      </Form.Control>
    </Form.Group>
  );
};

export default FiltrByProjectCategory;
