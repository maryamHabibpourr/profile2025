import React from "react";
import Publication from "@/components/Publication";
import { getPostsMeta } from "@/lib/posts";
import ListItem from "@/shared/ListItem";
import Heading from "@/shared/Heading";
import MachinLearningProjects from "@/components/MachinLearningProjects";

const Docs = async () => {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  return (
    <main className="w-full h-fit-content py-4 px-4">
      <Publication />
      <MachinLearningProjects/>
      <section className="container pt-12 flex flex-col items-center">
        <div className="container relative z-2">
          <Heading
            tag="Cutting-Edge Tips"
            title="Select Blog Posts and Articles"
          />
          <div className="">
            <ul className="w-full list-disc pl-6">
              {posts.map((post) => (
                <ListItem key={post.id} post={post} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Docs;
