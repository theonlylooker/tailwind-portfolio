import React from "react";

interface DropDownItemProps {
  name: string;
}
const DropDownItem = ({ name }: DropDownItemProps) => {
  return <li className="item">{name}</li>;
};

export default DropDownItem;
