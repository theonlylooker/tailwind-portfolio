import React from "react";
import { Link } from "react-scroll";
import useModal from "../hooks/useModal";
interface DropDownItemProps {
  name: string;
  CModal?: () => void;
}
const DropDownItem = ({ name, CModal }: DropDownItemProps) => {
  return (
    <li className="item">
      <Link onClick={CModal} to={name} smooth duration={500}>
        {name}
      </Link>
    </li>
  );
};

export default DropDownItem;
