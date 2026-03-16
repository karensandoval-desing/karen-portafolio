"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const milestones = [
  {
    year: "2014",
    company: "Aviatur",
    description: "Inicio en el ecosistema digital desarrollando habilidades en diseño web, experiencia de usuario y gestión de plataformas corporativas."
  },
  {
    year: "2022",
    company: "Acesa",
    description: "Participación en proyectos web corporativos fortaleciendo el trabajo entre diseño, desarrollo y negocio."
  },
  {
    year: "2022",
    company: "BIT-C",
    description: "Liderazgo en proyectos digitales, creación de plataformas web, optimización SEO y acompañamiento estratégico a equipos de desarrollo."
  },
  {
    year: "2024",
    company: "Mega Incentivos",
    description: "Gestión y evolución de soluciones digitales orientadas a eficiencia operativa y experiencia de usuario."
  },
  {
    year: "2024",
    company: "Kaput",
    description: "Liderazgo en estrategia digital, posicionamiento de marca y desarrollo del ecosistema web de la agencia."
  }
];

export function ProfessionalEvolution() {
  return (
    <section id="evolution" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight">Evolución <span className="text-gradient">Profesional</span></h2>
            <p className="text-muted-foreground mt-4 text-lg max-w-2xl font-body">
              De diseño web a liderazgo en estrategia digital y desarrollo de plataformas.
            </p>
          </div>

          <div className="relative pt-12 pb-24">
            {/* The Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-border/50 -translate-y-1/2 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4 relative">
              <TooltipProvider delayDuration={0}>
                {milestones.map((m, idx) => (
                  <div key={idx} className="flex flex-col items-center group relative">
                    {/* Vertical line for mobile */}
                    <div className="absolute top-0 left-1/2 w-px h-full bg-border/30 -translate-x-1/2 md:hidden" />
                    
                    <div className="relative z-10 mb-6">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="w-12 h-12 rounded-full bg-background border-4 border-primary flex items-center justify-center cursor-help transition-all duration-300 group-hover:scale-125 group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(96,165,250,0.6)] group-hover:bg-primary">
                            <span className="text-[10px] font-black text-primary group-hover:text-white transition-colors uppercase">
                              {m.year}
                            </span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-[200px] p-4 glass-card border-primary/20 bg-background/80 backdrop-blur-xl rounded-xl">
                          <p className="text-xs leading-relaxed text-foreground font-medium">
                            {m.description}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </div>

                    <div className="text-center md:absolute md:top-20 w-full px-2">
                      <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{m.company}</h3>
                      <Badge variant="outline" className="font-mono text-[9px] border-primary/20 text-muted-foreground uppercase tracking-widest px-2">
                        Hito {m.year}
                      </Badge>
                      
                      {/* Mobile description (visible without hover) */}
                      <p className="mt-4 text-xs text-muted-foreground leading-relaxed md:hidden">
                        {m.description}
                      </p>
                    </div>
                  </div>
                ))}
              </TooltipProvider>
            </div>
          </div>

          {/* Cierre Visual */}
          <div className="mt-20 p-8 glass-card rounded-3xl border-primary/10 bg-gradient-to-r from-primary/5 to-transparent flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <p className="text-accent font-bold text-[10px] uppercase tracking-[0.3em]">Status Actual</p>
              <h4 className="text-xl font-bold">Liderando la intersección entre código y estrategia.</h4>
            </div>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse delay-75" />
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-150" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
