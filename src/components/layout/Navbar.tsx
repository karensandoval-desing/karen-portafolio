
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-headline font-bold text-xl tracking-tighter">
          SANDOVAL<span className="text-primary">STRATEGICS</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="#capabilities" className="hover:text-foreground transition-colors">Capacidades</Link>
          <Link href="#projects" className="hover:text-foreground transition-colors">Proyectos</Link>
          <Link href="#experience" className="hover:text-foreground transition-colors">Experiencia</Link>
          <Link href="#ai-architect" className="hover:text-foreground transition-colors">AI Brief</Link>
        </div>

        <Button asChild variant="outline" className="border-primary/20 hover:border-primary/50 text-primary">
          <Link href="#contact">Colaborar</Link>
        </Button>
      </div>
    </nav>
  );
}
