"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-20 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-background">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-64 md:96 h-64 md:h-96 bg-primary/20 rounded-full blur-[100px] md:blur-[140px] pointer-events-none animate-pulse duration-[10000ms]" />
      <div className="absolute bottom-1/4 -right-20 w-64 md:96 h-64 md:h-96 bg-accent/20 rounded-full blur-[100px] md:blur-[140px] pointer-events-none animate-pulse duration-[8000ms]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-bold text-accent uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
            </span>
            Estrategia Digital · UX · Ecosistemas Web
          </div>
          
          <h1 className="font-headline text-3xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1] md:leading-[0.95] animate-in fade-in slide-in-from-bottom-6 duration-700">
            Diseño que Entiende el Código. <span className="text-gradient">Estrategia que Impulsa el Negocio.</span>
          </h1>
          
          <p className="font-body text-base md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Optimizando el rendimiento digital mediante diseño UI/UX de alto nivel y arquitectura técnica
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:min-w-[200px] rounded-full font-bold shadow-xl shadow-primary/20" asChild>
              <Link href="#projects">
                Ver Proyectos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-accent/30 hover:bg-accent/5 w-full sm:min-w-[200px] rounded-full font-bold" asChild>
              <Link href="#experience">
                Trayectoria <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 opacity-60 animate-in fade-in duration-1000 delay-500 border-t border-border/50 pt-10">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-foreground tracking-tighter">10+</span>
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest mt-1 text-muted-foreground text-center">Años Exp</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-foreground tracking-tighter">+130</span>
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest mt-1 text-muted-foreground text-center">Sitios</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-foreground tracking-tighter">SEO</span>
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest mt-1 text-muted-foreground text-center">Técnico</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-foreground tracking-tighter">UX</span>
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest mt-1 text-muted-foreground text-center">Estratégico</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
