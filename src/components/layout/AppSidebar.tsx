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
      <SidebarHeader className="flex items-center justify-center pt-8 pb-12">
        <Link href="/">
          <Button 
            size="icon" 
            className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all duration-300"
          >
            <Home className="w-6 h-6" />
          </Button>
        </Link>
      </SidebarHeader>
      
      <SidebarContent className="flex flex-col items-center gap-8">
        <SidebarMenu className="items-center gap-8">
          {navItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton 
                asChild 
                tooltip={item.title}
                className="w-10 h-10 flex items-center justify-center p-0 rounded-xl hover:bg-sidebar-accent transition-colors"
              >
                <Link href={item.url}>
                  <item.icon className="w-5 h-5 text-sidebar-foreground group-hover:text-sidebar-accent-foreground" />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      
      <SidebarFooter className="flex flex-col items-center gap-6 pb-8">
        <Button variant="ghost" size="icon" className="w-10 h-10 p-0 overflow-hidden rounded-full hover:bg-sidebar-accent">
          <span className="text-lg">🇺🇸</span>
        </Button>
        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleTheme}
          className="w-10 h-10 p-0 rounded-full hover:bg-sidebar-accent text-sidebar-foreground"
        >
          {theme === "light" ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}