import Link from "next/link";
import React from "react";
import { Heart, Coffee } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-center py-4 bg-white">
      <p className="w-fit text-xs font-light text-gray-600 flex flex-row pt-2 border-t border-gray-400">
        Made with <Heart className="w-4 h-4 text-red-500" />
        {","}
        <Coffee className="w-4 h-4 text-brown-500" />,{" "}
        <Link
          href="https://nextjs.org"
          className="text-red-500 hover:text-red-800"
        >
          Next.js
        </Link>
        ,{" "}
        <Link
          href="https://tailwindcss.com"
          className="text-red-500 hover:text-red-800"
        >
          Tailwind CSS
        </Link>
        ,{" "}
        <Link
          href="https://www.django-rest-framework.org/"
          className="text-red-500 hover:text-red-800"
        >
          Django Rest Framework
        </Link>
      </p>

      <p className="w-fit text-xs font-light text-gray-600">
        ©2019-2025{" "}
        <Link
          href="https://maryyam.dev"
          className="text-red-500 hover:text-red-800"
        >
          Maryam Habibpour
        </Link>
      </p>
    </div>
  );
};

export default Footer;
