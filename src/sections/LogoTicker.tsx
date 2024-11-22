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
    <section className="py-20 md:py-24 mt-5">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams</h2>
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
                <Image
                  key={index}
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  height={24}
                  width={96}
                  className="w-auto h-6"
                  priority={index < 5}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
