"use client";
import { useSidebar } from "@/context/SidebarContext";
import { DashboardHeader } from "./DashboardHeader";

export const DashboardContent = ({ children }: { children: React.ReactNode }) => {
  const { isCollapsed } = useSidebar();
  
  return (
    <div 
      style={{ 
        marginLeft: isCollapsed ? '72px' : '256px',
      }}
      className="flex-1 transition-all duration-300"
    >
      <DashboardHeader />
      <main className="p-4 md:p-6 lg:p-8 mt-16">
        {children}
      </main>
    </div>
  );
}; 