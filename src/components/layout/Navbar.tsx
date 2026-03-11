"use client";

import Link from "next/link";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function Navbar() {
  return (
    <header className="sticky top-0 w-full z-40 border-b border-border/30 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-14 flex items-center justify-start">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="hover:bg-accent/10 transition-colors" />
          <Link href="/" className="font-headline font-black text-sm tracking-tighter uppercase group">
            SANDOVAL<span className="text-primary group-hover:text-accent transition-colors">STRATEGICS</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
