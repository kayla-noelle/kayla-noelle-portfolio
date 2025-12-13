import { useEffect } from "react";

export default function Navbar({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
 }) {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#faf7f2] backdrop-[#1c1c1c]-lg border-b border-[#1c1c1c]/50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-unica text-lg text-[#1c1c1c]">Kayla Noelle</a>
          <div className="w-7 h-7 relative text-2xl cursor-pointer z-40 md:hidden absolute" onClick={() => setMenuOpen(prev => !prev)}>
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-item relative font-unica text-[#1c1c1c] hover:text-[#1c1c1c] transition-colors dark:hover:text-[#1c1c1c] transition-colors">Home</a>
            <a href="#about" className="nav-item relative font-unica text-[#1c1c1c] hover:text-[#1c1c1c] transition-colors dark:hover:text-[#1c1c1c] transition-colors">About</a>
            <a href="https://www.linkedin.com/in/kayla-noelle-chavez/" className="nav-item relative font-unica text-[#1c1c1c] hover:text-[#1c1c1c] transition-colors dark:hover:text-[#1c1c1c] transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="#contact" className="nav-item relative font-unica text-[#1c1c1c] hover:text-[#1c1c1c] transition-colors dark:hover:text-[#1c1c1c] transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
