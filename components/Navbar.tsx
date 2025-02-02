"use client";

import Link from "next/link";
import { navigation } from "../constants";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-center gap-4 p-4 bg-white/70 backdrop-blur-sm">
      {navigation.map(({ id, title, path }) => (
        <Link key={id} href={path} className="font-medium text-gray-700">
          {title}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;

