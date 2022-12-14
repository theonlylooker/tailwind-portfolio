import React from "react";
import DropDownItem from "./DropDownItem";

interface DropDownProps {
  modal?: boolean;
  CModal?: () => void;
}

const DropDown = ({ modal, CModal }: DropDownProps) => {
  const Links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <nav>
      <ul className="flex flex-col items-center md:flex-row">
        {Links &&
          Links.map((element) => (
            <DropDownItem
              key={element.id}
              name={element.link}
              CModal={CModal}
            />
          ))}
      </ul>
    </nav>
  );
};

export default DropDown;
