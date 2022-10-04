import React from "react";

interface ExperienceTextProps {
  title: string;
}
const ExperienceText = ({ title }: ExperienceTextProps) => {
  return <p className="mt-4 pl-2">{title}</p>;
};

export default ExperienceText;
