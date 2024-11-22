"use client";
import project1 from "@/assets/wakiliProduct.png";
import project2 from "@/assets/avatar-1.png";
import project3 from "@/assets/avatar-1.png";
import project4 from "@/assets/avatar-1.png";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time data visualization platform with predictive analytics",
    category: "Web Application",
    image: project1,
    link: "https://example.com/project1",
  },
  {
    title: "Smart Home Automation System",
    description: "IoT-based home control and monitoring solution",
    category: "IoT Platform",
    image: project2,
    link: "https://example.com/project2",
  },
  {
    title: "E-commerce Marketplace",
    description: "Multi-vendor marketplace with AI-driven recommendations",
    category: "E-commerce",
    image: project3,
    link: "https://example.com/project3",
  },
  {
    title: "Healthcare Management Platform",
    description: "Comprehensive patient care and hospital management system",
    category: "Healthcare",
    image: project4,
    link: "https://example.com/project4",
  },
];

export const Projects = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl text-center tracking-tigher font-medium">
          Our Projects
        </h2>
        <p className="text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-xs md:max-w-md mx-auto">
          Transforming ideas into powerful solutions.
        </p>
        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div 
            initial={{
              translateX: "-50%"
            }}
            animate={{
              translateX: "0"
            }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: "linear"
            }}
            className="flex gap-5 flex-none pr-5 -translate-x-1/2"
          >
            {[...projects, ...projects].map((project, index) => (
              <div
                key={`${project.title}-${index}`}
                className="border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xs flex-none"
              >
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-xl md:text-2xl tracking-tighter font-medium group-hover:text-[rgb(140,69,255)]">
                    {project.title}
                  </div>
                  <p className="text-white/70 mt-2 text-sm md:text-base">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-white/50 px-3 py-1 rounded-full border border-white/15">
                      {project.category}
                    </span>
                    <span className="text-sm text-[rgb(140,69,255)] flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                      View Project 
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
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                      </svg>
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 