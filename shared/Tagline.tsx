import React, { FunctionComponent, ReactNode } from "react";
import brackets from "../public/icons/Brackets";

type TagLineProps ={
  className?: string;
  children: ReactNode
}

const TagLine: FunctionComponent<TagLineProps> = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-lg font-semibold">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default TagLine;
