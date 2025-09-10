import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  BarChart3, 
  TrendingUp, 
  AlertTriangle, 
  Users, 
  Menu,
  X,
  Mountain,
  FileText,
  MountainSnow
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: BarChart3 },
  { title: "Forecasts", url: "/forecasts", icon: TrendingUp },
  { title: "Alerts", url: "/alerts", icon: AlertTriangle },
  { title: "Recent Rockfall", url: "/recent-rockfall", icon: FileText },
  { title: "Recent Landslide", url: "/recent-landslide", icon: MountainSnow },
  { title: "Team", url: "/team", icon: Users },
  { title: "Risk Analysis", url: "/risk-analysis", icon: TrendingUp },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  const getNavClass = (path: string) => {
    const active = isActive(path);
    return active 
      ? "bg-primary/10 text-primary border-r-2 border-primary glow-primary" 
      : "hover:bg-accent/50 hover:text-primary transition-all duration-200";
  };

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-72"} transition-all duration-300 border-r border-border/50`}
      collapsible="icon"
    >
      <SidebarContent className="bg-sidebar-background/95 backdrop-blur-sm">
        {/* Header */}
        <div className="p-6 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Mountain className="h-6 w-6 text-primary" />
            </div>
            {!collapsed && (
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  Rockfall
                </h2>
                <p className="text-sm text-muted-foreground">
                  Prediction System
                </p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup className="flex-1">
          <SidebarGroupLabel className="text-muted-foreground uppercase text-xs font-medium tracking-wider px-6 py-4">
            {!collapsed && "Navigation"}
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="space-y-2 px-3">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-12">
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/"}
                      className={`${getNavClass(item.url)} rounded-lg px-4 py-3 flex items-center gap-3 text-sm font-medium`}
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Footer */}
        <div className="p-6 border-t border-border/50">
          <div className="text-xs text-muted-foreground">
            {!collapsed && (
              <>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
                  <span>System Online</span>
                </div>
                <div>Last Update: {new Date().toLocaleTimeString()}</div>
              </>
            )}
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}