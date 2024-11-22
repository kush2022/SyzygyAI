import Logo from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import InstagramSocial from "@/assets/social-instagram.svg";
import LinkedInSocial from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-5 boder-t border-white/15">
      <div className="container">
        <div className="flex flex-col gap-8 md:items-center lg:flex-row">
          <div className="flex gap-4 items-center lg:flex-1 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative border h-8 w-8 rounded-lg inline-flex justify-center items-center border-white/15 bg-black">
                <Logo className="h-6 w-6" />
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-lg font-semibold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                Syzygy
              </span>
              <span className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                AI
              </span>
            </div>
          </div>
          <nav className="flex flex-col gap-5 md:flex-row lg:gap-7 flex-1">
            <a href="#features" className="text-white/70 hover:text-white text-xs">
              Features
            </a>
            <a href="#pricing" className="text-white/70 hover:text-white text-xs">
              Pricing
            </a>
            <a href="#faq" className="text-white/70 hover:text-white text-xs">
              FAQ
            </a>
            <a href="#contact" className="text-white/70 hover:text-white text-xs">
              Contact
            </a>
          </nav>
          <div className="gap-5 flex md:flex-1">
            <XSocial className="text-white/40 hover:text-white transition" />
            <InstagramSocial className="text-white/40 hover:text-white transition" />
            <LinkedInSocial className="text-white/40 hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};
