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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
      <TooltipProvider delayDuration={0}>
        <SidebarHeader className="flex items-center justify-center pt-6 pb-8">
          <Link href="/">
            <div className="relative group">
              <div className="absolute -inset-1 bg-primary/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              <Button 
                size="icon" 
                className="w-8 h-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 relative z-10"
              >
                <Home className="w-4 h-4" />
              </Button>
            </div>
          </Link>
        </SidebarHeader>
        
        <SidebarContent className="flex flex-col items-center px-0 gap-4">
          <SidebarMenu className="w-full flex flex-col items-center gap-3">
            {navItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SidebarMenuButton 
                      asChild 
                      className="w-8 h-8 p-0 flex items-center justify-center rounded-lg hover:bg-sidebar-accent hover:text-primary transition-all group"
                    >
                      <Link href={item.url}>
                        <item.icon className="w-4 h-4 text-sidebar-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                      </Link>
                    </SidebarMenuButton>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p className="text-[10px] font-bold uppercase tracking-widest">{item.title}</p>
                  </TooltipContent>
                </Tooltip>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        
        <SidebarFooter className="flex flex-col items-center gap-4 pb-6">
          <div className="w-6 h-px bg-sidebar-border/50" />
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleTheme}
                className="w-8 h-8 text-sidebar-foreground hover:bg-sidebar-accent rounded-lg"
              >
                {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p className="text-[10px] font-bold uppercase tracking-widest">Tema</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div className="w-8 h-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                <span className="text-base">🇺🇸</span>
              </div>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p className="text-[10px] font-bold uppercase tracking-widest">English</p>
            </TooltipContent>
          </Tooltip>
        </SidebarFooter>
      </TooltipProvider>
    </Sidebar>
  );
}