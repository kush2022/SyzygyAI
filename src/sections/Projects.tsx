"use client";
import project1 from "@/assets/wakiliProduct.png";
import project2 from "@/assets/product-image.png";
import project3 from "@/assets/product-image.png";
import project4 from "@/assets/product-image.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import React, { useState, useEffect } from "react";

// Add YouTube embed component
const YouTubeEmbed = ({ videoId }: { videoId: string }) => {
  return (
    <div className="relative w-full h-full">
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-2xl"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

// Add the featured project definition
const featuredProject = {
  title: "AI-Powered Analytics Dashboard",
  description: "Our flagship analytics platform that transforms complex data into actionable insights. Leveraging cutting-edge AI technology, this solution provides real-time visualization and predictive analytics to help businesses make informed decisions.",
  category: "Analytics",
  image: project1,
  link: "https://chat.wakili.org",
  rating: 4.9,
  reviewCount: 2341,
  price: {
    monthly: "$99",
    yearly: "$990"
  },
  stats: [
    {
      value: "99.9%",
      label: "Accuracy",
      trend: "+0.7%",
      description: "In predictions"
    },
    {
      value: "2.5M",
      label: "Analyses",
      trend: "+55%",
      description: "Per month"
    },
    {
      value: "80%",
      label: "Cost Saved",
      trend: "+25%",
      description: "Average"
    }
  ],
  videoId: "q2Exiefp_YA", // Extract video ID from URL
};

// Update projects to include ratings and more details
const topProjects = [
  {
    title: "Smart Home Automation System",
    description: "IoT-based home control and monitoring solution with advanced AI integration",
    category: "IoT Platform",
    image: project2,
    link: "https://example.com/project2",
    rating: 4.8,
    reviewCount: 1245,
    price: {
      monthly: "$49",
      yearly: "$490"
    }
  },
  {
    title: "E-commerce Marketplace",
    description: "Multi-vendor marketplace with AI-driven recommendations and analytics",
    category: "E-commerce",
    image: project3,
    link: "https://example.com/project3",
    rating: 4.7,
    reviewCount: 892,
    price: {
      monthly: "$79",
      yearly: "$790"
    }
  },
  {
    title: "Healthcare Management Platform",
    description: "Comprehensive patient care and hospital management system with predictive analytics",
    category: "Healthcare",
    image: project4,
    link: "https://example.com/project4",
    rating: 4.9,
    reviewCount: 756,
    price: {
      monthly: "$149",
      yearly: "$1490"
    }
  },
];

// Add VideoModal component
const VideoModal = ({ videoId, isOpen, onClose }: { videoId: string, isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={onClose}>
      <div className="relative w-full max-w-4xl aspect-video" onClick={e => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300"
        >
          Close
        </button>
        <iframe
          className="w-full h-full rounded-2xl"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export const Projects = () => {
  // Add state for modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto-open modal on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 1000); // Delay of 1 second

    return () => clearTimeout(timer);
  }, []);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <StarIcon
        key={index}
        className={`h-5 w-5 ${
          index < Math.floor(rating)
            ? 'text-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 md:py-24">
      <VideoModal 
        videoId={featuredProject.videoId}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      
      <div className="container">
        <h2 className="text-5xl md:text-6xl text-center tracking-tigher font-medium">
          Our Projects
        </h2>
        <p className="text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-xs md:max-w-md mx-auto">
          Transforming ideas into powerful solutions.
        </p>

        {/* Featured Project Section */}
        <div className="mt-16 mb-20">
          <h3 className="text-xl font-semibold text-white/80 mb-6">Featured Project</h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
              <div className="grid lg:grid-cols-5 gap-6 p-8">
                {/* Image Section - 2 columns */}
                <div className="lg:col-span-2 relative h-64 lg:h-full min-h-[400px] rounded-2xl overflow-hidden">
                  <YouTubeEmbed videoId={featuredProject.videoId} />
                </div>
                
                {/* Content Section - 3 columns */}
                <div className="lg:col-span-3 space-y-6">
                  {/* Header with Rating */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-white/90">{featuredProject.title}</h3>
                      <span className="text-sm text-white/50 px-3 py-1 rounded-full border border-white/15">
                        {featuredProject.category}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        {renderStars(featuredProject.rating)}
                      </div>
                      <span className="text-white/70">
                        {featuredProject.rating} ({featuredProject.reviewCount} reviews)
                      </span>
                    </div>
                  </div>

                  <p className="text-white/70">{featuredProject.description}</p>
                  
                  {/* Add pricing to featured project */}
                  <div className="flex items-center gap-4 mt-4">
                    <div className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm">
                      <span className="text-2xl font-bold text-[rgb(140,69,255)]">{featuredProject.price.monthly}</span>
                      <span className="text-white/60 text-sm">/month</span>
                    </div>
                    <div className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm">
                      <span className="text-2xl font-bold text-[rgb(140,69,255)]">{featuredProject.price.yearly}</span>
                      <span className="text-white/60 text-sm">/year</span>
                    </div>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {featuredProject.stats.map((stat, index) => (
                      <div key={index} className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                        <div className="text-[rgb(140,69,255)] font-bold text-2xl">
                          {stat.value}
                        </div>
                        <div className="text-white/90 font-medium">
                          {stat.label}
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-green-400 text-sm">
                            {stat.trend}
                          </span>
                          <span className="text-white/50 text-sm">
                            {stat.description}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Action Button */}
                  <a
                    href={featuredProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white bg-[rgb(140,69,255)] hover:bg-[rgb(140,69,255)]/80 transition-colors px-6 py-3 rounded-full backdrop-blur-sm"
                  >
                    Get Started Free
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
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Top Rated Projects Grid */}
        <div className="space-y-8">
          <h3 className="text-xl font-semibold text-white/80">Top Rated Solutions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 h-full group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Add pricing badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-white/90">
                      <span className="font-bold">{project.price.monthly}</span>
                      <span className="text-sm text-white/60">/mo</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <span className="text-sm text-white/90 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold text-white/90 group-hover:text-[rgb(140,69,255)] transition-colors">
                        {project.title}
                      </h4>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          {renderStars(project.rating)}
                        </div>
                        <span className="text-white/60 text-sm">
                          ({project.reviewCount} reviews)
                        </span>
                      </div>
                    </div>

                    <p className="text-white/70 text-sm">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between pt-4">
                      <div className="text-sm text-white/60">
                        <span className="block text-[rgb(140,69,255)] font-bold text-base">
                          {project.price.yearly}
                        </span>
                        <span>yearly billing</span>
                      </div>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[rgb(140,69,255)] hover:text-[rgb(140,69,255)]/80 transition-colors"
                      >
                        View Details
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
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 