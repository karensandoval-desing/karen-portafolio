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
  LayoutGrid
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const navItems = [
  { title: "Perfil", url: "#capabilities", icon: User },
  { title: "Proyectos", url: "#projects", icon: Briefcase },
  { title: "Estrategia", url: "#ai-architect", icon: LayoutGrid },
  { title: "Contacto", url: "#contact", icon: Mail },
];

export function AppSidebar() {
  const [theme, setTheme] = React.useState<"light" | "dark">("dark");

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initialTheme);
    if (initialTheme === "dark") document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <Sidebar collapsible="none" className="w-[var(--sidebar-width)] border-r border-sidebar-border bg-sidebar overflow-hidden transition-all duration-300">
      <SidebarHeader className="flex flex-col items-center justify-center pt-8 pb-10">
        <Link href="/">
          <div className="relative group">
            <div className="absolute -inset-2 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            <Button 
              size="icon" 
              className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 relative z-10"
            >
              <Home className="w-6 h-6" />
            </Button>
          </div>
        </Link>
        <div className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60">
          Home
        </div>
      </SidebarHeader>
      
      <SidebarContent className="flex flex-col items-center px-4 gap-4">
        <SidebarMenu className="w-full gap-2">
          {navItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton 
                asChild 
                className="w-full h-10 px-3 flex items-center gap-3 rounded-lg hover:bg-sidebar-accent hover:text-primary transition-all group"
              >
                <Link href={item.url}>
                  <item.icon className="w-4 h-4 text-sidebar-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider opacity-80 group-hover:opacity-100">
                    {item.title}
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      
      <SidebarFooter className="flex flex-col items-center gap-4 pb-8">
        <div className="w-full h-px bg-sidebar-border/50 mb-2" />
        
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={toggleTheme}
          className="w-full flex items-center justify-start gap-3 px-3 h-10 text-sidebar-foreground hover:bg-sidebar-accent"
        >
          {theme === "light" ? (
            <>
              <Moon className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Modo Dark</span>
            </>
          ) : (
            <>
              <Sun className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Modo Light</span>
            </>
          )}
        </Button>

        <div className="flex items-center gap-2 px-3 w-full opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer">
          <span className="text-xs">🇺🇸</span>
          <span className="text-[9px] font-bold uppercase tracking-widest">English</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}