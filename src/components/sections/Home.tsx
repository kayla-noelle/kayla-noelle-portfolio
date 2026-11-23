import profilePicture from "../../assets/Editorial Grayscale Portrait with Soft Window Light.png";
import { RESUME_URL } from "../../constants";

interface HomeProps {
  isLoaded: boolean;
}

export default function Home({ isLoaded }: HomeProps) {
  const slideUp = isLoaded ? "animate-slide-up-fade" : "opacity-0";

  return (
    <section id="home" className="w-full min-h-screen flex items-center relative bg-[#E0A4B0] pt-28 pb-16 lg:pt-24 lg:pb-12 overflow-hidden">
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-12">
        {/* Left: text (~80%) */}
        <div className="w-full lg:flex-1 lg:min-w-0 text-left">
          <div className="flex flex-col mb-6">
            <div className="flex items-baseline">
              <h1
                className={`font-abril font-normal text-6xl md:text-[11vw] lg:text-[8.5vw] xl:text-[11vw] 2xl:text-[12vw] tracking-tight leading-none text-[#7C0116] ${slideUp}`}
                style={{ animationDelay: '100ms' }}
              >
                Designer
              </h1>
              <span
                className={`font-abril font-normal text-6xl md:text-[11vw] lg:text-[8.5vw] xl:text-[11vw] 2xl:text-[12vw] tracking-tight leading-none text-[#7C0116] ml-[0.25em] ${slideUp}`}
                style={{ animationDelay: '150ms' }}
              >
                &
              </span>
            </div>
            <h1
              className={`font-abril font-normal text-6xl md:text-[11vw] lg:text-[8.5vw] xl:text-[11vw] 2xl:text-[12vw] text-[#7C0116] tracking-tight leading-none -mt-[0.08em] ml-[0.35em] ${slideUp}`}
              style={{ animationDelay: '200ms' }}
            >
              Developer
            </h1>
          </div>

          <p
            className={`font-montserrat text-[16px] text-[#7C0116] max-w-3xl mb-8 ${slideUp}`}
            style={{ animationDelay: '300ms' }}
          >
            Web Designer and Developer based in Los Angeles, helping brands and companies captivate their users with stunning digital experiences.
          </p>

          <div className={`flex flex-wrap items-center gap-4 ${slideUp}`} style={{ animationDelay: '400ms' }}>
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-none bg-[#7C0116] text-[#E0A4B0] border-2 border-[#7C0116] font-montserrat font-semibold hover:bg-[#5e0111] hover:border-[#5e0111] transition-colors"
            >
              View my Work
            </a>
            <a
              href={RESUME_URL}
              download
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-none bg-[#E0A4B0] text-[#7C0116] border-2 border-[#7C0116] font-montserrat font-semibold hover:bg-[#ebbcc5] transition-colors"
            >
              Download my Resume
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
            </a>
          </div>
        </div>

        {/* Right: photo */}
        <div className={`shrink-0 w-full max-w-[384px] lg:w-[384px] ${slideUp}`} style={{ animationDelay: '250ms' }}>
          <img
            src={profilePicture}
            alt="Kayla Noelle"
            className="w-full aspect-[4/5] object-cover object-center rounded-none"
          />
        </div>
      </div>
    </section>
  );
}
