
"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { 
  TrendingUp, 
  CheckCircle2, 
  Zap, 
  Search, 
  Workflow, 
  Target, 
  ShieldCheck, 
  Layers,
  Info
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const projects = [
  {
    id: "aviatur",
    title: "Aviatur (Escalabilidad Masiva)",
    role: "Diseñadora Web",
    image: PlaceHolderImages.find(img => img.id === 'aviatur-project'),
    marcasAliadas: ["Ecopetrol", "NatGeo", "Corona", "Festiver"],
    resumenEjecutivo: "Formé parte activa de la articulación y transición hacia una infraestructura digital masiva para el holding de turismo más influyente de Colombia. Lideré la gestión de identidad y operatividad de 130 agencias independientes, garantizando una integridad visual impecable para cuentas críticas. Diseñé ecosistemas digitales y landings de alto impacto para marcas globales como NatGeo, Corona y Ecopetrol, interpretando de manera asertiva su ADN de marca y traduciéndolo en interfaces escalables dentro de nuestras plataformas tecnológicas.",
    desafioEstrategico: "La fragmentación visual y técnica que impedía la ejecución ágil de campañas masivas para aliados globales.",
    impacto: [
      { 
        label: "Capacidad de Escala", 
        value: "+760%", 
        desc: "De 15 a 130+ sitios", 
        icon: TrendingUp,
        justificacion: "Implementamos un \"Core System\" centralizado en colaboración con el área de TI, utilizando arquitectura modular SCSS para inyectar identidades visuales dinámicamente. Esta estrategia eliminó la redundancia técnica, permitiendo un escalamiento exponencial de +130 instancias con estabilidad absoluta."
      },
      { 
        label: "Errores de Marca", 
        value: "0%", 
        desc: "Garantía QA técnica", 
        icon: CheckCircle2,
        justificacion: "Para garantizar la integridad de marcas globales con manuales de identidad sumamente estrictos, se estableció un protocolo de QA Visual y técnico. Validaciones en entornos de componentes atómicos antes de cada despliegue masivo, asegurando que cada una de las 130 agencias reflejara la excelencia visual y fidelidad de marca exigida por los aliados."
      },
      { 
        label: "Tiempos de Despliegue", 
        value: "-50%", 
        desc: "En actualizaciones", 
        icon: Zap,
        justificacion: "La centralización de la lógica de negocio y estilos base permitió que las actualizaciones de seguridad y mejoras de UI se propagaran automáticamente por todo el ecosistema, optimizando los recursos operativos del holding."
      },
    ],
    tags: ["Ecosystem Design", "Scalability", "Visual Identity"]
  },
  {
    id: "bit-c",
    title: "Bit-C (Ciclo de Vida & Diseño de Producto)",
    role: "Diseñadora web | Diseñadora UX UI | Lider Digital",
    image: PlaceHolderImages.find(img => img.id === 'bit-c-project'),
    marcasAliadas: ["Bit-C", "Fintech Labs", "Crypto Connect"],
    resumenEjecutivo: "Colaboré en la definición estratégica y el diseño de producto, integrando el análisis de negocio con la arquitectura de experiencia (UX). Trabajé de la mano con el equipo de tecnología para asegurar la transición fluida de conceptos visuales (UI) a implementaciones técnicas viables, brindando soporte continuo durante el desarrollo. Mi aporte en la estructuración de la información ayudó a consolidar un ecosistema digital optimizado, donde el rendimiento y el posicionamiento orgánico fueron el resultado de un diseño funcional y centrado en la conversión.",
    desafioEstrategico: "Liderar la optimización del ecosistema web para equilibrar las propuestas visuales de los sitios con los estándares técnicos, indexación y Core Web Vitals, asegurando rendimiento, visibilidad en buscadores y consistencia en la experiencia digital.",
    impacto: [
      { 
        label: "Landings SEO", 
        value: "12", 
        desc: "Optimizadas desde código", 
        icon: Search,
        justificacion: "Rediseñamos el DOM para priorizar la jerarquía de encabezados (H1-H3) y la carga de recursos críticos, asegurando una indexación impecable y tiempos de respuesta bajo los estándares de Core Web Vitals."
      },
      { 
        label: "Tiempo Dev", 
        value: "-20%", 
        desc: "Componentes DRY", 
        icon: Zap,
        justificacion: "La creación de una librería de componentes en HTML5/CSS3 validados eliminó la fricción entre el equipo creativo y el desarrollo backend, acelerando el ciclo de entrega."
      },
      { 
        label: "Eficiencia Hand-off", 
        value: "+45%", 
        desc: "Diseño a Dev", 
        icon: Workflow,
        justificacion: "Establecimos un sistema de diseño técnico que sirvió como lenguaje común, reduciendo drásticamente las iteraciones correctivas durante la fase de implementación."
      },
    ],
    tags: ["Technical SEO", "Information Architecture", "UX Strategy"]
  },
  {
    id: "kaput",
    title: "Kaput (Emprendimiento 360°)",
    role: "Founder & Creative Director",
    image: PlaceHolderImages.find(img => img.id === 'kaput-project'),
    marcasAliadas: ["C-Level Network", "B2B Elite", "Growth Partners"],
    resumenEjecutivo: "Fundación y dirección de una agencia digital boutique especializada en branding estratégico y captación de C-Level (Ejecutivos de 35 a 55 años).",
    desafioEstrategico: "Penetración de mercado corporativo mediante narrativa visual de autoridad y conversión digital.",
    impacto: [
      { 
        label: "Market Fit", 
        value: "70%", 
        desc: "Segmento C-Level", 
        icon: Target,
        justificacion: "Diseñamos un embudo de conversión 'High-Ticket' donde cada punto de contacto visual fue curado para transmitir el rigor ejecutivo necesario para cerrar contratos B2B."
      },
      { 
        label: "Control Brand Equity", 
        value: "100%", 
        desc: "Presencia Omnicanal", 
        icon: ShieldCheck,
        justificacion: "Validamos la consistencia de marca mediante el análisis de tasa de respuesta y calidad de leads, asegurando que el storytelling fuera coherente en todas las plataformas."
      },
      { 
        label: "Estrategia Omnicanal", 
        value: "360°", 
        desc: "Influencer Growth", 
        icon: Layers,
        justificacion: "Orquestamos estrategias de crecimiento que integraron marketing de influencia con ecosistemas digitales propios, optimizando el retorno de inversión de la agencia."
      },
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
            <h3 className="font-headline text-3xl md:text-5xl font-bold leading-tight">Casos de Estudio Estratégicos</h3>
          </div>
          <div className="text-muted-foreground text-sm max-w-sm italic border-l border-primary/30 pl-4">
            Análisis de impacto basado en métricas reales de negocio. Haz clic en las tarjetas de impacto para visualizar la Justificación Técnica.
          </div>
        </div>

        <div className="space-y-40">
          {projects.map((project, idx) => (
            <div key={project.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-start`}>
              {/* Visual Side */}
              <div className="w-full lg:w-1/2 sticky top-24">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] border border-white/5 shadow-2xl bg-card">
                    <Image 
                      src={project.image?.imageUrl || ''} 
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000"
                      data-ai-hint={project.image?.imageHint}
                    />
                  </div>
                </div>

                {/* Trust Bar - Logos aliadas */}
                <div className="mt-8 px-6 py-4 glass-card rounded-2xl border-white/5 flex flex-wrap items-center justify-center gap-8 md:gap-12 animate-in fade-in duration-700">
                  {project.marcasAliadas?.map((marca) => (
                    <span 
                      key={marca} 
                      className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40 hover:text-accent transition-all cursor-default grayscale hover:grayscale-0 hover:opacity-100 hover:scale-110"
                    >
                      {marca}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Side */}
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
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-accent/10 border border-accent/20">
                    <p className="text-accent font-bold text-[10px] uppercase tracking-widest">Mi Rol: {project.role}</p>
                  </div>
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
                        <Dialog key={i}>
                          <DialogTrigger asChild>
                            <button className="glass-card p-4 rounded-2xl border-white/5 bg-secondary/10 flex flex-col gap-2 hover:border-primary/20 transition-all text-left group cursor-pointer hover:bg-secondary/20 active:scale-[0.98]">
                              <div className="flex items-center justify-between">
                                <item.icon className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                                <span className="text-2xl font-black text-primary tracking-tighter">{item.value}</span>
                              </div>
                              <div>
                                <p className="text-[10px] font-bold text-foreground uppercase tracking-tight leading-none flex items-center gap-1">
                                  {item.label} <Info className="w-2.5 h-2.5 opacity-0 group-hover:opacity-40 transition-opacity" />
                                </p>
                                <p className="text-[9px] text-muted-foreground mt-1">{item.desc}</p>
                              </div>
                            </button>
                          </DialogTrigger>
                          <DialogContent className="glass-card border-primary/20 bg-background/80 backdrop-blur-2xl sm:max-w-[500px] rounded-[2rem] p-8">
                            <DialogHeader>
                              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                                <ShieldCheck className="w-6 h-6" />
                              </div>
                              <DialogTitle className="text-2xl font-bold text-gradient mb-2">Justificación Técnica</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6">
                              <p className="text-foreground leading-relaxed italic text-lg border-l-2 border-accent pl-4">
                                {item.justificacion}
                              </p>
                            </div>
                          </DialogContent>
                        </Dialog>
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
