import { RevealOnScroll } from "../RevealOnScroll";
// Resume Section will change it to Projects Section
export default function Projects() {
  return(
    <section id="projects" className="py-16 flex flex-col items-center justify-center p-8 bg-[#fffcf3]">
      <RevealOnScroll>
        <h2 className="text-[#1c1c1c] text-4xl font-bold mb-8">Projects</h2>
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-6 rounded-2xl hover:-translate-y-1 transition-all border border-[#0d0a07]"
            >
              <h3 className="text-xl font-bold mb-2">
                <a href="https://github.com/kayla-noelle/kayla-noelle-portfolio" target="_blank" rel="noopener noreferrer" className="btn-border-reveal inline-flex items-center gap-1 text-sm md:text-base">Portfolio Website<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a>
              </h3>
              <p className="font-inter text-[#1c1c1c] mb-4">A personal portfolio website to showcase my projects and skills.</p>
               {["React", "TypeScript", "Tailwind CSS", "Claude"].map((tech, key) => (
                <span key={key} className="inline-block bg-[#0d0a07] font-inter font-semibold text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  {tech}
                </span>
              ))}
            </div>
            <div
              className="p-6 rounded-2xl hover:-translate-y-1 transition-all border border-[#0d0a07] flex flex-col"
            >
              <h3 className="text-xl font-bold mb-2">
                <a href="https://kayla-noelle.github.io/design-accessbility-tool/" target="_blank" rel="noopener noreferrer" className="btn-border-reveal inline-flex items-center gap-1 text-sm md:text-base">Design Accessbility Tool<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a>
              </h3>
              <p className="font-inter text-[#1c1c1c] mb-4">Follow along with me! I am currently creating a tool to help guide designers to making creative choices that are accessible for users!</p>
              <div>
                {["React", "TypeScript", "Tailwind CSS"].map((tech, key) => (
                  <span key={key} className="inline-block bg-[#0d0a07] font-inter font-semibold text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-4 flex items-center justify-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shrink-0"></span>
                <span className="text-sm font-inter text-green-600 font-semibold">In progress</span>
              </div>
            </div>
            <div
              className="p-6 rounded-2xl hover:-translate-y-1 transition-all border border-[#0d0a07] flex flex-col"
            >
              <h3 className="text-xl font-bold mb-2">
                <a href="https://kayla-noelle.github.io/book-tracking-app/" target="_blank" rel="noopener noreferrer" className="btn-border-reveal inline-flex items-center gap-1 text-sm md:text-base">Book Tracking App<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a>
              </h3>
              <p className="font-inter text-[#1c1c1c] mb-4">A book tracking application to manage reading progress and reviews.</p>
              <div>
                {["React", "TypeScript", "Tailwind CSS", "Next.js"].map((tech, key) => (
                  <span key={key} className="inline-block bg-[#0d0a07] font-inter font-semibold text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-4 flex items-center justify-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shrink-0"></span>
                <span className="text-sm font-inter text-green-600 font-semibold">In progress</span>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
