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
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-[#faf7f2]">
      <div className="text-left z-10 px-4">
        <h1
          className={`font-unica text-5xl md:text-9xl text-left mb-6 text-[#1c1c1c] transform ${
            animate ? "animate-slide-up-fade" : "opacity-0"
          }`}
        >
          Hi, I'm <br/>Kayla Noelle <br/> 
        </h1>
        <p
          className={`font-sans font-normal text-[#1c1c1c] text-left md:px-2 mb-6 text-lg max-w-lg transform ${
            animate ? "animate-slide-up-fade delay-200" : "opacity-0"
          }`}
        >
          I'm a front-end developer who loves crafting beautiful and functional web experiences.
        </p>
        {/* <div className="flex justify-start md:justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/kayla-noelle-chavez/"
            target="_blank"
            rel="noopener noreferrer"
            className="dark btn-border-reveal font-oswald px-6 py-3 rounded text-lg font-medium"
          >
            My LinkedIn
          </a>
          <a
            href="#contact"
            className="btn-border-reveal border-stone-900/50 dark:border-stone-50/50 text-stone-900 dark:text-stone-50 px-6 py-3 rounded font-oswald font-medium transition-all duration-200 overflow-hidden"
          >
            Contact Me
          </a>
        </div> */}
      </div>
    </section>
  );
}
