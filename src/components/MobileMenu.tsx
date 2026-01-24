export default function MobileMenu({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
 }) {

  
  return (
    <div className={`fixed font-mono top-0 left-0 w-full bg-fuchsia-200 z-40 flex flex-col items-center justify-center 
    transition-all duration-300 ease-in-out
    ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"

    }
`}>

<button onClick={() => setMenuOpen(false)} 
className="absolute top-4 right-4 text-4xl text-[#1c1c1c] focus:outline-none cursor-pointer"
aria-label="Close Menu"
    >
  &times;
</button>
            <a href="#home" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-[#1c1c1c] my-4 transform transition-transform duration-300
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-[#1c1c1c] my-4 transform transition-transform duration-300
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>About</a>
            <a href="https://www.linkedin.com/in/kayla-noelle-chavez/" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-[#1c1c1c] my-4 transform transition-transform duration-300
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>LinkedIn</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-[#1c1c1c] my-4 transform transition-transform duration-300
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Contact</a>
    </div>
  );
}