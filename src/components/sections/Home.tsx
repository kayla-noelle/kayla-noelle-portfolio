import { RevealOnScroll } from "../RevealOnScroll";
// Hero Section
export default function Hero() {
  return (
   <section id="home" className="min-h-screen flex items-center justify-center relative bg-white dark:bg-gray-900">
    <RevealOnScroll>
   <div className="text-center z-10 px-4">
   <h1 className="font-sans text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-200 via-orange-400 to-pink-600 bg-clip-text text-transparent">Hi, I'm Kayla Chavez</h1>
   <p className="font-sans text-gray-900 dark:text-gray-300 text-left text-lg mb-8 max-w-lg mx-auto">
    I'm a front-end developer who loves crafting beautiful and functional web experiences.
   </p>
   <div className="flex justify-center space-x-4">
    <a href="https://www.linkedin.com/in/kayla-noelle-chavez/" target="_blank" rel="noopener noreferrer" className="bg-sky-400 text-white px-6 py-3 rounded text-lg font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(125,211,252,0.55)]">
      My LinkedIn
    </a>
     <a href="#contact" className="border border-sky-400/50 text-sky-400 px-6 py-3 rounded font-medium transition-all duration-200 overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(125,211,252,0.55)] hover:bg-sky-400/10">
      Contact Me
    </a>
   </div>
   </div>
   </RevealOnScroll>
   </section>
  );
}