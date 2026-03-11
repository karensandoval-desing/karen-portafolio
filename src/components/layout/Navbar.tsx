"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 w-full z-40 border-b border-border/30 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-headline font-black text-xs tracking-[0.2em] uppercase group">
            SANDOVAL<span className="text-primary group-hover:text-accent transition-colors">STRATEGICS</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            <Link href="#capabilities" className="hover:text-primary transition-colors">Perfil</Link>
            <Link href="#projects" className="hover:text-primary transition-colors">Proyectos</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">Contacto</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}