import { RevealOnScroll } from "../RevealOnScroll";
// Resume Section will change it to Projects Section
export default function Projects() {
  return(
    <section id="projects" className="py-16 flex flex-col items-center justify-center p-8 bg-stone-50">
      <RevealOnScroll>
        <h2 className="text-[#1c1c1c] text-4xl font-bold mb-8">Projects</h2>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-[#1c1c1c] text-2xl font-bold mb-4">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-[#1c1c1c] rounded-lg border hover:-translate-y-1 transition-all bg-fuchsia-200">
              <h3 className="text-[#1c1c1c] text-xl font-bold mb-2">Portfolio Website</h3>
              <p className="text-[#1c1c1c] mb-4">A personal portfolio website to showcase my projects and skills.</p>
               {["React", "TypeScript", "Tailwind CSS"].map((tech, key) => (
                <span key={key} className="inline-block bg-[#1c1c1c] text-[#faf7f2] px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  {tech}
                </span>
              ))}
            </div>
            <div className="p-6 border border-[#1c1c1c] rounded-lg border hover:-translate-y-1 transition-all bg-fuchsia-200">
              <h3 className="text-[#1c1c1c] text-xl font-bold mb-2">Book Tracking App (In-progress)</h3>
              <p className="text-[#1c1c1c] mb-4">A book tracking application to manage reading progress and reviews.</p>
               {["React", "TypeScript", "Tailwind CSS", "Next.js"].map((tech, key) => (
                <span key={key} className="inline-block bg-[#1c1c1c] text-[#faf7f2] px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  {tech}
                </span>
              ))}
              <div className="flex justify-center items-center">
                <a href ="https://github.com/kayla-noelle/book-tracking-app" className="text-[#1c1c1c] hover:underline">View Project →</a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}