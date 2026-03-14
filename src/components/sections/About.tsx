//import { RevealOnScroll } from "../RevealOnScroll";
import PixelProfile from '../../assets/profile-picture.png'
import React, { useState } from "react";
// import { TerminalSkills } from "../TerminalSkills";

const experience = [
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
    title: "Graphic Designer",
    company: "Museum of Man",
    dates: "2020 - 2020",
    description: "At the Museum of Man, I produced exhibition visuals, print collateral, and digital designs that supported community-focused programming. I worked within established brand guidelines while helping evolve the museum's visual language.",
  },
  {
    title: "Graphic Designer Intern",
    company: "City of Carlsbad",
    dates: "2019 - 2019",
    description: "I supported the city's in-house design team by creating marketing materials, event graphics, social content, and community outreach collateral. I collaborated with multiple departments to keep designs clear, accessible, and on brand.",
  },
];

const tabs = ["Intro", "Background", "Values", "Hobbies"] as const;
type Tab = typeof tabs[number];

const tabContent: Record<Tab, React.ReactNode> = {
  Intro: (
    <p className="font-inter text-[#1c1c1c] leading-relaxed">
      I'm a designer and engineer who longs to inspire brands and companies to captivate their users with stunning digital experiences!
    </p>
  ),
  Background: (
    <p className="font-inter text-[#1c1c1c] leading-relaxed">
      After earning my B.A. in Graphic Design from San Diego State I kicked off my design career working with cross-functional teams on branding, publications, and digital experiences. But I knew I wanted to make a more meaningful impact in my work. So that's why in 2021 I decided to add in a special skill in my arsenal, Full Stack Engineering with Thinkful! After much sweat, tears, and support from my loved ones…I completed my course!
      <br /><br />
      Today I combine design and my engineering discipline to create stunning, intuitive interfaces and user-focused products that not only look great but work even better.
    </p>
  ),
  Values: (
    <div className="text-left">
      <div className="font-inter text-[24px] text-[#1c1c1c] leading-relaxed space-y-2">
        <p>Accessible</p>
        <p>Thoughtful</p>
        <p>Beautiful</p>
        <p>Well Made</p>
      </div>
      <p className="font-inter text-[#1c1c1c] leading-relaxed mt-4">
        These are the design values I abide by in my work. I strongly believe that good design is accessible to everyone. Good design is thoughtful and takes in the considerations of the user's needs. When something is well made and beautiful whether it's a digital interface or a physical object, it reflects care, clarity, and respect for the users who will use it. When I combine these four design values, the design becomes more than functional, it becomes something that improves everyday life. 
      </p>
    </div>
  ),
  Hobbies: (
    <p className="font-inter text-[#1c1c1c] leading-relaxed">
      When I'm off the clock, you'll usually find me fueling my caffeine addiction, enjoying other creative hobbies like painting and reading, or daydreaming about my next travel destination!
    </p>
  ),
};

export default function About() {
  const skills = [" JavaScript ", "TypeScript", "React", "Vue", "Shopify", "Graphic Design", "Figma", "Full Stack Development", "UI/UX", "AI Prompt"];
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("Intro");
    return (
      <section id="about" className="py-8 bg-[#fffcf3] min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
          <div
            className="rounded-2xl mb-8 p-8 md:p-12 transition-all hover:-translate-y-1"
          >

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

      {/* Image */}
      <div className="order-1 flex justify-center md:justify-start">
        <img
          src={PixelProfile}
          alt="Profile Picture of Kayla Noelle"
          className="w-56 h-56 md:w-100 md:h-150 object-cover rounded-xl"
        />
      </div>

      {/* Text */}
      <div className="order-2 text-left">
        <h2 className="font-epilogue text-5xl font-bold text-[#1c1c1c] mb-3 animate-slide-left-fade">
          So, who am I?
        </h2>
        {/* Tabs */}
        <div className="flex justify-center md:justify-start gap-6 mb-4 border-b border-[#0d0a07]/20">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-inter text-sm pb-2 transition-colors ${
                activeTab === tab
                  ? "text-[#9342fc] border-b-2 border-[#9342fc] font-semibold"
                  : "text-[#1c1c1c]/50 hover:text-[#1c1c1c]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="min-h-[120px]">{tabContent[activeTab]}</div>
      </div>

    </div>
  </div>
</div>
                 <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#0d0a07] py-3 overflow-hidden">
                    <div className="flex w-max animate-marquee will-change-transform gap-16 text-xl md:text-2xl text-[#faf7f2]">
                      {[...skills, ...skills].map((skill, index) => (
                        <span key={index} className="flex items-center gap-16">
                          <span className="whitespace-nowrap font-unica font-bold">{skill}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                            <path d="M12 0l2.2 7.2 5.1-5.1-2.9 6.8 7.6-1-6.1 4.1 6.1 4.1-7.6-1 2.9 6.8-5.1-5.1L12 24l-2.2-7.2-5.1 5.1 2.9-6.8-7.6 1 6.1-4.1-6.1-4.1 7.6 1-2.9-6.8 5.1 5.1z"/>
                          </svg>
                        </span>
                      ))}
                    </div>
                  </div>
              {/* Experience */}
              <div>
                <h2 className="text-4xl font-bold mb-8 mt-8 text-[#1c1c1c] text-center animate-slide-left-fade">
                  Experience
                </h2>
                <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                  {experience.map((job, index) => (
                    <div key={index} className="border-t border-[#0d0a07] md:border-[#0d0a07] last:border-b">
                      <button
                        className="w-full flex items-center justify-between px-6 md:px-16 lg:px-32 py-4 text-left hover:bg-[#0d0a07]/5 transition-colors"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        aria-expanded={openIndex === index}
                      >
                        <div>
                          <span className="block font-inter font-bold text-[#1c1c1c] text-lg">{job.title}</span>
                          <span className="block font-inter text-sm text-[#1c1c1c]/70">{job.company} &middot; {job.dates}</span>
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
                        <p className="font-inter text-[14px] text-[#1c1c1c] px-6 md:px-16 lg:px-32 pb-5 leading-relaxed text-left">{job.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
      </section>

    );
  }
