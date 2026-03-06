import { RevealOnScroll } from "../RevealOnScroll";
// Resume Section will change it to Projects Section
export default function Projects() {
  return(
    <section id="projects" className="py-16 flex flex-col items-center justify-center p-8 bg-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-[#2C7A7B] opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-sky-400 opacity-15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-10 w-60 h-60 bg-[#2C7A7B] opacity-10 rounded-full blur-3xl"></div>
      </div>
      <RevealOnScroll>
        <h2 className="text-[#1c1c1c] text-4xl font-bold mb-8">Projects</h2>
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-6 rounded-2xl hover:-translate-y-1 transition-all"
              style={{
                background: "rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.45)",
                boxShadow: "0 8px 32px rgba(44, 122, 123, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(44, 122, 123, 0.08)",
              }}
            >
              <h3 className="text-xl font-bold mb-2">
                <a href="https://github.com/kayla-noelle/kayla-noelle-portfolio" target="_blank" rel="noopener noreferrer" className="text-[#1c1c1c] hover:text-[#2C7A7B] transition-colors">Portfolio Website</a>
              </h3>
              <p className="font-inter text-[#1c1c1c] mb-4">A personal portfolio website to showcase my projects and skills.</p>
               {["React", "TypeScript", "Tailwind CSS", "Claude"].map((tech, key) => (
                <span key={key} className="inline-block bg-[#2C7A7B] font-inter font-semibold text-[#D7FDFE] px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  {tech}
                </span>
              ))}
            </div>
            <div
              className="p-6 rounded-2xl hover:-translate-y-1 transition-all"
              style={{
                background: "rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.45)",
                boxShadow: "0 8px 32px rgba(44, 122, 123, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(44, 122, 123, 0.08)",
              }}
            >
              <h3 className="text-xl font-bold mb-2">
                <a href="https://kayla-noelle.github.io/design-accessbility-tool/" target="_blank" rel="noopener noreferrer" className="text-[#1c1c1c] hover:text-[#2C7A7B] transition-colors">Design Accessbility Tool (In-progress)</a>
              </h3>
              <p className="font-inter text-[#1c1c1c] mb-4">Follow along with me! I am currently creating a tool to help guide designers to making creative choices that are accessible for users!</p>
               {["React", "TypeScript", "Tailwind CSS"].map((tech, key) => (
                <span key={key} className="inline-block bg-[#2C7A7B] font-inter font-semibold text-[#D7FDFE] px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  {tech}
                </span>
              ))}
            </div>
            <div
              className="p-6 rounded-2xl hover:-translate-y-1 transition-all"
              style={{
                background: "rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.45)",
                boxShadow: "0 8px 32px rgba(44, 122, 123, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(44, 122, 123, 0.08)",
              }}
            >
              <h3 className="text-xl font-bold mb-2">
                <a href="https://kayla-noelle.github.io/book-tracking-app/" target="_blank" rel="noopener noreferrer" className="text-[#1c1c1c] hover:text-[#2C7A7B] transition-colors">Book Tracking App (In-progress)</a>
              </h3>
              <p className="font-inter text-[#1c1c1c] mb-4">A book tracking application to manage reading progress and reviews.</p>
               {["React", "TypeScript", "Tailwind CSS", "Next.js"].map((tech, key) => (
                <span key={key} className="inline-block bg-[#2C7A7B] font-inter font-semibold text-[#D7FDFE] px-3 py-1 rounded-full text-sm mr-2 mb-2">
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
