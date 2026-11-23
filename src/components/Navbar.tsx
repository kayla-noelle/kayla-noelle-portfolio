import { useEffect } from "react";

import { RESUME_URL } from "../constants";

export default function Navbar({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
 }) {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const linkClass = "nav-item relative font-unica font-semibold text-lg text-[#E0A4B0] transition-colors";

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#7C0116]">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-16">
          {/* Left: Work / About */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#projects" className={linkClass}>Work</a>
            <a href="#about" className={linkClass}>About</a>
          </div>
          <div className="md:hidden" />

          {/* Center: name */}
          <a href="#home" className="font-abril text-2xl text-[#E0A4B0] text-center">Kayla Noelle</a>

          {/* Right: Resume + Let's talk */}
          <div className="hidden md:flex items-center justify-end space-x-6">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>Resume</a>
            <a
              href="#contact"
              className="px-5 py-2 rounded-none bg-[#E0A4B0] text-[#7C0116] font-montserrat font-semibold hover:bg-[#ebbcc5] transition-colors"
            >
              Let's talk
            </a>
          </div>
          <div className="flex justify-end md:hidden">
            <button
              className="text-2xl text-[#E0A4B0] cursor-pointer"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Open Menu"
            >
              &#9776;
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
