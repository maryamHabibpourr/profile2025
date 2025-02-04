"use client"; 
import { useEffect } from "react";
import Link from "next/link";


export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);


  return (
    <section className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <main className="mx-auto max-w-lg py-1 px-4 min-h-screen">
        <h2 className="mt-10 text-red-800 text-base font-semibold">Something went wrong!</h2>
        <button
          className="mb-4 p-4 bg-red-500 text-gray-800 rounded-xl"
          onClick={
            () => reset()
          }
        >
          Try again
        </button>
        <p className="text-base">
          Or go back to{" "}
          <Link href="/" className="underline">
            Home 
          </Link>
        </p>
      </main>
    </section>
  );
}
