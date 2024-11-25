"use client";

import Image from "next/image";
import shoshin from "@/assets/shoshin.png";
import mzawadi from "@/assets/mzawadi.png";
import wakiliAI from "@/assets/wakiliai.png";
import habahaba from "@/assets/habahaba.png";
import kalro from "@/assets/kalro.png"

import { motion } from "framer-motion";

export const LogoTicker = () => {
  const logos = [
    shoshin,
    mzawadi,
    wakiliAI,
    habahaba,
    kalro,
    shoshin,
    mzawadi,
    wakiliAI,
    habahaba,
    kalro,
  ];

  return (
    <section className="py-20 md:py-24 mt-5 relative">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      
      <div className="container relative z-10">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2 className="text-white/90 font-semibold text-lg md:text-xl">
              Trusted by top innovative teams
            </h2>
          </div>
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{
                translateX: "-50%",
              }}
              animate={{
                translateX: "0",
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex flex-none gap-14 pr-14 -translate-x-1/2"
            >
              {logos.map((logo, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors"
                >
                  <Image
                    src={logo}
                    alt={`Partner logo ${index + 1}`}
                    height={24}
                    width={96}
                    className="w-auto h-6 brightness-200 contrast-100"
                    priority={index < 5}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
