
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 w-full z-40 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <Link href="/" className="md:hidden font-headline font-bold text-lg tracking-tighter">
            SANDOVAL<span className="text-primary">STRATEGICS</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button asChild size="sm" variant="outline" className="hidden sm:flex border-primary/20 hover:border-primary/50 text-primary">
            <Link href="#contact">Colaborar</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
