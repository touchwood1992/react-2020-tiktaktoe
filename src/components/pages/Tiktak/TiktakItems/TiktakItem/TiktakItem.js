import React from "react";
import { FaTimes, FaRegCircle, FaEdit } from "react-icons/fa";
const TiktakItem = (props) => {
  const { val, clickedCell, activeClass } = props;
  let icon;
  switch (val) {
    case "c":
      icon = <FaTimes></FaTimes>;
      break;

    case "r":
      icon = <FaRegCircle></FaRegCircle>;
      break;

    default:
      icon = <FaEdit></FaEdit>;
      break;
  }
  return (
    <>
      {console.log("TiktakItem")}
      <li className={activeClass} onClick={clickedCell}>
        {icon}
      </li>
    </>
  );
};
export default TiktakItem;
