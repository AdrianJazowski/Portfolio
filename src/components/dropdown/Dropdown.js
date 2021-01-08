/** @format */

// /** @format */

// import React, { useContext } from "react";
// import PortfolioContext from "../../context";
// import { MenuItems } from "../menuItems/MenuItems";
// import {
//   DropdownUl,
//   DropdownLi,
//   DropdownLink,
// } from "../dropdown/DropdownStyles";

// import { Switch } from "react-router-dom";

// const Dropdown = () => {
//   const value = useContext(PortfolioContext);
//   const { handleDropdownMenuToggle, setDropdown, dropDownMenuToggle } = value;
//   return (
//     <>
//       <DropdownUl
//         onClick={handleDropdownMenuToggle}
//         dropDownMenuToggle={dropDownMenuToggle}
//       >
//         {MenuItems.map((item, index) => {
//           const { path, title } = item;
//           return (
//             <DropdownLi key={index}>
//               <Switch>
//                 <DropdownLink
//                   to={title}
//                   title
//                   onClick={() => setDropdown(false)}
//                 >
//                   {title}
//                 </DropdownLink>
//               </Switch>
//             </DropdownLi>
//           );
//         })}
//       </DropdownUl>
//     </>
//   );
// };

// export default Dropdown;
