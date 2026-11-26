import { useState } from "react";
import SkillsMarquee from "../SkillsMarquee";

const experience = [
  {
    title: "Creative Engineer",
    company: "Helios Worldwide",
    dates: "2026 - Present",
    description: "",
  },
  {
    title: "Front End Engineer",
    company: "Tubby Todd",
    dates: "2021 - 2025",
    description: "I ensured quality and performance of Shopify based e-commerce platform through developing and deploying scripts. Conducted extensive testing to validate new features, troubleshoot bugs, and maintain site stability across devices and browsers.",
  },
  {
    title: "Social Media Graphic Designer",
    company: "ReviewBoost",
    dates: "2021 - 2021",
    description: "At Review Boost, I created branded social content, digital assets, and visual templates used across multiple marketing channels. I partnered with the marketing team to support campaigns with eye-catching, conversion-friendly graphics.",
  },
  {
    title: "Lead Graphic Designer",
    company: "Preserve Magazine",
    dates: "2019 - 2021",
    description: "As the sole designer for a lifestyle publication, I owned everything from layout design and editorial visuals to brand assets and print production. Working directly with the magazine's founder, I shaped the visual direction of each issue and brought every edition to life with clean, cohesive design.",
  },
  {
    title: "Graphic Designer Intern",
    company: "City of Carlsbad",
    dates: "2019 - 2019",
    description: "I supported the city's in-house design team by creating marketing materials, event graphics, social content, and community outreach collateral. I collaborated with multiple departments to keep designs clear, accessible, and on brand.",
  },
];


export default function About() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
      <section id="about" className="pb-8 bg-[#FFF8D5] text-[#7C0116] min-h-screen">
      {/* Pink intro band, matching the homepage hero */}
      <div className="bg-[#E0A4B0] py-8">
      <div className="max-w-6xl mx-auto px-4">
          <div
            className="rounded-2xl mb-8 p-8 md:p-12 transition-all hover:-translate-y-1"
          >

    <div className="grid grid-cols-1 gap-10 items-start">

      {/* Text */}
      <div className="text-left">
        <h2 className="font-abril text-5xl font-normal text-[#7C0116] mb-3 animate-slide-left-fade">
          So, who am I?
        </h2>
        <p className="font-montserrat text-[#7C0116] leading-relaxed">
          After earning my B.A. in Graphic Design from San Diego State I kicked off my design career working with cross-functional teams on branding, publications, and digital experiences. But I knew I wanted to make a more meaningful impact in my work. So that's why in 2021 I decided to add in a special skill in my arsenal, Full Stack Engineering with Thinkful! After much sweat, tears, and support from my loved ones…I completed my course!
          <br /><br />
          Today I combine design and my engineering discipline to create stunning, intuitive interfaces and user-focused products that not only look great but work even better.
        </p>
      </div>

    </div>
  </div>
</div>
</div>
              <SkillsMarquee />
              {/* Experience */}
              <div>
                <h2 className="font-abril text-4xl font-normal mb-8 mt-8 text-[#7C0116] text-center animate-slide-left-fade">
                  Experience
                </h2>
                <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                  {experience.map((job, index) => (
                    <div key={index} className="border-t border-[#7C0116] md:border-[#7C0116] last:border-b">
                      <button
                        className="w-full flex items-center justify-between px-6 md:px-16 lg:px-32 py-4 text-left hover:bg-[#7C0116]/5 transition-colors"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        aria-expanded={openIndex === index}
                      >
                        <div>
                          <span className="block font-montserrat font-bold text-[#7C0116] text-lg">{job.title}</span>
                          <span className="block font-montserrat text-sm text-[#7C0116]/70">{job.company} &middot; {job.dates}</span>
                        </div>
                        <svg
                          className={`shrink-0 ml-4 w-5 h-5 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"}`}
                      >
                        <p className="font-montserrat text-[14px] text-[#7C0116] px-6 md:px-16 lg:px-32 pb-5 leading-relaxed text-left">{job.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
      </section>

    );
  }
