
"use client";

import { Layout, Code, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const pillars = [
  {
    title: "Estrategia de Producto & UX",
    description: "Diseño de alta fidelidad centrado en el usuario, garantizando que cada interacción aporte valor real al negocio.",
    icon: Layout,
    features: ["User Research", "Wireframing", "Interactive Prototyping", "Design Systems"]
  },
  {
    title: "Desarrollo Visual & Front-end",
    description: "Validación técnica de la viabilidad del diseño. Entiendo el código (HTML/CSS/JS) para optimizar la implementación.",
    icon: Code,
    features: ["Web Performance", "Technical Viability", "Responsive Logic", "Component Design"]
  },
  {
    title: "Optimización de Negocio",
    description: "Gestión escalable enfocada en conversión, visibilidad orgánica y excelencia técnica a través de QA riguroso.",
    icon: TrendingUp,
    features: ["SEO Técnico", "QA Validation", "Conversion Optimization", "Project Management"]
  }
];

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4">Competencias Integradas</h2>
          <h3 className="font-headline text-3xl md:text-5xl font-bold">Tres Pilares Estratégicos</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <Card key={idx} className="glass-card border-none hover:bg-card/80 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <pillar.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl font-bold mb-2">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {pillar.description}
                </p>
                <ul className="space-y-2">
                  {pillar.features.map((feature, fIdx) => (
                    <li key={fIdx} className="text-xs font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
