
"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 w-full z-40 border-b border-border/30 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-headline font-black text-sm tracking-[0.2em] uppercase group">
            SANDOVAL<span className="text-primary group-hover:text-accent transition-colors">STRATEGICS</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            <Link href="#capabilities" className="hover:text-primary transition-colors">Perfil</Link>
            <Link href="#projects" className="hover:text-primary transition-colors">Proyectos</Link>
            <Link href="#experience" className="hover:text-primary transition-colors">Trayectoria</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">Contacto</Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="hidden sm:flex w-8 h-8 items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
              <span className="text-base">🇺🇸</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
