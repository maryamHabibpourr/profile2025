"use client";

import Link from "next/link";
import { navigation } from "../constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full flex items-center justify-center gap-4 p-4 bg-white/70 backdrop-blur-sm">
      {navigation.map((item) => {
        const isActive =
          pathname === item.path || pathname.startsWith(`${item.path}/`);

        return (
          <Link
            href={item.path}
            key={item.id}
            className={cn("sidebar-link", { "bg-red-800": isActive })}
          >
            <p className={cn("sidebar-label", { "!text-white": isActive })}>
              {item.title}
            </p>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
