import { useEffect, useState } from "react";

interface HomeProps {
  isLoaded: boolean;
}

const titles = ["Front End Engineer", "UX Engineer", "Design Engineer"];

export default function Home({ isLoaded }: HomeProps) {
  const [animate, setAnimate] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const [titleVisible, setTitleVisible] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      const timeout = setTimeout(() => setAnimate(true), 100);
      return () => clearTimeout(timeout);
    }
  }, [isLoaded]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleVisible(false);
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % titles.length);
        setTitleVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-[80vh] md:min-h-screen flex items-center justify-center relative bg-white py-12 md:py-0">
      <div className="text-left z-10 px-4 py-8 md:py-0">
        <div className="bg-gradient">
          <div className="absolute inset-0 top-[50px] flex justify-center">
             <div className="bg-shape1 bg-sky-400 opacity-50 bg-blur"></div>
         <div className="bg-shape2 bg-[#2C7A7B] opacity-50 bg-blur"></div>
          <div className="bg-shape3 bg-[#2C7A7B] opacity-50 bg-blur"></div>
          </div>
        </div>
       
        <h1
          className={`font-abril font-bold text-5xl md:text-9xl text-left mb-6 text-[#1c1c1c] transform ${
            animate ? "animate-slide-up-fade" : "opacity-0"
          }`}
        >
          Hi, I'm <br/>Kayla Noelle <br/> 
        </h1>
        <p
          className={`font-inter font-normal md:text-3xl text-[#1c1c1c] text-left mb-6 max-w-lg transform ${
            animate ? "animate-slide-up-fade delay-200" : "opacity-0"
          }`}
        >
          I'm a San Diego based
          <br />
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              transition: "opacity 0.4s ease, transform 0.4s ease",
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? "translateY(0)" : "translateY(8px)",
              backgroundColor: "#2C7A7B",
              color: "#ffffff",
              borderRadius: "9999px",
              padding: "0.25rem 1.25rem",
              marginTop: "0.5rem",
            }}
          >
            {titles[titleIndex]}
          </span>
        </p>
      </div>
    </section>
  );
}
