import React from 'react'
import { getPostByName, getPostsMeta } from '@/lib/posts';
import Link from 'next/link';
import getFormattedDate from '@/lib/getFormattedDate';
import { notFound } from "next/navigation";
import "highlight.js/styles/github-dark.css";
export const revalidate = 0;


type Props = {
    params: {
      postId: string;
    };
  };
  
  
  export async function generateStaticParams() {
    const posts = await getPostsMeta(); //deduped!
  
    if (!posts) return [];
    
    return posts.map((post) => ({
      postId: post.id,
    }));
  }
  
  export async function generateMetadata({ params: { postId } }: Props) {
    const post = await getPostByName(`${postId}.mdx`); //deduped!
  
    if (!post) {
      return {
        title: "Post Not Found",
      };
    }
  
    return {
      title: post.meta.title,
    };
  }



const Doc = async ({ params: { postId } }: Props) => {
    const post = await getPostByName(`${postId}.mdx`); //deduped!

    if (!post) notFound();
  
    const { meta, content } = post;
  
    const pubDate = getFormattedDate(meta.date);
  
    const tags = meta.tags.map((tag, i) => (
      <Link key={i} href={`/tags/${tag}`} className="text-color-3">
        {tag}
      </Link>
    ));


  return (
    <section className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
    <div className="pt-[4.75rem] lg:pt-[5.25rem] px-4 md:px-6 prose prose-xl prose-slate mx-auto text-white/90">
      <h2 className="text-3xl text-color-2 mt-4 mb-0">{meta.title}</h2>
      <p className="mt-0 text-sm">{pubDate}</p>
      <article>{content}</article>
      <section>
        <h3 className=" text-color-2">Related:</h3>
        <div className="flex flex-row gap-4 text-color-5">{tags}</div>
      </section>
      <p className="mb-10">
        <Link href="/posts" className="text-xl text-cyan-200">
          ← Back to Blogs
        </Link>
      </p>
    </div>
  </section>
  )
}

export default Doc
