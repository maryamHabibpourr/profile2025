import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <div className="text-center pt-[4.75rem] lg:pt-[7.25rem] overflow-hidden">
        <p className="mt-10 text-gray-800 text-base font-semibold">Sorry, the requested post does not exist.</p>
        <Link href="/" className="mt-2 text-red-800 text-base font-semibold">Back to Home</Link>
      </div>
    </section>
  );
}
