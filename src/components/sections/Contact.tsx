"use client";

import { Mail, Linkedin, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const whatsappUrl = "https://wa.me/573223655232?text=Hola%20Karen,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20contigo%20sobre%20una%20oportunidad%20profesional.";

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="glass-card rounded-[2rem] p-8 md:p-16 border-primary/10 bg-gradient-to-br from-card to-secondary/50 overflow-hidden relative">
          {/* Background Decorative Element */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="font-headline text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4">Contacto</h2>
              <h3 className="font-headline text-4xl md:text-5xl font-bold mb-8">Conectemos</h3>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-md">
                Si mi perfil se alinea con lo que tu equipo necesita, estaré encantada de conversar sobre oportunidades profesionales y proyectos digitales.
              </p>

              <div className="flex flex-col gap-4 mb-12">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-bold h-14 rounded-2xl shadow-xl shadow-primary/20 group w-full sm:w-fit"
                  asChild
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 w-5 h-5 fill-current" />
                    Hablemos por WhatsApp
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">WhatsApp</p>
                    <p className="text-base font-medium">+57 322 365 5232</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-8">
              <div className="grid gap-6">
                <a 
                  href="mailto:karensando.111@gmail.com" 
                  className="glass-card p-6 rounded-2xl border-white/5 flex items-center gap-6 group hover:border-primary/30 transition-all hover:bg-secondary/20"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Email Profesional</p>
                    <p className="text-lg font-medium">karensando.111@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/karensandoval-design/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="glass-card p-6 rounded-2xl border-white/5 flex items-center gap-6 group hover:border-primary/30 transition-all hover:bg-secondary/20"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">LinkedIn</p>
                    <p className="text-lg font-medium">Karen Sandoval</p>
                  </div>
                </a>
              </div>

              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 italic text-sm text-muted-foreground">
                "Busco integrar equipos que valoren la excelencia técnica y el pensamiento estratégico para escalar productos digitales con impacto real."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
