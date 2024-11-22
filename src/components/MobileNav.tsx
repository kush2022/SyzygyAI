"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import LogoIcon from "@/assets/logo.svg";
import { X } from "lucide-react";
import { Button } from "./Button";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  const menuItems = [
    ["Home", "#home"],
    ["About Us", "#about"],
    ["Solutions", "#solutions"],
    ["Pricing", "#pricing"],
    ["Contact Us", "#contact"],
  ];

  const handleClick = (url: string) => {
    setIsOpen(false);
    // Add small delay to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(url);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="relative z-50 text-white hover:text-purple-300 transition-colors"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-black/90 backdrop-blur-md text-white p-10 z-50"
          >
            <div className="flex justify-between items-center">
              <LogoIcon className="h-8 w-8" />
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-purple-300 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col h-full justify-center items-center gap-8"
            >
              {menuItems.map(([title, url], index) => (
                <div key={index} className="overflow-hidden">
                  <motion.div variants={mobileLinkVars}>
                    <a
                      href={url}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(url);
                      }}
                      className="text-3xl font-medium text-white hover:text-purple-300 transition-colors"
                    >
                      {title}
                    </a>
                  </motion.div>
                </div>
              ))}
              <div className="overflow-hidden">
                <motion.div variants={mobileLinkVars}>
                  <a href="#waitlist" onClick={() => setIsOpen(false)}>
                    <Button>Join waitlist</Button>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 