import Link from "next/link";
import React from "react";
import { Heart, Coffee } from "lucide-react";
import { links } from "@/constants";

const Footer = () => {
  return (
    <div className="max-w-[calc(100%-4%)] md:w-full flex flex-col items-center justify-center py-6 px-4">

      <p className="w-fit text-xs font-semibold text-gray-800 flex flex-wrap items-center justify-center pt-2 border-t border-gray-400 ">
        Made with <Heart className="w-4 h-4 text-red-500" />,{" "}
        <Coffee className="w-4 h-4 text-brown-500 ml-1" />,{" "}
        {links.map((link, index) => (
          <React.Fragment key={link.href}>
            {index > 0 && ", "}
            <Link href={link.href} className="text-red-600 hover:text-red-800">
              {link.label}
            </Link>
          </React.Fragment>
        ))}
      </p>

      <p className="w-fit text-xs font-semibold text-gray-800">
        ©2019-2025{" "}
        <Link
          href="https://maryyam.dev"
          className="text-red-500 font-semibold hover:text-red-600"
        >
          Maryam Habibpour
        </Link>
        , last update Feb 2025
      </p>
    </div>
  );
};

export default Footer;
