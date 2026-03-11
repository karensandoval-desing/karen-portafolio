"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-background">
      {/* Background Orbs with new palette */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[140px] pointer-events-none animate-pulse duration-[10000ms]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[140px] pointer-events-none animate-pulse duration-[8000ms]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-bold text-accent uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
            </span>
            Estrategia de Producto & Diseño Visual
          </div>
          
          <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.95] animate-in fade-in slide-in-from-bottom-6 duration-700">
            Optimizando Ecosistemas <span className="text-gradient">Escalables</span>
          </h1>
          
          <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Soy <span className="text-foreground font-semibold">Karen Sandoval</span>. El puente estratégico entre diseño de alta fidelidad, viabilidad técnica y resultados de negocio.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground min-w-[200px] rounded-full font-bold shadow-xl shadow-primary/20" asChild>
              <Link href="#projects">
                Ver Proyectos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-accent/30 hover:bg-accent/5 min-w-[200px] rounded-full font-bold" asChild>
              <Link href="#experience">
                Trayectoria <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 animate-in fade-in duration-1000 delay-500 border-t border-border/50 pt-10">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-foreground tracking-tighter">10+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest mt-1 text-muted-foreground">Años Exp</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-foreground tracking-tighter">+130</span>
              <span className="text-[10px] font-bold uppercase tracking-widest mt-1 text-muted-foreground">Sitios</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-foreground tracking-tighter">SEO</span>
              <span className="text-[10px] font-bold uppercase tracking-widest mt-1 text-muted-foreground">Técnico</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-foreground tracking-tighter">UX</span>
              <span className="text-[10px] font-bold uppercase tracking-widest mt-1 text-muted-foreground">Estratégico</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}