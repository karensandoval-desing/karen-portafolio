
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { BrainCircuit, Code2, Users2, Zap } from "lucide-react";

export function StrategicProfile() {
  const portrait = PlaceHolderImages.find(img => img.id === 'karen-portrait');

  return (
    <section id="profile" className="py-24 relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Narrativo */}
          <div className="mb-16 max-w-4xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8">
              La Mente detrás del Sistema: <span className="text-gradient">Diseño con Propósito de Negocio</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed font-body">
              <p>
                Forjada en el dinámico ecosistema digital desde 2014, mi trayectoria no ha sido solo diseñar interfaces, sino orquestar soluciones. He entendido que un gran diseño es inútil si no es escalable, y que un código perfecto es invisible si no conecta con el usuario.
              </p>
              <p className="text-foreground">
                Mi diferencial radica en ser el <span className="font-bold text-primary">puente crítico</span>. Hablo el <span className="font-bold">lenguaje del desarrollador backend</span>, entiendo las <span className="font-bold">métricas del estratega de marketing</span> y ejecuto con la <span className="font-bold">sensibilidad de una directora de arte</span>.
              </p>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]">
            
            {/* Tarjeta 1: Estrategia & Producto (Grande) */}
            <div className="md:col-span-2 lg:row-span-2 glass-card p-8 rounded-[2rem] border-white/5 flex flex-col justify-between group hover:border-primary/30 transition-all duration-500">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-6">Estrategia & Producto</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground"><span className="text-foreground font-medium">Arquitectura de Información:</span> Flujos complejos.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground"><span className="text-foreground font-medium">Visión de Negocio:</span> Alineación de KPIs y ROI.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground"><span className="text-foreground font-medium">Gestión de Producto:</span> De ideación a Go-to-Market.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-white/5 mt-auto">
                <p className="text-xs font-bold uppercase tracking-widest text-primary/60">Estratégicamente Rentable</p>
              </div>
            </div>

            {/* Tarjeta 2: Perfil/Imagen (Vertical) */}
            <div className="md:col-span-1 lg:row-span-2 relative rounded-[2rem] overflow-hidden group border border-white/5 shadow-2xl">
              <Image 
                src={portrait?.imageUrl || ""} 
                alt="Karen Sandoval Portrait"
                fill
                className="object-cover transition-all duration-1000 group-hover:scale-105"
                data-ai-hint="professional woman portrait"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h4 className="text-2xl font-bold text-white mb-1">Karen Sandoval</h4>
                <p className="text-accent font-bold text-xs uppercase tracking-widest">The Bridge Specialist</p>
              </div>
            </div>

            {/* Tarjeta 3: Ejecución Técnica (Horizontal) */}
            <div className="md:col-span-2 lg:col-span-1 lg:row-span-1 glass-card p-6 rounded-[2rem] border-white/5 flex flex-col justify-center group hover:border-accent/30 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-5 h-5 text-accent" />
                <h3 className="font-bold text-lg">Ejecución Técnica</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                El puente entre la estética y la realidad del código.
              </p>
              <div className="flex flex-wrap gap-2">
                {['HTML5/SCSS', 'QA Staging', 'SEO', 'Performance'].map(tag => (
                  <Badge key={tag} variant="secondary" className="bg-white/5 text-[9px] px-2 py-0 border-white/5">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tarjeta 4: Liderazgo (Horizontal) */}
            <div className="md:col-span-2 lg:col-span-1 lg:row-span-1 glass-card p-6 rounded-[2rem] border-white/5 flex flex-col justify-center group hover:border-primary/30 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <Users2 className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-lg">Liderazgo</h3>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Mentoria senior para equipos creativos y traducción técnica para stakeholders. <span className="text-foreground">Capacidad de simplificar lo complejo.</span>
              </p>
            </div>
          </div>

          {/* Cierre de Sección: Karen Fact */}
          <div className="mt-24 text-center animate-in fade-in duration-1000 delay-500">
            <div className="inline-block relative">
              <div className="absolute -left-8 -top-4 text-4xl text-primary opacity-20 font-serif">"</div>
              <p className="text-xl md:text-2xl font-headline font-medium tracking-tight italic text-foreground px-4">
                Mi carácter profesional se define por una premisa simple: La calidad técnica no es negociable.
              </p>
              <div className="absolute -right-8 -bottom-4 text-4xl text-primary opacity-20 font-serif">"</div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-primary/30" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">Karen Fact</span>
              <div className="h-px w-12 bg-primary/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
