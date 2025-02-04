import React from "react";
import Publication from "@/components/Publication";
import { getPostsMeta } from "@/lib/posts";
import ListItem from "@/shared/ListItem";
import Heading from "@/shared/Heading";


const Docs = async () => {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }



  return (
    <main className="w-full h-fit-content py-12 px-4">
      <Publication/>
      <section className="container mt-4 flex flex-col items-center">
      <div className="container relative z-2">
        <Heading
          tag="Cutting-Edge Tips"
          title="Select Blog Posts and Articles"
        />
        <div className="pt-[1.75rem] lg:pt-[1.25rem] px-4 md:px-6 prose prose-xl prose-slate mx-auto text-white/90">
          <ul className="w-full list-none p-0">
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
