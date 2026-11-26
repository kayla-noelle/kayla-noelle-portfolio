import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen.tsx"
import "./index.css"
import Navbar from "./components/Navbar.tsx";
import MobileMenu from "./components/MobileMenu.tsx";
import ScrollManager from "./components/ScrollManager.tsx";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage.tsx";
import WorkPage from "./pages/WorkPage.tsx";
import ProjectDetailPage from "./pages/ProjectDetailPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

 function App() {
  const [isLoaded, setIsLoaded] =  useState (false);
  const [menuOpen, setMenuOpen] =  useState<boolean> (false);
  return (
    <>
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />} {" "}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-[#7C0116] text-gray-100`}>
        <ScrollManager />
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route path="/" element={<HomePage isLoaded={isLoaded} />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<ProjectDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Toaster position="top-right" reverseOrder={false} />
      </div>

    </>
  );
}
export default App;
