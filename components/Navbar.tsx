"use client";

import Link from "next/link";
import { navigation } from "../constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="max-w-[calc(100%-2%]  md:w-full flex items-center justify-center gap-4 md:gap-5  lg:gap-10  p-4 bg-red-200 backdrop-blur-sm">
      {navigation.map((item) => {
        const isActive =
          pathname === item.path || pathname.startsWith(`${item.path}/`);
        return (
          <Link href={item.path} key={item.id}>
            <p
              className={cn("navbar-label", {
                "!text-red-600 underline underline-offset-4": isActive,
              })}
            >
              {item.title}
            </p>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
