import React from "react";
import { getPostsMeta } from "@/lib/posts";
import Heading from "@/components/Heading";

const page = () => {
  return (
    <main>
      <Heading
        className="mb-4 md:mb-8"
        tag="What I staudid in AI"
        title="Publication."
        text="
              Exceptionally adept professional, proficient in researching,
              coding, and deploying deep learning models. Passionate for
              opportunities in research work that will open the door of career
              progression in AI industry."
      />
    </main>
  );
};

export default page;
