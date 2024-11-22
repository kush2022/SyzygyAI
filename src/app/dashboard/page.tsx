"use client";
import { motion } from "framer-motion";
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

// This would typically come from your backend/auth system
const mockUserPackage = "professional"; // basic, professional, or enterprise

const solutions = [
  {
    id: 1,
    name: "AI Analytics",
    description: "Advanced analytics powered by artificial intelligence",
    image: "/solution-analytics.jpg", // Add these images to your public folder
    requiredPackage: "basic",
    link: "/solutions/analytics",
  },
  {
    id: 2,
    name: "Smart Automation",
    description: "Automated workflow and process optimization",
    image: "/solution-automation.jpg",
    requiredPackage: "professional",
    link: "/solutions/automation",
  },
  {
    id: 3,
    name: "Predictive Insights",
    description: "Future-focused data predictions and insights",
    image: "/solution-insights.jpg",
    requiredPackage: "professional",
    link: "/solutions/insights",
  },
  {
    id: 4,
    name: "Enterprise Integration",
    description: "Full-scale enterprise system integration",
    image: "/solution-enterprise.jpg",
    requiredPackage: "enterprise",
    link: "/solutions/integration",
  },
];

const packageLevels = {
  basic: 1,
  professional: 2,
  enterprise: 3,
};

export default function Dashboard() {
  const hasAccess = (requiredPackage: string) => {
    return packageLevels[mockUserPackage as keyof typeof packageLevels] >= 
           packageLevels[requiredPackage as keyof typeof packageLevels];
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      <div className="container py-8 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-medium mb-1 text-white/90">Welcome to Your Dashboard</h1>
          <p className="text-white/50 text-sm mb-8">
            Current Package: <span className="text-[rgb(140,69,255)] capitalize">{mockUserPackage}</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {solutions.map((solution) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative group"
              >
                <div className="relative border border-white/[0.08] rounded-lg overflow-hidden bg-white/[0.02]">
                  <div className="relative h-40">
                    <Image
                      src={solution.image}
                      alt={solution.name}
                      fill
                      className="object-cover opacity-80"
                    />
                    {!hasAccess(solution.requiredPackage) && (
                      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center">
                        <div className="text-center p-4">
                          <LockClosedIcon className="h-8 w-8 mx-auto mb-2 text-[rgb(140,69,255)]" />
                          <p className="text-white/70">
                            Upgrade to <span className="text-[rgb(140,69,255)] capitalize">{solution.requiredPackage}</span> to unlock
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-medium text-white/90">{solution.name}</h3>
                      {hasAccess(solution.requiredPackage) ? (
                        <LockOpenIcon className="h-5 w-5 text-green-400" />
                      ) : (
                        <LockClosedIcon className="h-5 w-5 text-[rgb(140,69,255)]" />
                      )}
                    </div>
                    <p className="text-white/50 text-sm mb-4">{solution.description}</p>
                    
                    {hasAccess(solution.requiredPackage) ? (
                      <a
                        href={solution.link}
                        className="inline-flex items-center gap-2 text-[rgb(140,69,255)] hover:text-[rgb(140,69,255)]/80 transition-colors"
                      >
                        Access Solution
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    ) : (
                      <a
                        href="/pricing"
                        className="inline-flex items-center gap-2 text-[rgb(140,69,255)] hover:text-[rgb(140,69,255)]/80 transition-colors"
                      >
                        Upgrade Now
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 