export default function MobileMenu({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
 }) {

  
  return (
    <div
      className="fixed font-inter left-0 w-full z-40 flex flex-col items-start justify-center transition-all duration-500 ease-in-out overflow-hidden"
      style={{
        bottom: 0,
        backgroundColor: "#2C7A7B",
        height: menuOpen ? "100dvh" : "0",
        opacity: menuOpen ? 1 : 0,
        transform: menuOpen ? "translateY(0)" : "translateY(100%)",
        pointerEvents: menuOpen ? "auto" : "none",
      }}
    >
      <div className="absolute top-4 left-0 right-0 flex items-center justify-between px-8">
        <span className="font-unica font-bold text-lg text-white">Kayla Noelle</span>
        <button
          onClick={() => setMenuOpen(false)}
          className="text-4xl text-white focus:outline-none cursor-pointer"
          aria-label="Close Menu"
        >
          &times;
        </button>
      </div>
      <a href="#home" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white mt-4 pb-4 px-8 w-full text-left transform transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} style={{ borderBottom: "1px solid #33afa0" }}>Home</a>
      <a href="#about" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white mt-4 pb-4 px-8 w-full text-left transform transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} style={{ borderBottom: "1px solid #33afa0" }}>About</a>
      <a href="#projects" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white mt-4 pb-4 px-8 w-full text-left transform transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} style={{ borderBottom: "1px solid #33afa0" }}>Projects</a>
      <a href="#contact" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white mt-4 pb-4 px-8 w-full text-left transform transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} style={{ borderBottom: "1px solid #33afa0" }}>Contact</a>
      <div className={`absolute bottom-10 left-8 flex gap-6 transform transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <a href="https://www.linkedin.com/in/kayla-noelle-chavez/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="https://github.com/kayla-noelle" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}