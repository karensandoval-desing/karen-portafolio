
"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { TrendingUp, CheckCircle2, Clock, Search, Zap, Workflow, Target, ShieldCheck, Layers } from "lucide-react";

const projects = [
  {
    id: "aviatur",
    title: "Aviatur (Escalabilidad Masiva)",
    role: "Ecosistema Architect & Lead QA",
    image: PlaceHolderImages.find(img => img.id === 'aviatur-project'),
    resumenEjecutivo: "Orquestación y despliegue masivo para el holding de turismo líder en Colombia, gestionando la identidad y operatividad de 130 agencias bajo un núcleo tecnológico centralizado.",
    desafioEstrategico: "La fragmentación visual y técnica que impedía la ejecución ágil de campañas masivas para aliados como NatGeo, Corona y Ecopetrol.",
    impacto: [
      { label: "Capacidad de Escala", value: "+760%", desc: "De 15 a 130+ sitios", icon: TrendingUp },
      { label: "Errores de Marca", value: "0%", desc: "Garantía QA técnica", icon: CheckCircle2 },
      { label: "Tiempo de Despliegue", value: "-50%", desc: "En actualizaciones", icon: Clock },
    ],
    tags: ["Ecosystem Design", "Scalability", "Visual Identity"]
  },
  {
    id: "bit-c",
    title: "Bit-C (Estrategia SEO y Producto)",
    role: "Bridge Specialist & SEO Strategist",
    image: PlaceHolderImages.find(img => img.id === 'bit-c-project'),
    resumenEjecutivo: "Optimización de activos digitales de alto rendimiento, actuando como el puente técnico entre el diseño UI y la realidad del desarrollo frontend y posicionamiento orgánico.",
    desafioEstrategico: "La falta de alineación entre la estética visual y los requerimientos técnicos de indexación y performance (Core Web Vitals).",
    impacto: [
      { label: "Landings Optimizadas", value: "12", desc: "SEO On-page nativo", icon: Search },
      { label: "Tiempo de Impl.", value: "-20%", desc: "Componentes DRY", icon: Zap },
      { label: "Eficiencia Hand-off", value: "+45%", desc: "Diseño a Dev", icon: Workflow },
    ],
    tags: ["Technical SEO", "Information Architecture", "UX Strategy"]
  },
  {
    id: "kaput",
    title: "Kaput (Emprendimiento 360°)",
    role: "Founder & Creative Director",
    image: PlaceHolderImages.find(img => img.id === 'kaput-project'),
    resumenEjecutivo: "Fundación y dirección de una agencia digital boutique especializada en branding estratégico y captación de C-Level (Ejecutivos de 35 a 55 años).",
    desafioEstrategico: "Penetrar un mercado corporativo de alta gama mediante una narrativa visual que combine autoridad y conversión digital.",
    impacto: [
      { label: "Market Fit", value: "70%", desc: "Segmento C-Level", icon: Target },
      { label: "Brand Equity", value: "100%", desc: "Control Omnicanal", icon: ShieldCheck },
      { label: "Estrategia 360°", value: "Growth", desc: "Influencer Rigor", icon: Layers },
    ],
    tags: ["Business Model", "Conversion", "Growth"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4">Selección de Proyectos</h2>
            <h3 className="font-headline text-3xl md:text-5xl font-bold leading-tight">Resultados Tangibles y Visión de Negocio</h3>
          </div>
          <div className="text-muted-foreground text-sm max-w-sm italic border-l border-primary/30 pl-4">
            Análisis de impacto basado en métricas de rendimiento y eficiencia operativa.
          </div>
        </div>

        <div className="space-y-40">
          {projects.map((project, idx) => (
            <div key={project.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-start`}>
              <div className="w-full lg:w-1/2 sticky top-24">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] border border-white/5 shadow-2xl">
                    <Image 
                      src={project.image?.imageUrl || ''} 
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000"
                      data-ai-hint={project.image?.imageHint}
                    />
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-primary/5 text-primary border-primary/20 text-[10px] uppercase tracking-wider px-3">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h4 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">{project.title}</h4>
                  <p className="text-accent font-bold text-sm uppercase tracking-widest">Mi Rol: {project.role}</p>
                </div>
                
                <div className="space-y-8">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] block">Resumen Ejecutivo</span>
                    <p className="text-foreground text-lg leading-relaxed font-medium">{project.resumenEjecutivo}</p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] block">El Desafío Estratégico</span>
                    <p className="text-muted-foreground text-base leading-relaxed">{project.desafioEstrategico}</p>
                  </div>

                  <div className="pt-6 space-y-4">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] block">Impacto</span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {project.impacto.map((item, i) => (
                        <div key={i} className="glass-card p-4 rounded-2xl border-white/5 bg-secondary/10 flex flex-col gap-2 hover:border-primary/20 transition-colors">
                          <div className="flex items-center justify-between">
                            <item.icon className="w-4 h-4 text-accent" />
                            <span className="text-2xl font-black text-primary tracking-tighter">{item.value}</span>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold text-foreground uppercase tracking-tight leading-none">{item.label}</p>
                            <p className="text-[9px] text-muted-foreground mt-1">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
