import { useEffect } from "react";

export default function Navbar({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
 }) {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-white dark:bg-gray-900 backdrop-blue-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-sans text-lg font-bold text-gray-900 dark:text-white">{" "}Kayla Noelle</a>

          <div className="w-7 h-5 relative text-3xl cursor-pointer z-40 md:hidden absolute right-4" onClick={() => setMenuOpen(prev => !prev)}>
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="font-sans text-gray-900 dark:text-white hover:text-white transition-colors">Home</a>
            <a href="#about" className="font-sans text-gray-900 dark:text-white hover:text-white transition-colors">About</a>
            <a href="#projects" className="font-sans text-gray-900 dark:text-white hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="font-sans text-gray-900 dark:text-white hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
