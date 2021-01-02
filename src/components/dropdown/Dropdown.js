/** @format */

import React, { useContext } from "react";
import PortfolioContext from "../../context";
import { MenuItems } from "../menuItems/MenuItems";
import {
  DropdownUl,
  DropdownLi,
  DropdownLink,
} from "../dropdown/DropdownStyles";

const Dropdown = () => {
  const value = useContext(PortfolioContext);
  const { handleDropdownMenuToggle, setDropdown, dropDownMenuToggle } = value;
  return (
    <>
      <DropdownUl
        onClick={handleDropdownMenuToggle}
        dropDownMenuToggle={dropDownMenuToggle}
      >
        {MenuItems.map((item, index) => {
          return (
            <DropdownLi key={index}>
              <DropdownLink to={item.path} onClick={() => setDropdown(false)}>
                {item.title}
              </DropdownLink>
            </DropdownLi>
          );
        })}
      </DropdownUl>
    </>
  );
};

export default Dropdown;
