import { RevealOnScroll } from "../RevealOnScroll";
// import { TerminalSkills } from "../TerminalSkills";
export default function About() {
  const skills = [" JavaScript ", "HTML5", "CSS", "TypeScript", "React", "Shopify", "Design"];
    return (
      <section id="about" className="py-8 bg-stone-50 min-h-screen ">
        <RevealOnScroll>
       <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-[#1c1c1c] text-center animate-slide-left-fade">
              About Me
            </h2>
            <span className="block h-1 w-0 bg-[#1c1c1c] mt-2 animate-slide-line mx-auto"></span>
            <div className="glass mb-8 rounded-xl p-8 border-[#1c1c1c]/50 border hover:-translate-y-1 transition-all bg-fuchsia-200">
              <p className="font-mono text-left text-[#1c1c1c] mb-6">
              I am a meticulous, precise Front End Developer with a strong background in graphic design. After earning my B.A. in Graphic Design from San Diego State University, I kicked off my career working with cross-functional teams on branding, publications, and digital experiences. In 2021, I leveled up my technical skills by completing a Full Stack Engineering bootcamp with Thinkful, which cemented my passion for software development. Today, I combine design with my engineering discipline to build clean, intuitive interfaces and user-focused products that look great and work even better. When I'm off the clock, if I'm not too busy fueling my coffee addiction, I'm usually enjoying my creative hobbies such as painting or resetting my brain at the gym!
            </p>
            </div>
          </div>
                 <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#1c1c1c] py-3 overflow-hidden">
                    <div className="flex w-max animate-marquee will-change-transform gap-16 text-xl md:text-2xl text-[#faf7f2]">
                      {[...skills, ...skills].map((skill, index) => (
                        <span key={index} className="whitespace-nowrap font-unica">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
              {/* Education and Work Experience */}
              <div className="max-w-5xl mx-auto px-4 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-[#1c1c1c]/50 border hover:-translate-y-1 transition-all bg-fuchsia-200">
              <h3 className=" text-left text-[#1c1c1c] text-xl font-bold mb-4">Education </h3>
              <ul className="font-mono list-disc list-inside text-left text-[#1c1c1c] space-y-2">
                <li>
                  <strong>B.A. in Graphic Design</strong> - San Diego State University, (2014-2019)
                </li>
                <li>
                  <strong>Full-Stack Engineering</strong> - Thinkful, (2021)
                </li>
              </ul>
              </div>
              <div className="p-6 rounded-xl border-[#1c1c1c]/50 border hover:-translate-y-1 transition-all bg-fuchsia-200">
              <h3 className="text-left text-[#1c1c1c] text-xl font-bold mb-4">Work Experience </h3>
              <div className="space-y-4 text-white-400">
                <div>
                  <h4 className="text-left font-semibold text-[#1c1c1c]">Front End Developer at Tubby Todd (DEC 2021-NOV 2025)</h4>
                <p className="font-mono text-left text-[#1c1c1c]">Ensured quality and performance of Shopify based e-commerce platform through developing and deploying scripts.
                    Conducted extensive testing to validate new features, troubleshoot bugs, and maintain site stability across devices and browsers
                </p>
                </div>
                <div>
                  <h4 className="text-left font-semibold text-[#1c1c1c]">Social Media Graphic Design Representative at ReviewBoost (FEB 2021-DEC 2021)</h4>
                <p className="font-mono text-left text-[#1c1c1c]">At Review Boost, I created branded social content, digital assets, and visual templates used across multiple marketing channels. I partnered with the marketing team to support campaigns with eye-catching, conversion-friendly graphics.
                </p>
                </div>
                <div>
                  <h4 className="text-left font-semibold text-[#1c1c1c]">Graphic Designer at Preserve Magazine (OCT 2019-JUL 2021)</h4>
                <p className="font-mono text-left text-[#1c1c1c]">As the sole designer for a lifestyle publication, I owned everything from layout design and editorial visuals to brand assets and print production. Working directly with the magazine’s founder, I shaped the visual direction of each issue and brought every edition to life with clean, cohesive design.
                </p>
                </div>
                <div>
                  <h4 className="text-left font-semibold text-[#1c1c1c]">Graphic Designer at Museum of Man (FEB 2020-APR 2020)</h4>
                <p className="font-mono text-left text-[#1c1c1c]">At the Museum of Man, I produced exhibition visuals, print collateral, and digital designs that supported community-focused programming. I worked within established brand guidelines while helping evolve the museum’s visual language.
                </p>
                </div>
                <div>
                  <h4 className="text-left font-semibold text-[#1c1c1c]">Graphic Designer Intern at City of Carlsbad (JUL 2019-AUG 2019)</h4>
                <p className="font-mono text-left text-[#1c1c1c]">I supported the city’s in-house design team by creating marketing materials, event graphics, social content, and community outreach collateral. I collaborated with multiple departments to keep designs clear, accessible, and on brand.
                </p>
                </div>
              </div>
              </div>
            </div>
              </div>
          </RevealOnScroll>
      </section>

    );
  }
    