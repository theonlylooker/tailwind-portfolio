import React from "react";
import { Link } from "react-scroll";
interface DropDownItemProps {
  name: string;
}
const DropDownItem = ({ name }: DropDownItemProps) => {
  return (
    <li className="item">
      <Link to="home">{name}</Link>
    </li>
  );
};

export default DropDownItem;
