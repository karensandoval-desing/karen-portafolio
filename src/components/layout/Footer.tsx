
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-headline font-bold text-lg tracking-tighter">
            SANDOVAL<span className="text-primary">STRATEGICS</span>
          </div>
          <div className="text-muted-foreground text-sm font-medium">
            © {year} Karen Sandoval. Todos los derechos reservados.
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span className="hover:text-accent cursor-pointer transition-colors">Portafolio</span>
            <span className="hover:text-accent cursor-pointer transition-colors">Estrategia</span>
            <span className="hover:text-accent cursor-pointer transition-colors">Privacidad</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
