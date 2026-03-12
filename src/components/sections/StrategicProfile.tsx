
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function StrategicProfile() {
  const portrait = PlaceHolderImages.find(img => img.id === 'karen-portrait');

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content Side */}
            <div className="animate-in fade-in slide-in-from-left-6 duration-1000">
              <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8">
                La Mente detrás del Sistema: <span className="text-gradient">Diseño con Propósito de Negocio</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-body">
                Forjada en el dinámico ecosistema digital desde 2014, mi trayectoria no ha sido solo diseñar interfaces, sino orquestar soluciones. He entendido que un gran diseño es inútil si no es escalable, y que un código perfecto es invisible si no conecta con el usuario. Mi diferencial radica en ser el puente crítico entre el backend, el marketing y la dirección de arte.
              </p>
            </div>

            {/* Right Image Side */}
            <div className="relative animate-in fade-in slide-in-from-right-6 duration-1000">
              <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden group border border-white/5 shadow-2xl">
                <Image 
                  src={portrait?.imageUrl || ""} 
                  alt="Karen Sandoval Portrait"
                  fill
                  className="object-cover object-center transition-all duration-1000 group-hover:scale-105"
                  data-ai-hint="professional woman portrait"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-60" />
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>

          {/* Karen Fact - Cierre de Sección */}
          <div className="mt-24 text-center animate-in fade-in duration-1000 delay-500">
            <div className="inline-block relative">
              <div className="absolute -left-8 -top-4 text-4xl text-primary opacity-20 font-serif">"</div>
              <p className="text-xl md:text-2xl font-headline font-medium tracking-tight italic text-foreground px-4">
                La calidad técnica no es negociable.
              </p>
              <div className="absolute -right-8 -bottom-4 text-4xl text-primary opacity-20 font-serif">"</div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-primary/30" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">Karen Fact</span>
              <div className="h-px w-12 bg-primary/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
