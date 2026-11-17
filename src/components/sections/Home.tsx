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
            <div className="flex items-baseline">
              <h1
                className={`font-abril font-normal text-7xl md:text-[11rem] tracking-tight leading-none text-[#1c1c1c] ${slideUp}`}
                style={{ animationDelay: '100ms' }}
              >
                Designer
              </h1>
              <span
                className={`font-abril font-normal text-7xl md:text-[11rem] tracking-tight leading-none text-[#1c1c1c] ml-[0.25em] ${slideUp}`}
                style={{ animationDelay: '150ms' }}
              >
                &
              </span>
            </div>
            <h1
              className={`font-abril font-normal text-7xl md:text-[11rem] text-[#1c1c1c] tracking-tight leading-none -mt-4 md:-mt-8 ml-[0.35em] ${slideUp}`}
              style={{ animationDelay: '200ms' }}
            >
              Developer
            </h1>
          </div>
        </div>
        <p className={`relative z-10 font-inter text-[16px] md:text-[24px] text-[#1c1c1c] text-left mb-4 w-0 min-w-full ${slideUp}`} style={{ animationDelay: '300ms' }}>
          Hi, I'm Kayla Noelle and I'm a UI designer and Front End Developer based in Los Angeles, CA. I long to inspire brands and companies to captivate their users with stunning digital experiences.
        </p>
        <div className="relative z-10 flex items-center gap-4 mt-2">
          <a
            href="/Chavez_Kayla_Resume_.pdf"
            download
            className="inline-flex items-center gap-1.5 px-6 py-3 bg-[#F27D48] text-[#1c1c1c] font-inter font-semibold rounded-full hover:bg-[#E06A35] transition-colors"
          >
            Download Resume
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
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
