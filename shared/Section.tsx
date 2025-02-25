import React from "react";

type SectionProps = {
  className?: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ className, children }) => {
  return (
    <div
      className={`${className} container flex flex-col gap-2 items-center mt-2 mb-4`}
    >
      {children}
    </div>
  );
};

export default Section;
