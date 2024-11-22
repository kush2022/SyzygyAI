"use client";
import { useState } from "react";
import { BellIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { useSidebar } from "@/context/SidebarContext";

export const DashboardHeader = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { isCollapsed } = useSidebar();

  return (
    <header 
      style={{ 
        left: isCollapsed ? '72px' : '256px'
      }}
      className={`fixed top-0 right-0 h-16 border-b border-white/10 bg-black/50 
        backdrop-blur-xl z-40 transition-all duration-300`}
    >
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        {/* Search Bar */}
        <div className="hidden md:block flex-1 max-w-xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(140,69,255)] focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-white/5 transition-colors">
            <BellIcon className="h-6 w-6" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-[rgb(140,69,255)] rounded-full"></span>
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-[rgb(140,69,255)]/20 flex items-center justify-center">
                <UserCircleIcon className="h-6 w-6" />
              </div>
              <span className="hidden md:block text-sm">John Doe</span>
            </button>

            {/* Dropdown Menu */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[rgba(140,69,255,0.1)] border border-white/10 rounded-lg backdrop-blur-xl py-1 shadow-xl">
                <div className="px-4 py-2 border-b border-white/10">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-white/60">john@example.com</p>
                </div>
                <a
                  href="/dashboard/profile"
                  className="block px-4 py-2 text-sm hover:bg-white/5 transition-colors"
                >
                  Profile Settings
                </a>
                <a
                  href="/dashboard/settings"
                  className="block px-4 py-2 text-sm hover:bg-white/5 transition-colors"
                >
                  Account Settings
                </a>
                <div className="border-t border-white/10">
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-white/5 transition-colors"
                    onClick={() => {
                      // Add logout logic here
                      console.log("Logging out...");
                    }}
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}; 