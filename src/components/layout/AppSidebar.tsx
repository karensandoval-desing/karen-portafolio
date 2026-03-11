
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
    <Sidebar collapsible="none" className="w-[60px] border-r border-border/30 bg-background/70 backdrop-blur-xl transition-all duration-300">
      <TooltipProvider delayDuration={0}>
        <SidebarHeader className="flex items-center justify-center pt-8 pb-10">
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
        </SidebarHeader>
        
        <SidebarContent className="flex flex-col items-center px-0 gap-6">
          <SidebarMenu className="w-full flex flex-col items-center gap-4">
            {navItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SidebarMenuButton 
                      asChild 
                      className="w-10 h-10 p-0 flex items-center justify-center rounded-xl hover:bg-primary/10 hover:text-primary transition-all group"
                    >
                      <Link href={item.url}>
                        <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
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
        
        <SidebarFooter className="flex flex-col items-center gap-6 pb-8">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleTheme}
                className="w-10 h-10 text-muted-foreground hover:bg-accent/10 hover:text-accent rounded-xl"
              >
                {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p className="text-[10px] font-bold uppercase tracking-widest">Tema</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div className="w-10 h-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                <span className="text-xl">🇺🇸</span>
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
