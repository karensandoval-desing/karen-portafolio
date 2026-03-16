"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";

export function Navbar() {
  // En este diseño de sidebar lateral, el Navbar se simplifica
  // para ser solo un logo visible en móviles o un trigger.
  return (
    <header className="sticky top-0 w-full z-40 border-b border-border/30 bg-background/70 backdrop-blur-xl md:hidden">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
        </div>
      </div>
    </header>
  );
}
