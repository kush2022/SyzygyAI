import { Hero } from "@/sections/Hero";
import { Features } from "@/sections/Features";
import { CallToAction } from "@/sections/CallToAction";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Testimonials } from "@/sections/Testimonials";
import { Pricing } from "@/sections/Pricing";
import { LogoTicker } from "@/sections/LogoTicker";
import { Header } from "@/sections/Header";
import { Projects } from "@/sections/Projects";
import { About } from "@/sections/About";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <LogoTicker />
      <About />
      <Features />
      <Projects />
      <Testimonials />
      <Pricing />
      <CallToAction />
      <Contact />
      <Footer />
    </main>
  );
}
