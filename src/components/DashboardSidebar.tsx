"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  HomeIcon,
  Squares2X2Icon,
  UserCircleIcon,
  CogIcon,
  ArrowLeftOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { useSidebar } from "@/context/SidebarContext";

const navigation = [
  { name: "Overview", href: "/dashboard", icon: HomeIcon },
  { name: "Solutions", href: "/dashboard/solutions", icon: Squares2X2Icon },
  { name: "Document Analysis", href: "/dashboard/document-analysis", icon: DocumentTextIcon },
  { name: "Profile", href: "/dashboard/profile", icon: UserCircleIcon },
  { name: "Settings", href: "/dashboard/settings", icon: CogIcon },
];

export const DashboardSidebar = () => {
  const pathname = usePathname();
  const { isCollapsed, setIsCollapsed } = useSidebar();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-[rgba(140,69,255,0.1)] border border-white/10"
      >
        <Bars3Icon className="h-6 w-6" />
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full z-50
          ${isCollapsed ? 'w-[72px]' : 'w-64'} 
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 transition-all duration-300
          bg-[rgba(140,69,255,0.1)] border-r border-white/10`}
      >
        <div className="flex flex-col h-full relative">
          {/* Collapse Toggle Button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden md:flex absolute -right-3 top-6 items-center justify-center p-1.5
              rounded-full bg-[rgb(140,69,255)] hover:bg-[rgb(140,69,255)]/80 transition-colors z-50"
          >
            {isCollapsed ? (
              <ChevronRightIcon className="h-3 w-3 text-white" />
            ) : (
              <ChevronLeftIcon className="h-3 w-3 text-white" />
            )}
          </button>

          {/* Mobile Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="md:hidden absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          {/* Logo */}
          <div className={`flex items-center gap-2 p-4 ${isCollapsed ? 'justify-center px-2' : ''}`}>
            <div className="h-8 w-8 rounded-lg bg-[rgb(140,69,255)] flex items-center justify-center flex-shrink-0">
              {/* Your logo here */}
            </div>
            {!isCollapsed && <span className="font-semibold">Dashboard</span>}
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 py-4">
            <ul className="space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors group
                        ${isActive
                          ? "bg-[rgb(140,69,255)] text-white"
                          : "text-white/70 hover:text-white hover:bg-white/10"
                        }
                        ${isCollapsed ? 'justify-center px-2' : ''}`}
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!isCollapsed && <span>{item.name}</span>}
                      {isCollapsed && (
                        <div className="absolute left-full ml-2 px-2 py-1 bg-black/80 text-white text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                          {item.name}
                        </div>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Bottom Section */}
          <div className={`p-4 border-t border-white/10 ${isCollapsed ? 'px-2' : ''}`}>
            <button 
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-white/70 
                hover:text-white hover:bg-white/10 w-full transition-colors group
                ${isCollapsed ? 'justify-center px-2' : ''}`}
            >
              <ArrowLeftOnRectangleIcon className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && <span>Logout</span>}
              {isCollapsed && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-black/80 text-white text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  Logout
                </div>
              )}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}; 