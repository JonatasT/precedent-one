"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex">
      <nav className="flex items-center gap-[2.5rem] text-sm">
        <Link
          href=""
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname === "/"
              ? "text-foreground font-bold"
              : "text-foreground/60",
          )}
        >
          Home
        </Link>
        <Link
          href="/presentes"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/presentes")
              ? "text-foreground font-bold"
              : "text-foreground/60",
          )}
        >
          Presentes
        </Link>
        <Link
          href="/rsvp"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/rsvp")
              ? "text-foreground font-bold"
              : "text-foreground/60",
          )}
        >
          RSVP
        </Link>
      </nav>
    </div>
  );
}
