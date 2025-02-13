import React from "react";
import Heading from "@/shared/Heading";
import CaseStudyCard from "@/shared/CaseStudyCard";
import { caseStudies } from "@/constants";

const MachinLearningProjects = () => {
  return (
    <section className="container flex flex-col items-center mt-6">
      <Heading
        className="text-justify"
        tag="Case study"
        title="Applied AI & ML Research."
        text=""
      />
      <div className="w-full flex flex-col gap-2">
        {caseStudies.map((item) => (
          <CaseStudyCard
            key={item.id}
            className=""
            index={item.id}
            title={item.title}
            source_code_link={item.source_code_link}
            dataset_link={item.dataSet_link}
          />
        ))}
      </div>
    </section>
  );
};

export default MachinLearningProjects;
