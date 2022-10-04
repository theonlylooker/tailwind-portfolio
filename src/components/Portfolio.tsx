import React from "react";
import { Element } from "react-scroll";
import SectionTitle from "./SectionTitle";
import work1 from "../assets/portfolio/work1.png";
import work2 from "../assets/portfolio/work2.png";
import work3 from "../assets/portfolio/work3.png";
import GridItem from "./GridItem";
import PortfolioButtons from "./PortfolioButtons";

const Portfolio = () => {
  const portfolioWorks = [
    {
      id: 1,
      src: work1,
    },
    {
      id: 2,
      src: work2,
    },
    {
      id: 3,
      src: work3,
    },
  ];
  return (
    <Element name="portfolio" className="section from-black to-gray-800">
      <div className="sectionLayout">
        <SectionTitle
          title="Portfolio"
          subtitle="Check out some of my work right here"
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolioWorks &&
            portfolioWorks.map(({ id, src }) => (
              <GridItem
                key={id}
                img={src}
                portfolio={true}
                buttons={<PortfolioButtons />}
              />
            ))}
        </div>
      </div>
    </Element>
  );
};

export default Portfolio;
