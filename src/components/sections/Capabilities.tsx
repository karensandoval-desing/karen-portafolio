
"use client";

import { Palette, MousePointer2, Code2, Database, BrainCircuit, Fingerprint } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const pillars = [
  {
    title: "Estrategia & Branding",
    icon: Fingerprint,
    features: ["Storytelling Ejecutivo", "Identidad Visual", "Arquitectura de Marca", "Diferenciación de Mercado"]
  },
  {
    title: "Diseño & UX",
    icon: MousePointer2,
    features: ["User Research", "Wireframing", "Prototyping High-Fi", "Usability Testing", "Figma Expert"]
  },
  {
    title: "Front-end Tech",
    icon: Code2,
    features: ["HTML5 / CSS3 / SCSS", "Tailwind / Bootstrap", "Angular", "JavaScript / TypeScript"]
  },
  {
    title: "Negocio & SEO",
    icon: Database,
    features: ["SEO Técnico", "Core Web Vitals", "Conversión (CRO)", "E-commerce (Shopify/WP)"]
  },
  {
    title: "Ecosistemas IA",
    icon: BrainCircuit,
    features: ["GenAI Strategy", "Midjourney", "Prompt Engineering", "Workflow Automation"]
  }
];

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight">Especialidades <span className="text-gradient">Integradas</span></h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
            Combinando diseño de alta fidelidad con viabilidad técnica para optimizar el rendimiento operativo y de negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="bg-secondary/20 dark:bg-sidebar-background/40 p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <pillar.icon className="h-5 w-5 text-primary" />
                <h3 className="text-sm font-bold tracking-tight">{pillar.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {pillar.features.map((feature, fIdx) => (
                  <Badge 
                    key={fIdx} 
                    variant="secondary" 
                    className="bg-sidebar-background/60 text-[10px] py-0.5 px-2 font-medium border-white/5 hover:bg-primary/20 transition-colors"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
