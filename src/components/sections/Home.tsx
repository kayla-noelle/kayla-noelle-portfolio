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
    <section id="home" className="min-h-[80vh] md:min-h-screen flex items-center justify-center relative bg-stone-50 py-12 md:py-0">
      <div className="text-left z-10 px-4 py-8 md:py-0">
        <div className="bg-gradient">
          <div className="absolute inset-0 top-[50px] flex justify-center">
             <div className="bg-shape1 bg-sky-400 opacity-50 bg-blur"></div>
         <div className="bg-shape2 bg-violet-400 opacity-50 bg-blur"></div>
          <div className="bg-shape3 bg-fuchsia-400 opacity-50 bg-blur"></div>
          </div>
        </div>
       
        <h1
          className={`font-abril text-5xl md:text-9xl text-left mb-6 text-[#1c1c1c] transform ${
            animate ? "animate-slide-up-fade" : "opacity-0"
          }`}
        >
          Hi, I'm <br/>Kayla Noelle <br/> 
        </h1>
        <p
          className={`font-mono font-normal md:text-3xl text-[#1c1c1c] text-left mb-6 max-w-lg transform ${
            animate ? "animate-slide-up-fade delay-200" : "opacity-0"
          }`}
        >
          I'm a San-Diego based front-end developer and designer
        </p>
      </div>
    </section>
  );
}
