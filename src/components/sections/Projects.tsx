
"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projects = [
  {
    id: "aviatur",
    title: "Aviatur (Escalabilidad Masiva)",
    image: PlaceHolderImages.find(img => img.id === 'aviatur-project'),
    star: {
      s: "Gestión de 130 agencias con identidades visuales independientes bajo una infraestructura común.",
      t: "Estandarizar procesos y crear Key Visuals para marcas globales como NatGeo y Corona.",
      a: "Desarrollo de un ecosistema escalable que permitió la administración técnica centralizada.",
      r: "Administración simultánea de +100 sitios y obtención de incentivos por gestión eficiente."
    },
    tags: ["Ecosystem Design", "Scalability", "Visual Identity"]
  },
  {
    id: "bit-c",
    title: "Bit-C (Estrategia SEO y Producto)",
    image: PlaceHolderImages.find(img => img.id === 'bit-c-project'),
    star: {
      s: "Necesidad de posicionamiento orgánico en un mercado altamente competitivo.",
      t: "Liderar el puente entre diseño y desarrollo para mejorar la arquitectura técnica del contenido.",
      a: "Optimización SEO técnica profunda en 12 páginas de servicios estratégicos.",
      r: "Mejora significativa en indexación y visibilidad orgánica mediante arquitectura estructurada."
    },
    tags: ["Technical SEO", "Information Architecture", "UX Strategy"]
  },
  {
    id: "kaput",
    title: "Kaput (Emprendimiento 360°)",
    image: PlaceHolderImages.find(img => img.id === 'kaput-project'),
    star: {
      s: "Creación de una agencia desde cero dirigida a tomadores de decisión (C-Level).",
      t: "Definir un modelo de servicios que integre crecimiento digital con validación de negocio.",
      a: "Implementación de landings de alta conversión e integración de Influencer Growth.",
      r: "Captación constante de leads calificados y consolidación de un modelo de servicios integral."
    },
    tags: ["Business Model", "Conversion", "Growth"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4">Selección de Proyectos</h2>
            <h3 className="font-headline text-3xl md:text-5xl font-bold leading-tight">Impacto Cuantitativo y Visión Estratégica</h3>
          </div>
          <div className="text-muted-foreground text-sm max-w-sm italic">
            Metodología STAR: Situación, Tarea, Acción y Resultado.
          </div>
        </div>

        <div className="space-y-32">
          {projects.map((project, idx) => (
            <div key={project.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/5">
                  <Image 
                    src={project.image?.imageUrl || ''} 
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    data-ai-hint={project.image?.imageHint}
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-primary/5 text-primary border-primary/20 hover:bg-primary/10">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h4 className="text-2xl md:text-3xl font-bold mb-8">{project.title}</h4>
                
                <div className="grid gap-6">
                  <div className="border-l-2 border-primary/30 pl-6">
                    <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-1">Situación</span>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.star.s}</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-6">
                    <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-1">Tarea</span>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.star.t}</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-6">
                    <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-1">Acción</span>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.star.a}</p>
                  </div>
                  <div className="border-l-2 border-accent/50 pl-6 bg-accent/5 py-4 rounded-r-lg">
                    <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-1">Resultado</span>
                    <p className="text-foreground font-medium text-base">{project.star.r}</p>
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
