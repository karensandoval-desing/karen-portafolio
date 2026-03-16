"use client";

import * as React from "react";
import Link from "next/link";
import { 
  User, 
  Briefcase, 
  Mail,
  Home,
  Moon,
  Sun,
  Languages
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Inicio", url: "/", icon: Home },
  { title: "Perfil", url: "#capabilities", icon: User },
  { title: "Proyectos", url: "#projects", icon: Briefcase },
  { title: "Contacto", url: "#contact", icon: Mail },
];

export function AppSidebar() {
  const [theme, setTheme] = React.useState<"light" | "dark">("dark");

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initialTheme as "light" | "dark");
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className={cn(
      "fixed z-50 flex transition-all duration-300",
      // Mobile styles: Bottom bar
      "bottom-0 left-0 right-0 h-16 w-full flex-row items-center justify-around border-t border-border/30 bg-background/70 backdrop-blur-xl px-4",
      // Desktop styles: Left sidebar
      "md:top-0 md:bottom-auto md:left-0 md:h-full md:w-[60px] md:flex-col md:justify-start md:border-r md:border-t-0 md:pt-8 md:pb-10 md:px-0"
    )}>
      <TooltipProvider delayDuration={0}>
        {/* Logo/Home for Desktop only */}
        <div className="hidden md:flex items-center justify-center mb-10">
          <Link href="/">
            <div className="relative group">
              <div className="absolute -inset-2 bg-primary/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              <Button 
                size="icon" 
                className="w-10 h-10 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 relative z-10"
              >
                <Home className="w-5 h-5" />
              </Button>
            </div>
          </Link>
        </div>
        
        <div className="flex flex-row md:flex-col items-center justify-around md:justify-center w-full gap-2 md:gap-6">
          {/* Navigation Items */}
          {navItems.map((item) => {
            // Hide Home icon on mobile if we have specific space or want to keep it simple
            if (item.title === "Inicio" && typeof window !== 'undefined' && window.innerWidth < 768) return null;
            
            return (
              <Tooltip key={item.title}>
                <TooltipTrigger asChild>
                  <Link 
                    href={item.url}
                    className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-primary/10 hover:text-primary transition-all group"
                  >
                    <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="hidden md:block">
                  <p className="text-[10px] font-bold uppercase tracking-widest">{item.title}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}

          <div className="hidden md:block w-8 h-px bg-border/30 my-2" />

          {/* Theme Toggle */}
          <Tooltip>
            <TooltipTrigger asChild>
              <button 
                onClick={toggleTheme}
                className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-accent/10 hover:text-accent transition-all group"
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                ) : (
                  <Sun className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent side="right" className="hidden md:block">
              <p className="text-[10px] font-bold uppercase tracking-widest">Tema</p>
            </TooltipContent>
          </Tooltip>

          {/* Language Selector */}
          <Tooltip>
            <TooltipTrigger asChild>
              <button 
                className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-primary/10 transition-all group grayscale hover:grayscale-0"
              >
                <span className="text-lg">🇺🇸</span>
              </button>
            </TooltipTrigger>
            <TooltipContent side="right" className="hidden md:block">
              <p className="text-[10px] font-bold uppercase tracking-widest">English</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </nav>
  );
}