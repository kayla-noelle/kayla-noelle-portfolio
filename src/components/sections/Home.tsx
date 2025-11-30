import { RevealOnScroll } from "../RevealOnScroll";
// Hero Section
export default function Hero() {
  return (
   <section id="home" className="min-h-screen flex items-center justify-center relative bg-white dark:bg-gray-900">
    <RevealOnScroll>
   <div className="text-center z-10 px-4">
   <h1 className="font-sans text-left text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">Hi, I'm Kayla Chavez</h1>
   <p className="font-sans text-gray-900 dark:text-gray-300 text-left text-lg mb-8 max-w-lg mx-auto">
    I'm a front-end developer who loves crafting beautiful and functional web experiences.
   </p>
   <div className="flex justify-center space-x-4">
    <a href="#projects" className="bg-[#20BF55] text-white px-6 py-3 rounded text-lg font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(32,191,85,0.4)]">
      View Projects
    </a>
     <a href="#contact" className="border border-[#20BF55]/50 text-[#20BF55] px-6 py-3 rounded font-medium transition-all duration-200 overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(32,191,85,0.4)] hover:bg-[#20BF55]/10">
      Contact Me
    </a>
   </div>
   </div>
   </RevealOnScroll>
   </section>
  );
}