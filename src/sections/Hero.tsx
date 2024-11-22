"use client";
import { Button } from "@/components/Button";
import startsBg from "@/assets/stars.png";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { FloatingActions } from "@/components/FloatingActions";
import { FloatingCard } from "@/components/FloatingCard";
import { Bot, Brain, Sparkles } from "lucide-react";

export const Hero = () => {
  const sectionRef = useRef(null);
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
    <>
      <motion.section
        id="home"
        ref={sectionRef}
        className="h-[492px] md:h-[800px] mt-5 flex items-center relative overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
        style={{
          backgroundImage: `url(${startsBg.src})`,
          backgroundPositionY,
        }}
        animate={{
          backgroundPositionX: startsBg.width,
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <FloatingCard
          position="left"
          icon={<Bot className="w-6 h-6 text-purple-300" />}
          title="AI Chatbot"
          description="24/7 customer support with our advanced AI chatbot. Handles multiple languages and complex queries."
          delay={0.2}
          index={0}
        />
        
        <FloatingCard
          position="right"
          icon={<Brain className="w-6 h-6 text-purple-300" />}
          title="AI Agents"
          description="Autonomous AI agents that can handle complex tasks and workflows automatically."
          delay={0.4}
          index={1}
        />
        
        <FloatingCard
          position="left"
          icon={<Sparkles className="w-6 h-6 text-purple-300" />}
          title="Smart Automation"
          description="Streamline your business processes with intelligent automation solutions."
          delay={0.6}
          index={2}
        />
        <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5),rgb(12,0,36,.5)_78%,transparent)]"></div>
        {/* Start planent */}
        <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
        {/* End planet */}
        {/* Start Ring */}
        <motion.div
          animate={{
            rotate: "1turn",
          }}
          style={{
            translateY: "-50%",
            translateX: "-50%",
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border border-white/20 opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div>
            <div className="absolute h-4 w-4 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute h-4 w-4 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute h-6 w-6 left-full border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </motion.div>
        {/* End Ring */}
        {/* Start Dashed */}
        <motion.div
          style={{
            translateY: "-50%",
            translateX: "-50%",
          }}
          animate={{
            rotate: "-1turn",
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 60,
          }}
          className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"
        ></motion.div>
        {/* End Dashed */}
        {/* Start Dashed */}
        <div className="absolute h-[544px] w-[544px]  md:h-[980px] md:w-[980px] rounded-full border border-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
        {/* End Dashed */}
        <div className="container relative mt-16">
          <div className="relative">
            <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter text-center p-4">
              <span className="inline-block relative">
                <span className="absolute -inset-2 blur-3xl bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-3xl"></span>
                <span className="relative bg-gradient-to-r from-white via-purple-200 to-purple-600 text-transparent bg-clip-text">
                  Syzygy
                </span>
              </span>{" "}
              <span className="inline-block relative">
                <span className="absolute -inset-2 blur-3xl bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-3xl"></span>
                <span className="relative bg-gradient-to-r from-purple-400 to-purple-800 text-transparent bg-clip-text">
                  AI
                </span>
              </span>
            </h1>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-[100px] opacity-50"></div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-[100px] opacity-50"></div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <p className="text-lg md:text-xl text-white/70 mt-7 text-center max-w-xl mx-auto">
              Where cosmic intelligence meets earthly ambition. Transform your business with 
              AI solutions that take you light-years ahead of the competition.
            </p>
            <div className="flex justify-center mt-5">
              <Button>Get Started</Button>
            </div>
          </motion.div>
        </div>
      </motion.section>
      <FloatingActions />
    </>
  );
};
