
"use client";

import { Briefcase, ShieldCheck, Users } from "lucide-react";

const experiences = [
  {
    company: "Aviatur",
    role: "Líder de Estrategia Digital & QA",
    period: "2014 - Presente",
    highlights: [
      "Gestión masiva de ecosistemas digitales escalables.",
      "Liderazgo de practicantes y formación de talento técnico.",
      "Validación rigurosa de QA técnico para asegurar despliegues impecables."
    ],
    icon: Users
  },
  {
    company: "Aecsa",
    role: "Visual Designer & Dashboard Specialist",
    highlights: [
      "Diseño de dashboards robustos para infraestructuras de TI.",
      "Optimización de flujos de trabajo técnicos complejos.",
      "Puente entre equipos de backend y usuarios finales."
    ],
    icon: ShieldCheck
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4">Trayectoria Distinguida</h2>
            <h3 className="font-headline text-3xl md:text-5xl font-bold">Liderazgo y Validación</h3>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="glass-card p-8 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <exp.icon className="w-32 h-32" />
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-primary">{exp.company}</h4>
                    <p className="text-lg font-medium">{exp.role}</p>
                  </div>
                  <span className="text-muted-foreground font-mono text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-4">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex gap-4 text-muted-foreground leading-relaxed">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Briefcase className="w-3 h-3" />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground italic text-lg">
              "Mi diferencial es ser el puente perfecto entre el diseño de alta fidelidad, la viabilidad técnica y la estrategia de negocio."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
