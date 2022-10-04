import React from "react";
import { Element } from "react-scroll";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <Element name="about" className="section from-gray-800 to-black">
      <div className="sectionLayout">
        <SectionTitle title="About" />
        <p className="text-xl mt-20">
          I am a graduate and bachelor of Computer Science, I have knowledge in
          languages like C++, Python, MySql and with them I developed basic
          recommender systems as well as a short path system for web. Creating
          the short path system I started to use more javascript and JSON
          collections which made me curious and I started to deepen in this
          language and web development.
        </p>
        <br />
        <p className="text-xl">
          I went deeper in HTML, CSS, Javascript then I went on with ReactJS,
          NodeJS, interaction with MongoDB. I'm still a beginner but I'm hungry
          for knowledge.
        </p>
      </div>
    </Element>
  );
};

export default About;
