interface HomeProps {
  isLoaded: boolean;
}

export default function Home({ isLoaded }: HomeProps) {
  const slideUp = isLoaded ? "animate-slide-up-fade" : "opacity-0";

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-[#fffcf3] py-16 md:py-0">
      <div className="text-left z-10 pl-4 pr-6 md:px-4 py-10 md:py-0 w-fit max-w-full mx-auto md:mx-0">
        <div className="bg-gradient pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 top-[50px] flex justify-center">
            <div className="bg-shape1 bg-[#9342fc] opacity-50 bg-blur"></div>
            <div className="bg-shape2 bg-[#f06c9b] opacity-50 bg-blur"></div>
            <div className="bg-shape3 bg-fuchsia-400 opacity-50 bg-blur"></div>
            <div className="bg-shape2 bg-[oklch(94.5%_0.129_101.54)] opacity-50 bg-blur" style={{ animationDelay: '-5s' }}></div>
          </div>
        </div>

        <div className="relative z-10 flex items-stretch gap-3 md:gap-6 mb-6 justify-center md:justify-start">
          <div className="flex flex-col">
            <h1
              className={`font-grotesque font-black text-7xl md:text-[11rem] tracking-tight leading-none text-[#1c1c1c] ${slideUp}`}
              style={{ animationDelay: '100ms' }}
            >
              Designer
            </h1>
            <h1
              className={`font-grotesque font-black text-7xl md:text-[11rem] text-[#1c1c1c] tracking-tight leading-none -mt-4 md:-mt-8 ${slideUp}`}
              style={{ animationDelay: '200ms' }}
            >
              Developer
            </h1>
          </div>
          <span
            className={`font-grotesque font-black text-[#1c1c1c] tracking-tight leading-none self-stretch flex items-center text-[7rem] md:text-[15rem] ${slideUp}`}
            style={{ animationDelay: '150ms' }}
          >
            &
          </span>
        </div>
        <p className={`relative z-10 font-inter text-[16px] md:text-[24px] text-[#1c1c1c] text-left mb-4 w-0 min-w-full ${slideUp}`} style={{ animationDelay: '300ms' }}>
          Hi, I'm Kayla Noelle and I'm a UI designer and Front End Developer based in Los Angeles, CA. I long to inspire brands and companies to captivate their users with stunning digital experiences.
        </p>
        <div className="relative z-10 flex items-center gap-4 mt-2">
          <a
            href="/Chavez_Kayla_Resume_.pdf"
            download
            className="inline-block px-6 py-3 bg-[#1c1c1c] text-white font-inter font-semibold rounded-full hover:bg-black transition-colors"
          >
            Download Resume
          </a>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shrink-0 shadow-[0_0_8px_3px_rgba(34,197,94,0.7)]"></span>
            <span className="font-inter text-sm text-[#1c1c1c]/70">Open to opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}
