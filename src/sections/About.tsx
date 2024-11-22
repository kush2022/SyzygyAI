"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import teamImage from "@/assets/team.jpg"; // Add your team image
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "5+", label: "Years Experience" },
  { number: "50+", label: "Projects Completed" },
  { number: "30+", label: "Happy Clients" },
  { number: "99%", label: "Success Rate" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
};

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-24 overflow-hidden" ref={ref}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={scaleIn}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(140,69,255)] to-transparent opacity-30 mix-blend-overlay z-10" />
              <Image
                src={teamImage}
                alt="Our Team"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Stats overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-[rgb(140,69,255)]">
                      {stat.number}
                    </div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <motion.div
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-5xl font-medium tracking-tight">
                Crafting Digital
                <span className="text-[rgb(140,69,255)]"> Excellence</span>
              </h2>
            </motion.div>

            <motion.p
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              variants={fadeInUp}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-white/70 text-lg leading-relaxed"
            >
              We&apos;re a team of passionate developers, designers, and innovators dedicated 
              to transforming digital ideas into reality. With cutting-edge technology 
              and creative solutions, we help businesses thrive in the digital age.
            </motion.p>

            <motion.div
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              variants={fadeInUp}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-4">
                <div className="h-1 w-12 bg-[rgb(140,69,255)] rounded-full" />
                <p className="text-lg">Innovative Solutions</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-1 w-12 bg-[rgb(140,69,255)] rounded-full" />
                <p className="text-lg">Expert Team</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-1 w-12 bg-[rgb(140,69,255)] rounded-full" />
                <p className="text-lg">Client-Focused Approach</p>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              variants={fadeInUp}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="pt-6"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[rgb(140,69,255)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(140,69,255)]/90 transition-colors duration-300"
              >
                Get in Touch
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
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}; 