import { useEffect } from "react";

import { RESUME_URL } from "../constants";
import SiteLink from "./SiteLink";

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
            <SiteLink to="/work" className={linkClass}>Work</SiteLink>
            <SiteLink to="/about" className={linkClass}>About</SiteLink>
          </div>
          <div className="md:hidden" />

          {/* Center: name */}
          <SiteLink to="#home" className="font-abril text-2xl text-[#E0A4B0] text-center">Kayla Noelle</SiteLink>

          {/* Right: Resume + Let's talk */}
          <div className="hidden md:flex items-center justify-end space-x-6">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>Resume</a>
            <SiteLink
              to="#contact"
              className="px-5 py-2 rounded-none bg-[#E0A4B0] text-[#7C0116] font-montserrat font-semibold hover:bg-[#ebbcc5] transition-colors"
            >
              Let's talk
            </SiteLink>
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
