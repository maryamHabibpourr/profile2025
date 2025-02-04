import { getPostsMeta } from "@/lib/posts";
import ListItem from "@/shared/ListItem";
import Link from "next/link";

export const revalidate = 86400;


type Props = {
  params: {
    tag: string;
  };
};


export async function generateStaticParams() {
  const posts = await getPostsMeta(); //deduped!

  if (!posts) return [];

  const tags = new Set(posts.map((post) => post.tags).flat());

  return Array.from(tags).map((tag) => ({ tag }));
}


export function generateMetadata({ params: { tag } }: Props) {
  return {
    title: `Posts about ${tag}`,
  };
}

export default async function TagPostList({ params: { tag } }: Props) {
  const posts = await getPostsMeta(); //deduped!


  if (!posts)
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;

  const tagPosts = posts.filter((post) => post.tags.includes(tag));

  if (!tagPosts.length) {
    return (
      <div className="text-center">
        <p className="mt-10">Sorry, no posts for that keyword.</p>
        <Link href="/">Back to Home</Link>
      </div>
    );
  }


  return (
      <section className="pt-6">
        <h2 className="text-xl text-gray-800 text-center font-semibold mt-12 mb-0">Results for: #{tag}</h2>
          <div className="pt-[1.75rem] lg:pt-[1.25rem] px-4 md:px-6 prose prose-base prose-invert">
            <ul className="w-full list-disc pl-6">
            {tagPosts.map((post) => (
            <ListItem key={post.id} post={post} />
          ))}
            </ul>
        </div>
      </section>
    
  );
}
