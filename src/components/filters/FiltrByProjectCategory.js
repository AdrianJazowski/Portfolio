/** @format */
import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import PortfolioContext from "../../context";
import { StyledForm } from "./FiltrByProjectCategoryStyles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const FiltrByProjectCategory = () => {
  const value = useContext(PortfolioContext);
  const { projects, handleProjectCategory } = value;

  const categories = [
    "all",
    ...new Set(projects.map((category) => category.typeProject)),
  ];

  return (
    <StyledForm component="fieldset">
      <RadioGroup
        row
        aria-label="projects"
        name="projecys"
        onChange={handleProjectCategory}
      >
        {categories.map((category) => {
          return (
            <>
              <FormControlLabel
                value={category}
                control={<Radio />}
                label={category}
              />
            </>
          );
        })}
      </RadioGroup>
    </StyledForm>
  );
};

export default FiltrByProjectCategory;

{
  /* <Form.Group>
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
</Form.Group> */
}
