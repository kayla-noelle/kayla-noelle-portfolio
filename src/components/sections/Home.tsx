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
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-[#fffcf3] py-16 md:py-0">
      <div className="text-left z-10 px-8 md:px-4 py-10 md:py-0 w-full max-w-lg md:max-w-none md:w-auto mx-auto md:mx-0">
        <div className="bg-gradient">
          <div className="absolute inset-0 top-[50px] flex justify-center">
             <div className="bg-shape1 bg-[#9342fc] opacity-50 bg-blur"></div>
         <div className="bg-shape2 bg-[#2C7A7B] opacity-50 bg-blur"></div>
          <div className="bg-shape3 bg-[#2C7A7B] opacity-50 bg-blur"></div>
          </div>
        </div>
       
        <h1
          className="relative z-10 font-grotesque font-black text-6xl md:text-9xl text-left mb-6 text-[#1c1c1c] tracking-tight"
        >
          Hi, I'm <br/>Kayla Noelle <br/> 
        </h1>
        <p
          className={`font-inter font-normal text-xl md:text-3xl text-[#1c1c1c] text-left mb-4 whitespace-normal md:whitespace-nowrap transform ${
            animate ? "animate-slide-up-fade delay-200" : "opacity-0"
          }`}
        >
          I'm a San Diego based{" "}
          <br className="md:hidden" />
          <span style={{ display: "inline-block", width: "260px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                transition: "opacity 0.4s ease, transform 0.4s ease",
                opacity: titleVisible ? 1 : 0,
                transform: titleVisible ? "translateY(0)" : "translateY(8px)",
                backgroundColor: "#9342fc",
                color: "#ffffff",
                fontWeight: "bold",
                borderRadius: "9999px",
                padding: "0.4rem 1.6rem",
              }}
            >
              {titles[titleIndex]}
            </span>
          </span>
        </p>
        <div className={`flex items-center gap-2 transform ${animate ? "animate-slide-up-fade delay-300" : "opacity-0"}`}>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shrink-0"></span>
          <span className="font-inter text-sm text-[#1c1c1c]/70">Open to opportunities</span>
        </div>
      </div>
    </section>
  );
}
