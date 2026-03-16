"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { 
  TrendingUp, 
  CheckCircle2, 
  Zap, 
  Monitor,
  Users2,
  Activity,
  ShieldCheck, 
  Layers,
  Info,
  Target
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
        justificacion: "Implementamos un \"Core System\" centralizado en colaboración con el área de TI, utilizando arquitectura modular SCSS para inyectar identidades visuales dinámicamente. Esta estrategia eliminó la redundancia técnica, permitiendo un escalamiento exponencial de +130 instancias con estabilidad absoluta y optimización de recursos."
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
    marcasAliadas: ["Autonal", "Cruz Verde Colombia y Chile", "Grupo Femsa"],
    resumenEjecutivo: "Colaboré en la definición estratégica y el diseño de producto, integrando el análisis de negocio con la arquitectura de experiencia (UX). Trabajé de la mano con el equipo de tecnología para asegurar la transición fluida de conceptos visuales (UI) a implementaciones técnicas viables, brindando soporte continuo durante el desarrollo. Mi aporte en la estructuración de la información ayudó a consolidar un ecosistema digital optimizado, donde el rendimiento y el posicionamiento orgánico fueron el resultado de un diseño funcional y centrado en la conversión.",
    desafioEstrategico: "Liderar la optimización del ecosistema web para equilibrar las propuestas visuales de los sitios con los estándares técnicos, indexación y Core Web Vitals, asegurando rendimiento, visibilidad en buscadores y consistencia en la experiencia digital.",
    impacto: [
      { 
        label: "PLATAFORMAS Y LANDINGS", 
        value: "12+", 
        desc: "Estrategia, UX, SEO y estructura digital", 
        icon: Monitor,
        justificacion: "Durante mi gestión en BIT-C, lideré la conceptualización y creación de más de 12 plataformas y landings para distintos productos y clientes. Esto incluyó el análisis de necesidades, definición de arquitectura de información, diseño de experiencias visuales intuitivas y optimización SEO desde la estructura del sitio. Entre estas soluciones se encuentran plataformas como Mi Trámite Ya y Móviliza Ya, además de sitios robustos como AUTONAL, donde se priorizó la jerarquía de contenidos, usabilidad y rendimiento web."
      },
      { 
        label: "REUNIONES ESTRATÉGICAS", 
        value: "50+", 
        desc: "Discovery y análisis", 
        icon: Users2,
        justificacion: "Participé y lideré más de 50 sesiones estratégicas con clientes, equipos de desarrollo y áreas internas para comprender necesidades de negocio, levantar requerimientos y definir soluciones digitales. Estas reuniones permitieron traducir objetivos comerciales en productos digitales funcionales, facilitando la toma de decisiones sobre arquitectura web, experiencia de usuario y alcance técnico de los proyectos."
      },
      { 
        label: "OPTIMIZACIÓN DIGITAL", 
        value: "+40%", 
        desc: "Mejoras en UX y SEO", 
        icon: Activity,
        justificacion: "A través de análisis continuo, investigación de tendencias y optimización de procesos digitales, impulsé mejoras significativas en la calidad de las soluciones web. Esto incluyó la optimización de arquitectura de información, buenas prácticas de SEO, apoyo técnico al equipo de desarrollo para mejorar implementaciones y ajustes en experiencia de usuario. Estas acciones contribuyeron a incrementar la eficiencia del desarrollo y la calidad del producto digital final."
      },
    ],
    tags: ["Technical SEO", "Information Architecture", "UX Strategy"]
  },
  {
    id: "kaput",
    title: "Kaput",
    role: "Digital Lead | Liderazgo estratégico",
    image: PlaceHolderImages.find(img => img.id === 'kaput-project'),
    marcasAliadas: ["Color Mocca", "Autonal", "Paladar Grill", "tia resentilia"],
    resumenEjecutivo: "Liderazgo en la estructuración y desarrollo de la presencia digital de Kaput, integrando estrategia de marca, marketing digital y posicionamiento online para mercados premium.",
    desafioEstrategico: "Construir una presencia digital estratégica que permitiera a Kaput conectar con audiencias ejecutivas y posicionarse como una agencia confiable en el mercado corporativo.",
    impacto: [
      { 
        label: "Market Fit", 
        value: "70%", 
        desc: "Segmento C-Level", 
        icon: Target,
        justificacion: "Las estrategias de posicionamiento y comunicación digital de Kaput fueron diseñadas específicamente para conectar con ejecutivos y tomadores de decisión entre los 35 y 55 años. A través del desarrollo del sitio web, narrativa de marca, contenidos estratégicos y enfoque en autoridad digital, se estructuró una propuesta de valor orientada al mercado corporativo. Esto permitió que aproximadamente el 70% del enfoque estratégico de la marca estuviera alineado con audiencias C-Level, priorizando mensajes, servicios y experiencias digitales que respondieran a las necesidades de este perfil de cliente."
      },
      { 
        label: "Control Brand Equity", 
        value: "100%", 
        desc: "Presencia Omnicanal", 
        icon: ShieldCheck,
        justificacion: "Se consolidó una presencia digital coherente y alineada en todos los puntos de contacto de la marca, incluyendo sitio web, redes sociales y piezas de comunicación digital. A través de lineamientos claros de branding, narrativa visual y consistencia en contenidos, se logró mantener control total sobre la percepción y comunicación de la marca en cada canal digital. Esto permitió fortalecer el reconocimiento de Kaput y garantizar una experiencia de marca consistente para clientes potenciales y audiencias estratégicas."
      },
      { 
        label: "Estrategia Omnicanal", 
        value: "360°", 
        desc: "Influencer Growth", 
        icon: Layers,
        justificacion: "La estrategia digital de Kaput se desarrolló bajo un enfoque 360°, integrando branding, marketing digital, creación de contenido e iniciativas de crecimiento para creadores e influencers. Esta visión permitió construir un ecosistema digital donde cada canal cumplía un rol dentro de la estrategia general: posicionamiento de marca, generación de visibilidad y desarrollo de oportunidades de colaboración entre marcas e influencers."
      },
    ],
    tags: ["Business Model", "Conversion", "Growth"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4">Selección de Proyectos</h2>
            <h3 className="font-headline text-3xl md:text-5xl font-bold leading-tight tracking-tight">Casos de Estudio Estratégicos</h3>
          </div>
          <div className="text-muted-foreground text-sm max-w-sm italic border-l border-primary/30 pl-4">
            Análisis de impacto basado en métricas reales de negocio. Haz clic en las tarjetas de impacto para visualizar la Justificación Técnica.
          </div>
        </div>

        <div className="space-y-24 md:space-y-40">
          {projects.map((project, idx) => (
            <div key={project.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 md:gap-16 items-start`}>
              {/* Visual Side */}
              <div className="w-full lg:w-1/2 md:sticky md:top-24">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] border border-border shadow-2xl bg-card">
                    <Image 
                      src={project.image?.imageUrl || ''} 
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000"
                      data-ai-hint={project.image?.imageHint}
                    />
                  </div>
                </div>

                {/* Trust Bar - Allied Logos */}
                <div className="mt-6 md:mt-8 px-4 md:px-6 py-4 glass-card rounded-2xl flex flex-wrap items-center justify-center gap-6 md:gap-12">
                  {project.marcasAliadas?.map((marca) => (
                    <span 
                      key={marca} 
                      className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50 hover:text-primary transition-all cursor-default grayscale hover:grayscale-0 dark:invert-0"
                    >
                      {marca}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-primary/5 text-primary border-primary/20 text-[9px] md:text-[10px] uppercase tracking-wider px-3">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h4 className="text-2xl md:text-4xl font-bold mb-3 tracking-tight">{project.title}</h4>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-secondary border border-border">
                    <p className="text-muted-foreground font-bold text-[9px] md:text-[10px] uppercase tracking-widest leading-none">Mi Rol: {project.role}</p>
                  </div>
                </div>
                
                <div className="space-y-6 md:space-y-8">
                  <div className="space-y-2">
                    <span className="text-[9px] md:text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] block">Resumen Ejecutivo</span>
                    <p className="text-foreground text-base md:text-lg leading-relaxed font-medium">{project.resumenEjecutivo}</p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[9px] md:text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] block">El Desafío Estratégico</span>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{project.desafioEstrategico}</p>
                  </div>

                  <div className="pt-4 md:pt-6 space-y-4">
                    <span className="text-[9px] md:text-[10px] font-bold text-primary uppercase tracking-[0.2em] block">Impacto</span>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {project.impacto.map((item, i) => (
                        <Dialog key={i}>
                          <DialogTrigger asChild>
                            <button className="glass-card p-4 rounded-2xl flex flex-col gap-2 hover:border-primary/50 transition-all text-left group cursor-pointer hover:bg-card active:scale-[0.98]">
                              <div className="flex items-center justify-between">
                                <item.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                                <span className="text-xl md:text-2xl font-black text-primary tracking-tighter">{item.value}</span>
                              </div>
                              <div>
                                <p className="text-[9px] md:text-[10px] font-bold text-foreground uppercase tracking-tight leading-none flex items-center gap-1">
                                  {item.label} <Info className="w-2.5 h-2.5 opacity-0 group-hover:opacity-40 transition-opacity" />
                                </p>
                                <p className="text-[8px] md:text-[9px] text-muted-foreground mt-1">{item.desc}</p>
                              </div>
                            </button>
                          </DialogTrigger>
                          <DialogContent className="bg-card/95 backdrop-blur-2xl sm:max-w-[500px] rounded-[2.5rem] p-6 md:p-8 max-h-[90vh] overflow-y-auto border-border shadow-2xl">
                            <DialogHeader>
                              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                                <ShieldCheck className="w-6 h-6" />
                              </div>
                              <DialogTitle className="text-xl md:text-2xl font-bold text-foreground mb-2">Justificación Técnica</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6">
                              <p className="text-foreground leading-relaxed italic text-base md:text-lg border-l-4 border-primary pl-4">
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
