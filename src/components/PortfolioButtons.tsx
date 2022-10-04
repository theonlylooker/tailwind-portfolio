import React from "react";

interface PortfolioButtonProps {
  demo: string;
  code: string;
}
const PortfolioButtons = ({ demo, code }: PortfolioButtonProps) => {
  return (
    <div className="flex items-center justify-center">
      <button className="portfolioButton">
        <a href={demo} target="_blank" rel="noreferrer">
          DEMO
        </a>
      </button>
      <button className="portfolioButton">
        <a href={code} target="_blank" rel="noreferrer">
          CODE
        </a>
      </button>
    </div>
  );
};

export default PortfolioButtons;
