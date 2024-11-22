"use client";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export const FloatingActions = () => {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      {/* Call Button */}
      <motion.a
        href="tel:+1234567890"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="flex items-center justify-center w-14 h-14 bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 transition-colors cursor-pointer group"
      >
        <Phone className="w-6 h-6 text-white" />
        <span className="absolute right-full mr-4 bg-white text-purple-600 px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Call Us
        </span>
      </motion.a>

      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="flex items-center justify-center w-14 h-14 bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 transition-colors cursor-pointer group"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="absolute right-full mr-4 bg-white text-purple-600 px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Chat with us
        </span>
      </motion.button>
    </div>
  );
}; 