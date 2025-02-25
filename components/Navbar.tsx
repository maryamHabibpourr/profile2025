"use client";

import Link from "next/link";
import { navigation } from "../constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full flex items-center justify-between py-4 px-2 md:px-12 bg-red-200 backdrop-blur-sm">
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
