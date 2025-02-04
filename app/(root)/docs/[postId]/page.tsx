import React from 'react'
import { getPostByName, getPostsMeta } from '@/lib/posts';
import Link from 'next/link';
import getFormattedDate from '@/lib/getFormattedDate';
import { notFound } from "next/navigation";
// import "highlight.js/styles/github-dark.css";
import "highlight.js/styles/atom-one-light.css";


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
    <section className="w-full h-fit-content py-4 px-4">
    <div className="px-4 md:px-6 prose prose-xl prose-slate mx-auto text-white/90">
      <h2 className="text-2xl text-red-800 mt-4 mb-0 text-center">{meta.title}</h2>
      <p className="mt-0 text-sm text-gray-600 text-center fotn-semibold">{pubDate}</p>
      <article className='text-gray-800 font-semibold text-justify text-sm md:text-base'>{content}</article>
      <section className='mt-4'>
        <h3 className="text-red-800 font-bold text-lg">Related Blogs:</h3>
        <div className="flex flex-row gap-4 text-gray-600 font-semibold">{tags}</div>
      </section>
      <p className="mb-10">
        <Link href="/docs" className="text-sm text-red-600">
          ← Back to Docs
        </Link>
      </p>
    </div>
  </section>
  )
}

export default Doc
