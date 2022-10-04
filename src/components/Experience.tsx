import React from "react";
import { Element } from "react-scroll";
import GridItem from "./GridItem";
import SectionTitle from "./SectionTitle";
import html from "../assets/html.png";
import reactImage from "../assets/react.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import nextjs from "../assets/nextjs.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import css from "../assets/css.png";

const Experience = () => {
  const myexperience = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: node,
      title: "Node",
      style: "shadow-green-600",
    },
  ];
  return (
    <Element name="experience" className="section from-gray-800 to-black">
      <div className="sectionLayout">
        <SectionTitle title="Experience" />
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py8 px-12 sm:px-0">
          {myexperience &&
            myexperience.map(({ id, src, title, style }) => (
              <GridItem
                key={id}
                img={src}
                portfolio={false}
                text={title}
                style={style}
              />
            ))}
        </div>
      </div>
    </Element>
  );
};

export default Experience;
