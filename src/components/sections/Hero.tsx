
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-white/5 text-xs font-semibold text-accent mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Disponible para Proyectos Estratégicos
          </div>
          
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-700">
            Optimizando Ecosistemas Digitales <span className="text-gradient">Escalables</span>
          </h1>
          
          <p className="font-body text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Soy <span className="text-foreground font-semibold">Karen Sandoval</span>. El puente estratégico entre diseño de alta fidelidad, viabilidad técnica y resultados de negocio desde 2014.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white min-w-[200px]" asChild>
              <Link href="#projects">
                Ver Proyectos Destacados <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="ghost" className="hover:bg-white/5 min-w-[200px]" asChild>
              <Link href="#experience">
                Mi Trayectoria <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 animate-in fade-in duration-1000 delay-500">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-foreground">10+</span>
              <span className="text-xs uppercase tracking-widest mt-1">Años de Exp</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-foreground">+130</span>
              <span className="text-xs uppercase tracking-widest mt-1">Sitios Gestionados</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-foreground">SEO</span>
              <span className="text-xs uppercase tracking-widest mt-1">Estrategia Técnica</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-foreground">UI/UX</span>
              <span className="text-xs uppercase tracking-widest mt-1">High Fidelity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
