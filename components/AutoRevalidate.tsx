'use client';
import { useEffect } from 'react';

type Props = {
  postId: string;
};

export default function AutoRevalidate({ postId }: Props) {
  useEffect(() => {
    async function revalidate() {
      try {
        const res = await fetch(
          `/api/revalidate?secret=${process.env.NEXT_PUBLIC_MY_SECRET_TOKEN}&path=/docs/${postId}`
        );
        const data = await res.json();
        console.log('Revalidation result:', data);
      } catch (error) {
        console.error('Error during auto revalidation:', error);
      }
    }
    revalidate();
  }, [postId]);

  return null; 
}
