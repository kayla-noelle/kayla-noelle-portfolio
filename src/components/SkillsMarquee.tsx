const skills = ["JavaScript", "TypeScript", "React", "Shopify", "Design Systems", "Figma", "Adobe Creative Cloud", "Visual Design", "UI/UX", "Web Design"];

export default function SkillsMarquee() {
  return (
    <div className="relative w-full bg-[#BAD797] py-3 overflow-hidden">
      <div className="flex w-max animate-marquee will-change-transform gap-16 text-xl md:text-2xl text-[#7C0116]">
        {[...skills, ...skills].map((skill, index) => (
          <span key={index} className="flex items-center gap-16">
            <span className="whitespace-nowrap font-unica font-bold">{skill}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0" aria-hidden="true">
              <path d="M12 0l2.2 7.2 5.1-5.1-2.9 6.8 7.6-1-6.1 4.1 6.1 4.1-7.6-1 2.9 6.8-5.1-5.1L12 24l-2.2-7.2-5.1 5.1 2.9-6.8-7.6 1 6.1-4.1-6.1-4.1 7.6 1-2.9-6.8 5.1 5.1z"/>
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
