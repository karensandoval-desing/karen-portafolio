
"use client";

import * as React from "react";
import Link from "next/link";
import { 
  Layout, 
  Code, 
  TrendingUp, 
  Briefcase, 
  Sparkles, 
  Mail,
  Home
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Inicio", url: "/", icon: Home },
  { title: "Capacidades", url: "#capabilities", icon: Layout },
  { title: "Proyectos", url: "#projects", icon: Briefcase },
  { title: "Experiencia", url: "#experience", icon: TrendingUp },
  { title: "AI Brief", url: "#ai-architect", icon: Sparkles },
  { title: "Contacto", url: "#contact", icon: Mail },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center gap-2 font-headline font-bold text-lg tracking-tighter">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-xs">S</div>
          <span className="group-data-[collapsible=icon]:hidden">
            SANDOVAL<span className="text-primary">STRATEGICS</span>
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegación</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <Link href={item.url}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-border/50">
        <div className="flex flex-col gap-1 group-data-[collapsible=icon]:hidden">
          <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Desde 2014</p>
          <p className="text-xs font-medium text-foreground">Karen Sandoval</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
