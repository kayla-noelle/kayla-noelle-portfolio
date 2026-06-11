import { RevealOnScroll } from "../RevealOnScroll";
// Resume Section will change it to Projects Section
export default function Projects() {
  return(
    <section id="projects" className="py-16 flex flex-col items-center justify-center p-8 bg-[#fffcf3]">
      <RevealOnScroll>
        <h2 className="text-[#1c1c1c] text-4xl font-bold mb-8">Works</h2>
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-6 rounded-2xl hover:-translate-y-1 transition-all border border-[#0d0a07]"
            >
              <h3 className="text-xl font-bold mb-2">
                <a href="https://github.com/kayla-noelle/that-pizza-place" target="_blank" rel="noopener noreferrer" className="btn-border-reveal inline-flex items-center gap-1 text-sm md:text-base">That Pizza Place<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a>
              </h3>
              <p className="font-inter text-[#1c1c1c] mb-4">Redesigning a beloved Carlsbad pizza place website</p>
               {["React", "JavaScript", "Tailwind CSS", "Claude"].map((tech, key) => (
                <span key={key} className="inline-block bg-[#0d0a07] font-inter font-semibold text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
