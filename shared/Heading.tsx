import { Interface } from "readline";
import TagLine from "./Tagline";
import { ReactNode } from "react"


type HeadingProps ={
  className?: string;
  title?: string;
  text?: ReactNode; 
  tag?:string;
}


const Heading: React.FC<HeadingProps> = ({ className, title, text, tag }: HeadingProps) => {
  return (
    <div
      className={`${className} w-full mx-auto`}
    >
      {title && <h2 className="h1">{title}</h2>}
      {tag && <TagLine className="mb-4 mt-4 justify-center text-red-800">{tag}</TagLine>}
      {text && <p className="text-base mt-2 font-semibold text-gray-700 px-2">{text}</p>}
    </div>
  );
};

export default Heading;
