"use client";

import { Briefcase, ShieldCheck, Users, Rocket, Target, Award, Database, Cpu } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Aviatur",
    role: "Diseñadora Web",
    period: "2014 - Presente",
    highlights: [
      "Orquestación masiva de ecosistemas digitales para el holding de turismo líder.",
      "Liderazgo de practicantes y formación de talento técnico visual y front-end.",
      "Validación rigurosa de QA técnico para asegurar despliegues impecables."
    ],
    icon: Users
  },
  {
    company: "AECSA",
    role: "Diseñadora Web",
    highlights: [
      "Transformación de la gestión de cobranza y ventas mediante dashboards robustos para TI.",
      "Digitalización total del flujo de gestión de reportes estáticos a visualizaciones dinámicas.",
      "Puente entre equipos de backend y usuarios finales para optimizar infraestructuras TI."
    ],
    icon: ShieldCheck
  },
  {
    company: "Playconomy",
    role: "Product Strategy, UX & Visual Design",
    period: "Fase Lanzamiento",
    highlights: [
      "Diseño y estructuración integral del producto digital, incluyendo la creación de la identidad visual, sistema de iconografía, arquitectura de información y experiencia de usuario.",
      "Definición de la navegación, flujos y estructura funcional de la plataforma para tres actores principales: niños (compra y venta dentro de la plataforma), padres (control parental y supervisión de transacciones) y administrador (gestión operativa del sistema), alineando la experiencia con un modelo de negocio basado en e-commerce y gamificación financiera."
    ],
    icon: Rocket
  },
  {
    company: "Mi Trámite Ya",
    role: "Lead Front-End & Integration Specialist",
    period: "Fase Marcha Blanca",
    highlights: [
      "Simplificación de procesos burocráticos complejos en una experiencia de usuario fluida.",
      "Implementación de formularios dinámicos con validación lógica avanzada.",
      "Arquitectura 100% responsive con integración total de APIs de backend."
    ],
    icon: Target
  }
];

const achievements = [
  {
    title: "Incentivos & Reconocimientos",
    desc: "Distinciones internas, incentivos monetarios y ascensos obtenidos como reconocimiento al desempeño profesional y al impacto generado en la gestión de iniciativas digitales.",
    icon: Award
  },
  {
    title: "QA Digital y Validación de Implementaciones",
    desc: "Supervisión de entornos de prueba (staging), validación visual de interfaces y acompañamiento al equipo de desarrollo para asegurar consistencia entre diseño, experiencia de usuario y resultado final en producción.",
    icon: Database
  },
  {
    title: "Crecimiento de Talento",
    desc: "Mentoría de equipos técnicos, elevando el estándar de entrega visual y técnica de la compañía.",
    icon: Cpu
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4">Trayectoria Distinguida</h2>
            <h3 className="font-headline text-3xl md:text-5xl font-bold">Liderazgo y Resultados de Negocio</h3>
          </div>

          <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="glass-card p-8 rounded-2xl relative overflow-hidden group border-white/5 hover:border-primary/20 transition-all">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <exp.icon className="w-24 h-24" />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h4 className="text-2xl font-bold text-primary">{exp.company}</h4>
                      <p className="text-lg font-medium">{exp.role}</p>
                    </div>
                    {exp.period && (
                      <Badge variant="outline" className="w-fit h-fit mt-2 md:mt-0 font-mono text-[10px] border-primary/20 text-primary">
                        {exp.period}
                      </Badge>
                    )}
                  </div>
                  <ul className="space-y-3">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex gap-4 text-muted-foreground text-sm leading-relaxed">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <Briefcase className="w-2.5 h-2.5" />
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h5 className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] mb-6">Reconocimientos & Infraestructura</h5>
              {achievements.map((item, idx) => (
                <div key={idx} className="bg-background/40 p-6 rounded-2xl border border-white/5 hover:border-accent/20 transition-all group">
                  <item.icon className="w-6 h-6 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <h6 className="text-sm font-bold mb-2">{item.title}</h6>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}

              <div className="mt-8 p-8 glass-card rounded-2xl border-primary/20 bg-gradient-to-br from-primary/10 to-transparent">
                <h5 className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-4">Especialidad: Branding</h5>
                <p className="text-sm text-foreground italic leading-relaxed">
                  "Diseño identidades visuales estratégicamente rentables. Mi enfoque une el Storytelling Ejecutivo con la Arquitectura Digital para mercados premium."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
