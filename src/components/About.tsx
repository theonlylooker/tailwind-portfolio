import React from "react";
import { Element } from "react-scroll";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <Element name="about" className="section from-gray-800 to-black">
      <div className="sectionLayout">
        <SectionTitle title="About" />
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
          laudantium similique unde, laboriosam non ut, fuga distinctio
          perspiciatis quibusdam, laborum consequatur facilis labore est
          accusamus consectetur? Rem reprehenderit maiores cumque!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
          explicabo? Vero, enim. Voluptas, eius rem! Velit facere quasi veniam
          voluptatibus laborum itaque rerum non, provident nesciunt voluptas vel
          doloremque, obcaecati praesentium corporis maxime. Iusto labore, quia
          numquam dicta facilis unde alias eius magnam ipsum eligendi velit,
          odio tempore deserunt fuga?
        </p>
      </div>
    </Element>
  );
};

export default About;
