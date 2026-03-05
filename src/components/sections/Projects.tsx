import { RevealOnScroll } from "../RevealOnScroll";
// Resume Section will change it to Projects Section
export default function Projects() {
  return(
    <section id="projects" className="py-16 flex flex-col items-center justify-center p-8 bg-white">
      <RevealOnScroll>
        <h2 className="text-[#1c1c1c] text-4xl font-bold mb-8">Projects</h2>
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-2">
                <a href="https://github.com/kayla-noelle/kayla-noelle-portfolio" target="_blank" rel="noopener noreferrer" className="text-[#1c1c1c] hover:text-[#2C7A7B] transition-colors">Portfolio Website</a>
              </h3>
              <p className="font-inter text-[#1c1c1c] mb-4">A personal portfolio website to showcase my projects and skills.</p>
               {["React", "TypeScript", "Tailwind CSS", "Claude"].map((tech, key) => (
                <span key={key} className="inline-block bg-[#2C7A7B] font-inter text-[#faf7f2] px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  {tech}
                </span>
              ))}
            </div>
            <div className="p-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-2">
                <a href="https://kayla-noelle.github.io/design-accessbility-tool/" target="_blank" rel="noopener noreferrer" className="text-[#1c1c1c] hover:text-[#2C7A7B] transition-colors">Design Accessbility Tool (In-progress)</a>
              </h3>
              <p className="font-inter text-[#1c1c1c] mb-4">Follow along with me! I am currently creating a tool to help guide designers to making creative choices that are accessible for users!</p>
               {["React", "TypeScript", "Tailwind CSS"].map((tech, key) => (
                <span key={key} className="inline-block bg-[#2C7A7B] font-inter text-[#faf7f2] px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  {tech}
                </span>
              ))}
            </div>
            <div className="p-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-2">
                <a href="https://kayla-noelle.github.io/book-tracking-app/" target="_blank" rel="noopener noreferrer" className="text-[#1c1c1c] hover:text-[#2C7A7B] transition-colors">Book Tracking App (In-progress)</a>
              </h3>
              <p className="font-inter text-[#1c1c1c] mb-4">A book tracking application to manage reading progress and reviews.</p>
               {["React", "TypeScript", "Tailwind CSS", "Next.js"].map((tech, key) => (
                <span key={key} className="inline-block bg-[#2C7A7B] font-inter text-[#faf7f2] px-3 py-1 rounded-full text-sm mr-2 mb-2">
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
