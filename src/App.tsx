import { useState } from 'react'
import './App.css'
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans min-h-screen">
      <Header />
      <Hero />
      <About />
      <Resume />
      <Skills />
    </div>
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

// Hero Section
function Hero() {
  return (
    <section className="max-w-3xl mx-auto text-center py-20 px-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Kayla Chavez</h1>
      <h3 className="text-lg md:text-xl text-gray-700 mb-8">
        I'm a Front-End Developer. I love combining technical skills with design thinking to create smooth, user-centered digital experiences.
      </h3>
    </section>
  );
}

function Skills(){
  return(
    <section id="skills" className="max-w-4xl mx-auto px-6 pb-20">
      <ul>
        <li>JavaScript</li>
        <li>HTML5</li>
        <li>CSS</li>
        <li>Adobe Suite</li>
        <li>Figma</li>
        <li>Shopify</li>
      </ul>
    </section>
  )
}
export default App;