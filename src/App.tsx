import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Resume from "./pages/Resume.tsx";
import Navbar from "./components/Navbar.tsx";

 function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Resume />} />
      </Routes>
    </>
  );
}


// Header / Navigation Component
function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-50">
      <nav>
        <ul className="flex space-x-6 text-gray-700">
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#resume" className="hover:text-blue-500">Resume</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
export default App;