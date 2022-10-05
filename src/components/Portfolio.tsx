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
      demo: "https://moonlit-panda-ff1f33.netlify.app/",
      code: "https://github.com/theonlylooker/dropdown-navigation",
    },
    {
      id: 2,
      src: work2,
      demo: "https://theonlylooker.github.io/advise-generator-app/",
      code: "https://github.com/theonlylooker/advise-generator-app",
    },
    {
      id: 3,
      src: work3,
      demo: "https://reliable-daifuku-91f379.netlify.app/",
      code: "https://github.com/theonlylooker/space-tourism",
    },
  ];
  return (
    <Element name="portfolio" className="section from-black to-gray-800">
      <div className="sectionLayout">
        <SectionTitle
          title="Portfolio"
          subtitle="Check out some of my work right here"
        />
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 px-12 sm:gap-8 sm:px-0">
          {portfolioWorks &&
            portfolioWorks.map(({ id, src, demo, code }) => (
              <GridItem
                key={id}
                img={src}
                portfolio={true}
                buttons={<PortfolioButtons demo={demo} code={code} />}
              />
            ))}
        </div>
      </div>
    </Element>
  );
};

export default Portfolio;
