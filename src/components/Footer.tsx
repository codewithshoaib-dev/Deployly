import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-neutral-900 via-neutral-800 to-neutral-900 border-t border-neutral-800 text-neutral-400 text-sm px-6 py-12 shadow-lg">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Left: Logo or site name */}
        <div className="flex flex-col items-center md:items-start">
          <div className="text-2xl font-bold text-white tracking-wide drop-shadow-lg mb-2">Deployly</div>
          <div className="text-xs text-neutral-500">Build. Deploy. Scale.</div>
        </div>

        {/* Center: Links */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-wrap gap-6 justify-center mb-2">
            <a href="#features" className="hover:text-cyan-400 hover:scale-105 transition-all duration-200 font-medium">Features</a>
            <a href="#pricing" className="hover:text-cyan-400 hover:scale-105 transition-all duration-200 font-medium">Pricing</a>
            <a href="#hero" className="hover:text-cyan-400 hover:scale-105 transition-all duration-200 font-medium">Docs</a>
            <a href="#hero" className="hover:text-cyan-400 hover:scale-105 transition-all duration-200 font-medium">Contact</a>
          </div>
          <div className="flex flex-wrap gap-6 justify-center text-xs">
            <a href="#" className="hover:text-cyan-400 transition-all duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-all duration-200">Terms of Service</a>
            <a href="#" className="hover:text-cyan-400 transition-all duration-200">Careers</a>
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="flex justify-center md:justify-end gap-5">
          <a href="#" aria-label="Facebook" className="hover:text-cyan-400 transition-all duration-200 hover:scale-110">
            <FaFacebook size={22} className="drop-shadow-[0_0_6px_cyan]" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-cyan-400 transition-all duration-200 hover:scale-110">
            <FaTwitter size={22} className="drop-shadow-[0_0_6px_cyan]" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-cyan-400 transition-all duration-200 hover:scale-110">
            <FaLinkedin size={22} className="drop-shadow-[0_0_6px_cyan]" />
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-cyan-400 transition-all duration-200 hover:scale-110">
            <FaGithub size={22} className="drop-shadow-[0_0_6px_cyan]" />
          </a>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="mt-10 text-center text-neutral-500 font-light tracking-wide">
        © 2024 - 2026 Deployly. All rights reserved.
      </div>
    </footer>
  );
}