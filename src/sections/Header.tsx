import LogoIcon from "@/assets/logo.svg";
import { Button } from "@/components/Button";
import { MobileNav } from "@/components/MobileNav";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="container flex items-center justify-between py-4">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur relative">
          <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm p-4">
              <a
                href="#home"
                className="text-white/70 hover:text-white transition"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white/70 hover:text-white transition"
              >
                About Us
              </a>
              <a
                href="#solutions"
                className="text-white/70 hover:text-white transition"
              >
                Solutions
              </a>
              <a
                href="#pricing"
                className="text-white/70 hover:text-white transition"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-white/70 hover:text-white transition"
              >
                Contact Us
              </a>
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/signup"
              className="bg-[rgb(140,69,255)] text-white px-4 py-2 rounded-lg hover:bg-[rgb(140,69,255)]/90 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <Button>Join waitlist</Button>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};
