import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen.tsx"
import "./index.css"
import Navbar from "./components/Navbar.tsx";
import MobileMenu from "./components/MobileMenu.tsx";
import { useState } from "react";
 function App() {
  const [isLoaded, setIsLoaded] =  useState (false);
  const [menuOpen, setMenuOpen] =  useState<boolean> (false);
  return (
    <>
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />} {" "}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
  
    </>
  );
}
export default App;