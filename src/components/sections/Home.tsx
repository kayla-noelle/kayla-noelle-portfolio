import { useEffect, useState } from "react";

interface HomeProps {
  isLoaded: boolean;
}

export default function Home({ isLoaded }: HomeProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      const timeout = setTimeout(() => setAnimate(true), 100);
      return () => clearTimeout(timeout);
    }
  }, [isLoaded]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-stone-50 dark:bg-stone-900">
      <div className="text-left md:text-center z-10 px-4">
        <h1
          className={`font-oswald font-bold text-5xl md:text-7xl mb-6 text-stone-900 dark:text-stone-50 transform ${
            animate ? "animate-tracking-in-expand" : "opacity-0"
          }`}
        >
          Hi, I'm Kayla Noelle
        </h1>
        <p
          className={`font-oswald font-normal text-gray-900 dark:text-gray-300 text-left text-lg mb-8 max-w-lg mx-auto transform ${
            animate ? "animate-tracking-in-expand delay-200" : "opacity-0"
          }`}
        >
          I'm a front-end developer who loves crafting beautiful and functional web experiences.
        </p>
        <div className="flex justify-start md:justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/kayla-noelle-chavez/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-oswald bg-stone-900 text-stone-50 dark:bg-stone-50 dark:text-stone-900 px-6 py-3 rounded text-lg font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(125,211,252,0.55)]"
          >
            My LinkedIn
          </a>
          <a
            href="#contact"
            className="border border-stone-900/50 dark:border-stone-50/50 text-stone-900 dark:text-stone-50 px-6 py-3 rounded font-oswald font-medium transition-all duration-200 overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(125,211,252,0.55)] hover:bg-stone-400/10"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
