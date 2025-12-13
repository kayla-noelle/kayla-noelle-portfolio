import { RevealOnScroll } from "../RevealOnScroll";
// Resume Section will change it to Projects Section
export default function Projects() {
  return(
    <section id="projects" className="py-16 flex flex-col items-center justify-center p-8 bg-[#faf7f2]">
      <RevealOnScroll>
        <h2 className="text-[#1c1c1c] text-4xl font-bold mb-8">Projects</h2>
      <p className="text-[#1c1c1c] text-lg max-w-3xl text-center">
        Currently Under Construction 🚧
      </p>
      </RevealOnScroll>
    </section>
  )
}