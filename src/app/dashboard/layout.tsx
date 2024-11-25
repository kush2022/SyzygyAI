"use client";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { SidebarProvider, useSidebar } from "@/context/SidebarContext";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { isCollapsed } = useSidebar();

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <main className={`flex-1 transition-all duration-300 ${
        isCollapsed ? 'md:ml-[72px]' : 'md:ml-64'
      } ml-0`}>
        {children}
      </main>
    </div>
  );
};

export default function DashboardProviderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </SidebarProvider>
  );
} 