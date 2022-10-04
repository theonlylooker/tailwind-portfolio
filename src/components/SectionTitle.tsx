import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}
const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="pb-8">
      <p className="text-4xl font-bold inline border-b-4 border-gray-500">
        {title}
      </p>
      {subtitle && <p className="py-6">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
