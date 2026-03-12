
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Brain, Code2, Users, Star, Quote } from "lucide-react";

export function StrategicProfile() {
  const portrait = PlaceHolderImages.find(img => img.id === 'karen-portrait');

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-16 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8 max-w-4xl">
              La Mente detrás del Sistema: <span className="text-gradient">Diseño con Propósito de Negocio</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Forjada en el dinámico ecosistema digital desde 2014, mi trayectoria no ha sido solo diseñar interfaces, sino orquestar soluciones. He entendido que un gran diseño es inútil si no es escalable, y que un código perfecto es invisible si no conecta con el usuario. Mi diferencial radica en ser el puente crítico entre el backend, el marketing y la dirección de arte.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 min-h-[600px]">
            
            {/* Strategy & Product Card (Large) */}
            <div className="md:col-span-2 lg:col-span-2 glass-card rounded-[2rem] p-8 md:p-10 flex flex-col justify-between group hover:border-primary/30 transition-all duration-500 overflow-hidden relative">
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Brain className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Estrategia & Producto</h3>
                <ul className="space-y-3">
                  {["Arquitectura de Información", "Visión de Negocio", "Gestión de Producto"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
            </div>

            {/* Execution Card (Medium) */}
            <div className="glass-card rounded-[2rem] p-8 group hover:border-accent/30 transition-all duration-500 flex flex-col justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto mb-6 group-hover:rotate-12 transition-transform">
                <Code2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">Ejecución Técnica</h3>
              <p className="text-xs text-accent font-bold uppercase tracking-widest mb-4 opacity-70">(The Bridge)</p>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <span>Desarrollo Frontend</span>
                <span>QA & Validación</span>
                <span>Estrategia SEO Técnica</span>
              </div>
            </div>

            {/* Portrait Card (The unconventional integration) */}
            <div className="md:row-span-2 glass-card rounded-[2rem] overflow-hidden relative group">
              <Image 
                src={portrait?.imageUrl || ""} 
                alt="Karen Sandoval"
                fill
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                data-ai-hint="professional woman portrait"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-white/50 mb-1">Especialista</p>
                <p className="text-lg font-bold text-white tracking-tighter">Karen Sandoval</p>
              </div>
            </div>

            {/* Leadership Card (Long/Wide) */}
            <div className="md:col-span-2 lg:col-span-3 glass-card rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 group hover:border-primary/20 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <Users className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 tracking-tight">Liderazgo & Soft Skills</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-background/50 px-4 py-2 rounded-xl border border-white/5">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span className="text-sm font-medium">Mentoría Senior</span>
                  </div>
                  <div className="flex items-center gap-2 bg-background/50 px-4 py-2 rounded-xl border border-white/5">
                    <Quote className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Traducción Técnica para Stakeholders</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Karen Fact - Cierre de Sección */}
          <div className="mt-20 text-center animate-in fade-in duration-1000 delay-500">
            <div className="inline-block relative">
              <div className="absolute -left-8 -top-4 text-4xl text-primary opacity-20 font-serif">"</div>
              <p className="text-xl md:text-3xl font-headline font-medium tracking-tight italic text-foreground px-4">
                La calidad técnica no es negociable.
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
