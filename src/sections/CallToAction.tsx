"use client";
import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";
import gridLinesBg from "@/assets/grid-lines.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export const CallToAction = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    // Convert to percentage positions
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <section 
      ref={sectionRef} 
      className="py-20 md:py-24"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 50, y: 50 })}
    >
      <div className="container">
        <motion.div
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative group"
          style={{
            backgroundImage: `url(${starsBg.src})`,
            backgroundPositionY,
          }}
          animate={{
            backgroundPositionX: starsBg.width,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="absolute inset-0 bg-[rgb(94,42,168)] bg-blend-overlay"
            style={{
              backgroundImage: `url(${gridLinesBg.src})`,
              maskImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, black 0%, transparent 25%)`,
              WebkitMaskImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, black 0%, transparent 25%)`
            }}
          />
          <div className="relative">
            <h2 className="text-5xl md:text-6xl max-w-md mx-auto tracking-tighter text-center font-medium">
              AI-driven Business Insights
            </h2>
            <p className="text-center text-lg tex-white/70 px-4 mt-5 tracking-tighter">
              Achieve clear, impactful results without complexity.
            </p>
            <div className="flex justify-center mt-5">
              <Button>Join waitlist</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
