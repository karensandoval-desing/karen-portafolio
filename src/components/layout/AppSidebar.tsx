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
  { title: "Capacidades", url: "#capabilities", icon: User },
  { title: "Proyectos", url: "#projects", icon: Briefcase },
  { title: "AI Brief", url: "#ai-architect", icon: LayoutGrid },
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
    <Sidebar collapsible="none" className="w-[var(--sidebar-width)] border-r border-sidebar-border bg-sidebar overflow-hidden">
      <SidebarHeader className="flex items-center justify-center pt-5 pb-6">
        <Link href="/">
          <Button 
            size="icon" 
            className="w-7 h-7 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300"
          >
            <Home className="w-3.5 h-3.5" />
          </Button>
        </Link>
      </SidebarHeader>
      
      <SidebarContent className="flex flex-col items-center gap-5">
        <SidebarMenu className="items-center gap-5">
          {navItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton 
                asChild 
                tooltip={item.title}
                className="w-6 h-6 flex items-center justify-center p-0 rounded-lg hover:bg-sidebar-accent transition-colors"
              >
                <Link href={item.url}>
                  <item.icon className="w-3.5 h-3.5 text-sidebar-foreground group-hover:text-primary transition-colors" />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      
      <SidebarFooter className="flex flex-col items-center gap-3 pb-5">
        <Button variant="ghost" size="icon" className="w-6 h-6 p-0 overflow-hidden rounded-full hover:bg-sidebar-accent grayscale hover:grayscale-0 transition-all">
          <span className="text-[10px]">🇺🇸</span>
        </Button>
        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleTheme}
          className="w-6 h-6 p-0 rounded-full hover:bg-sidebar-accent text-sidebar-foreground"
        >
          {theme === "light" ? (
            <Moon className="w-3.5 h-3.5" />
          ) : (
            <Sun className="w-3.5 h-3.5" />
          )}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}