interface HomeProps {
  isLoaded: boolean;
}

export default function Home({}: HomeProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-[#fffcf3] py-16 md:py-0">
      <div className="text-left z-10 pl-4 pr-6 md:px-4 py-10 md:py-0 w-full md:max-w-none md:w-auto mx-auto md:mx-0">
<div className="relative z-10 flex items-stretch gap-3 md:gap-6 mb-6 justify-center md:justify-start">
          <div className="flex flex-col">
            <h1 className="font-grotesque font-black text-3xl md:text-5xl text-left text-[#1c1c1c] tracking-tight leading-none -mb-6 md:-mb-12 md:ml-2">
              Creative
            </h1>
            <h1
              className="font-grotesque font-black text-7xl md:text-[11rem] tracking-tight leading-none text-transparent bg-clip-text"
              style={{ backgroundImage: "url('/starry_night_full.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
            >
              Designer
            </h1>
            <h1 className="font-grotesque font-black text-7xl md:text-[11rem] text-[#1c1c1c] tracking-tight leading-none -mt-4 md:-mt-8">
              Engineer
            </h1>
            <div className="flex items-center gap-2 mt-2 md:ml-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shrink-0 shadow-[0_0_8px_3px_rgba(34,197,94,0.7)]"></span>
              <span className="font-inter text-sm text-[#1c1c1c]/70">Open to opportunities</span>
            </div>
          </div>
          <span className="font-grotesque font-black text-[#1c1c1c] tracking-tight leading-none self-stretch flex items-center text-[7rem] md:text-[15rem]">
            &
          </span>
        </div>
        <p className="relative z-10 font-inter text-[16px] md:text-[24px] text-[#1c1c1c] text-left mb-4 w-full md:ml-2">
          Hi, I'm Kayla Noelle and I'm passionate about crafting beautiful and thoughtful digital experiences.
        </p>
        <a
          href="/Chavez_Kayla_Resume_.pdf"
          download
          className="relative z-10 inline-block md:ml-2 mt-2 px-6 py-3 bg-[#1c1c1c] text-white font-inter font-semibold rounded-full hover:bg-black transition-colors"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
