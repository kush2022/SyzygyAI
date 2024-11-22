"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const solutions = [
  {
    id: 1,
    title: "AI Strategy & Consulting",
    description:
      "Expert guidance to help businesses develop and implement effective AI strategies aligned with their goals.",
    image: "/images/consulting.jpg",
    features: [
      "AI readiness assessment",
      "Digital transformation roadmap",
      "ROI analysis",
      "Risk management",
    ],
  },
  {
    id: 2,
    title: "Custom AI Solutions",
    description:
      "Tailored AI applications designed to address your specific business challenges and requirements.",
    image: "/images/ai.jpg",
    features: [
      "Customized AI models",
      "Scalable architecture",
      "Industry-specific solutions",
      "Performance optimization",
    ],
  },
  {
    id: 3,
    title: "Data Management & Analysis",
    description:
      "Comprehensive data solutions from collection to insights, powering informed decision-making.",
    image: "/images/data_analysis.png",
    features: [
      "Data preprocessing",
      "Advanced analytics",
      "Predictive modeling",
      "Real-time insights",
    ],
  },
  // {
  //   id: 4,
  //   title: "Machine & Deep Learning",
  //   description:
  //     "State-of-the-art ML/DL solutions for complex pattern recognition and prediction tasks.",
  //   image: "/images/machine.jpg",
  //   features: [
  //     "Neural networks",
  //     "Pattern recognition",
  //     "Automated learning",
  //     "Model optimization",
  //   ],
  // },
  {
    id: 5,
    title: "Natural Language Processing",
    description:
      "Advanced NLP solutions for understanding and generating human language.",
    image: "/images/chatbot.png",
    features: [
      "Text analysis",
      "Sentiment analysis",
      "Language generation",
      "Chatbot development",
    ],
  },
  {
    id: 6,
    title: "Computer Vision",
    description:
      "Visual intelligence solutions for image and video analysis across industries.",
    image: "/images/computer_vision.png",
    features: [
      "Object detection",
      "Image recognition",
      "Video analytics",
      "Visual inspection",
    ],
  },
  {
    id: 7,
    title: "AI Integration & Deployment",
    description:
      "Seamless integration of AI solutions into existing systems and infrastructure.",
    image: "/images/ai_intergrations.png",
    features: [
      "Cloud deployment",
      "API development",
      "System integration",
      "Performance monitoring",
    ],
  },
  {
    id: 8,
    title: "AI Agents",
    description:
      "Autonomous AI agents that can perform complex tasks and decision-making.",
    image: "/images/agents.png",
    features: [
      "Autonomous agents",
      "Task automation",
      "Multi-agent systems",
      "Intelligent assistants",
    ],
  },
];

export const Features = () => {
  const [activeTab, setActiveTab] = useState(solutions[0].id);

  return (
    <section id="solutions" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container relative">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Comprehensive AI Solutions
        </h2>
        <p className="text-white/70 md:text-xl max-w-2xl mx-auto text-lg tracking-tight text-center mt-5">
          Transforming businesses through cutting-edge AI technologies and expert implementation
        </p>

        {/* Tabs Navigation */}
        <div className="mt-16 flex flex-wrap justify-center gap-2 px-4">
          {solutions.map((solution) => (
            <button
              key={solution.id}
              onClick={() => setActiveTab(solution.id)}
              className={cn(
                "px-4 py-2 rounded-full transition-all duration-300",
                activeTab === solution.id
                  ? "bg-purple-600 text-white"
                  : "bg-white/10 hover:bg-white/20"
              )}
            >
              {solution.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {solutions.map((solution) => {
            if (solution.id === activeTab) {
              return (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mt-12 grid md:grid-cols-2 gap-8 items-center"
                >
                  <div className="space-y-6 backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h3 className="text-3xl font-medium">{solution.title}</h3>
                    <p className="text-white/70 text-lg">{solution.description}</p>
                    <ul className="space-y-3">
                      {solution.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="h-2 w-2 bg-purple-600 rounded-full" />
                          <span className="text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-white/10">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-purple-900/30 to-transparent" />
                  </div>
                </motion.div>
              );
            }
            return null;
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};
