"use client";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6 text-purple-400" />,
    title: "Phone",
    details: "+254 710 702 286",
    subtitle: "Mon-Fri from 8am to 5pm",
  },
  {
    icon: <Mail className="w-6 h-6 text-purple-400" />,
    title: "Email",
    details: "contact@syzygyai.com",
    subtitle: "Online support",
  },
  {
    icon: <MapPin className="w-6 h-6 text-purple-400" />,
    title: "Office",
    details: "Ngongo Road, Kingstone Residence",
    subtitle: "Nairobi, Kenya",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
      <div className="absolute w-full h-full">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-600/30 rounded-full filter blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-600/30 rounded-full filter blur-3xl opacity-50 animate-pulse delay-1000" />
      </div>

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl md:text-6xl font-medium tracking-tighter">
              Get in touch
            </h2>
            <p className="text-white/70 mt-4 text-lg">
              Have questions? We&apos;d love to hear from you. Send us a message and
              we&apos;ll respond as soon as possible.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-blue-600/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{info.title}</h3>
                <p className="text-white/90 font-medium mb-1">{info.details}</p>
                <p className="text-white/60 text-sm">{info.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white/70 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/70 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-white/70 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/70 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your message..."
                />
              </div>
              <Button>Send Message</Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
