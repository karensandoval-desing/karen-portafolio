"use client";

import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="glass-card rounded-[2rem] p-8 md:p-16 border-primary/10 bg-gradient-to-br from-card to-secondary/50">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-headline text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4">Contacto</h2>
              <h3 className="font-headline text-4xl md:text-5xl font-bold mb-8">Iniciemos una conversación profesional</h3>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                ¿Tienes un proyecto en mente o buscas optimizar tu ecosistema digital? Estoy disponible para consultas estratégicas y colaboraciones técnicas de alto nivel.
              </p>

              <div className="space-y-6">
                <a href="mailto:ksandoval.visual@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Email</p>
                    <p className="text-lg font-medium">ksandoval.visual@gmail.com</p>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/karen-sandoval-visual/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">LinkedIn</p>
                    <p className="text-lg font-medium">Karen Sandoval</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-background/50 p-8 rounded-2xl border border-white/5">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Nombre</label>
                    <Input placeholder="John Doe" className="bg-background/80 border-white/10" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                    <Input placeholder="john@company.com" className="bg-background/80 border-white/10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Asunto</label>
                  <Input placeholder="Consulta profesional / Proyecto" className="bg-background/80 border-white/10" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Mensaje</label>
                  <Textarea placeholder="Cuéntame sobre tu visión o necesidades técnicas..." className="min-h-[150px] bg-background/80 border-white/10" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12">
                  Enviar Mensaje <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
