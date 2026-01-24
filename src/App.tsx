import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen.tsx"
import "./index.css"
import Navbar from "./components/Navbar.tsx";
import MobileMenu from "./components/MobileMenu.tsx";
import Home from "./components/sections/Home.tsx";
import { useState } from "react";
import About from "./components/sections/About.tsx";
import Projects from "./components/sections/Projects.tsx";
import Contact from "./components/sections/Contact.tsx";
import Footer from "./components/sections/Footer.tsx"
import { Toaster } from "react-hot-toast";
 function App() {
  const [isLoaded, setIsLoaded] =  useState (false);
  const [menuOpen, setMenuOpen] =  useState<boolean> (false);
  return (
    <>
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />} {" "}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home isLoaded={isLoaded}  />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <Toaster position="top-right" reverseOrder={false} />
      </div>
  
    </>
  );
}
export default App;