"use client";
import { motion } from "framer-motion";

interface FloatingCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  position: "left" | "right";
  delay?: number;
  index: number;
}

export const FloatingCard = ({ title, description, icon, position, delay = 0, index }: FloatingCardProps) => {
  const getTopPosition = () => {
    const basePosition = 15;
    const increment = 30;
    return `${basePosition + (index * increment)}%`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: position === "left" ? -100 : 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay }}
      className={`absolute ${
        position === "left" 
          ? "left-4 md:left-8 lg:left-16" 
          : "right-4 md:right-8 lg:right-16"
      } max-w-[280px] backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hidden md:block z-10`}
      style={{
        top: getTopPosition(),
      }}
    >
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex flex-col gap-3"
      >
        <div className="w-12 h-12 bg-purple-600/30 rounded-xl flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-white/70">{description}</p>
      </motion.div>
    </motion.div>
  );
}; 