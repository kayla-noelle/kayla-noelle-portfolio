//import { RevealOnScroll } from "../RevealOnScroll";
import PixelProfile from '../../assets/profile-picture.png'
// import { TerminalSkills } from "../TerminalSkills";
export default function About() {
  const skills = [" JavaScript ", "HTML5", "CSS", "TypeScript", "React", "Shopify", "Graphic Design", "Figma"];
    return (
      <section id="about" className="py-8 bg-stone-50 min-h-screen ">
      <div className="max-w-6xl mx-auto px-4">
          <div className="glass rounded-2xl bg-fuchsia-200 mb-8 p-8 md:p-12 border border-[#1c1c1c]/50 bg-fuschia-200 transition-all hover:-translate-y-1">
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
      {/* Image */}
      <div className="order-1 md:order-2 flex justify-center md:justify-end">
        <img
          src={PixelProfile}
          alt="Pixel Art Profile Picture of Kayla Noelle"
          className="w-56 h-56 md:w-100 md:h-150 object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Text */}
      <div className="order-2 md:order-1 text-left">
        <h2 className="text-5xl font-bold text-[#1c1c1c] mb-3 animate-slide-left-fade">
          So, who am I?
        </h2>
        <p className="font-mono text-[#1c1c1c] leading-relaxed">
          I’m a developer and designer who longs to inspire brands and companies to captivate their users with stunning digital experiences!
          <br /><br />
          After earning my B.A. in Graphic Design from San Diego State (Go Aztecs!)I kicked off my design career working with cross-functional teams on branding, publications, and digital experiences. But I knew I wanted to make a more meaningful impact in my work. So that’s why in 2021 I decided to add in a special skill in my arsenal, Full Stack Engineering with Thinkful! After much sweat, tears, and support from my loved ones…I completed my course!
          <br /><br />
          Today I combine design and my engineering discipline to create stunning, intuitive interfaces and user-focused products that not only look great but work even better.
          <br></br>
          When I’m off the clock, you’ll usually find me fueling my caffeine addiction, enjoying other creative hobbies like painting or pretending I’m running from zombies at the gym. 

        </p>
      </div>

    </div>
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
              {/*Experience */}
              <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 mt-8 text-[#1c1c1c] text-center animate-slide-left-fade">
                  Experience
                </h2>
                {/*vertical line starts here*/}
                <div className="relative">
                  <ul className="timeline">
                    <li>
                      <div className="direction-r">
                        <div className="job-title">
                          <h4 className="text-[22px] text-[#1c1c1c] font-mono text-left">Front End Developer</h4>
                          <h5 className="text-[#1c1c1c] font-mono text-left font-bold">Tubby Todd 2021 - 2025</h5>
                          <p className="text-[14px] font-mono text-left text-[#1c1c1c]">I ensured quality and performance of Shopify based e-commerce platform through developing and deploying scripts.
                            Conducted extensive testing to validate new features, troubleshoot bugs, and maintain site stability across devices and browsers
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="direction-r">
                        <div className="job-title">
                          <h4 className="text-[22px] text-[#1c1c1c] font-mono text-left">Social Media Graphic Designer</h4>
                          <h5 className="text-[#1c1c1c] font-mono text-left font-bold">ReviewBoost 2021 - 2021</h5>
                          <p className="text-[14px] font-mono text-left text-[#1c1c1c]">At Review Boost, I created branded social content, digital assets, and visual templates used across multiple marketing channels. I partnered with the marketing team to support campaigns with eye-catching, conversion-friendly graphics.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="direction-r">
                        <div className="job-title">
                          <h4 className="text-[22px] text-[#1c1c1c] font-mono text-left">Lead Graphic Designer</h4>
                          <h5 className="text-[#1c1c1c] font-mono text-left font-bold">Preserve Magazine 2019 - 2021</h5>
                          <p className="text-[14px] font-mono text-left text-[#1c1c1c]">As the sole designer for a lifestyle publication, I owned everything from layout design and editorial visuals to brand assets and print production. Working directly with the magazine’s founder, I shaped the visual direction of each issue and brought every edition to life with clean, cohesive design.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="direction-r">
                        <div className="job-title">
                          <h4 className="text-[22px] text-[#1c1c1c] font-mono text-left">Graphic Designer</h4>
                          <h5 className="text-[#1c1c1c] font-mono text-left font-bold">Museum of Man 2020 - 2020</h5>
                          <p className="text-[14px] font-mono text-left text-[#1c1c1c]">At the Museum of Man, I produced exhibition visuals, print collateral, and digital designs that supported community-focused programming. I worked within established brand guidelines while helping evolve the museum’s visual language.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="direction-r">
                        <div className="job-title">
                          <h4 className="text-[22px] text-[#1c1c1c] font-mono text-left">Graphic Designer Intern</h4>
                          <h5 className="text-[#1c1c1c] font-mono text-left font-bold">City of Carlsbad 2019 - 2019</h5>
                          <p className="text-[14px] font-mono text-left text-[#1c1c1c]">I supported the city’s in-house design team by creating marketing materials, event graphics, social content, and community outreach collateral. I collaborated with multiple departments to keep designs clear, accessible, and on brand.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
      </section>

    );
  }
    