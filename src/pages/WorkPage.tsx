import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectImage from "../components/ProjectImage";
import Footer from "../components/sections/Footer";

export default function WorkPage() {
  return (
    <>
      <main className="bg-[#FFF8D5] text-[#7C0116] text-left min-h-screen pt-32 pb-20 md:pb-28 px-6 md:px-12 lg:px-16">
        <p className="font-montserrat font-semibold uppercase tracking-[0.2em] text-sm mb-3">Portfolio</p>
        <h1 className="font-abril font-normal text-5xl md:text-7xl leading-none mb-12 md:mb-16">Selected Work</h1>

        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.slug} to={`/work/${project.slug}`} className="group block">
              <ProjectImage
                project={project}
                className="aspect-[4/5] border-[#7C0116]/20 group-hover:border-[#7C0116] transition-colors"
              />
              <div className="pt-5">
                <h2 className="font-abril text-2xl mb-2 group-hover:underline">{project.name}</h2>
                <p className="font-montserrat text-[15px] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-montserrat font-semibold text-xs px-3 py-1 border border-[#7C0116]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
