import React from "react";
import ExperienceText from "./ExperienceText";
import PortfolioButtons from "./PortfolioButtons";

interface GridItemProps {
  img: string;
  buttons?: JSX.Element;
  text?: string;
  portfolio: boolean;
  style?: string;
}
const GridItem = ({ img, buttons, portfolio, style, text }: GridItemProps) => {
  return (
    <div
      className={`shadow-md ${
        portfolio === true
          ? "shadow-gray-600"
          : "hover:scale-105 duration-500 py-2 rounded-lg" + " " + style
      } rounded-lg`}
    >
      <img
        className={` ${
          portfolio === true
            ? "rounded-md duration-200 hover:scale-105"
            : "w-20 mx-auto"
        }`}
        src={img}
        alt=""
      />
      {buttons && <PortfolioButtons />}
      {text && <ExperienceText title={text} />}
    </div>
  );
};

export default GridItem;
