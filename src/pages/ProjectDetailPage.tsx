import { Link, useParams } from "react-router-dom";
import { getProjectBySlug, projects } from "../data/projects";
import ProjectImage from "../components/ProjectImage";
import Footer from "../components/sections/Footer";
import NotFoundPage from "./NotFoundPage";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <NotFoundPage message="We couldn't find that project. It may have moved, or the link has a typo." />;
  }

  const index = projects.indexOf(project);
  const nextProject = projects[(index + 1) % projects.length];

  const meta = [
    project.role && { label: "Role", value: project.role },
    project.year && { label: "Year", value: project.year },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <>
      <main className="bg-[#FFF8D5] text-[#7C0116] text-left min-h-screen pt-28 pb-20 md:pb-28 px-6 md:px-12 lg:px-16">
        <Link to="/work" className="inline-flex items-center gap-2 font-montserrat font-semibold text-sm uppercase tracking-[0.2em] hover:underline">
          <span aria-hidden="true">&larr;</span> All Work
        </Link>

        <header className="mt-10 mb-12 max-w-4xl">
          <h1 className="font-abril font-normal text-5xl md:text-7xl leading-none mb-6">{project.name}</h1>
          <p className="font-montserrat text-lg md:text-xl mb-6">{project.description}</p>

          {project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="font-montserrat font-semibold text-xs px-3 py-1 border border-[#7C0116]">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {meta.length > 0 && (
            <dl className="flex flex-wrap gap-x-10 gap-y-4 mb-6 font-montserrat">
              {meta.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs uppercase tracking-[0.2em] opacity-70">{item.label}</dt>
                  <dd className="font-semibold">{item.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-none bg-[#7C0116] text-[#E0A4B0] border-2 border-[#7C0116] font-montserrat font-semibold hover:bg-[#5e0111] hover:border-[#5e0111] transition-colors"
            >
              Visit Live Site
              <svg xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.9em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </a>
          )}
        </header>

        <ProjectImage project={project} className="aspect-[16/9] border-[#7C0116]/20 mb-16" />

        <div className="max-w-3xl font-montserrat leading-relaxed space-y-12">
          {project.overview && <p className="text-lg">{project.overview}</p>}

          {project.sections?.map((section) => (
            <section key={section.heading}>
              <h2 className="font-abril font-normal text-3xl md:text-4xl mb-4">{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}

          {project.comingSoon && (
            <p className="text-lg">This case study is coming soon. Check back shortly!</p>
          )}
        </div>

        {nextProject !== project && (
          <div className="mt-20 pt-10 border-t border-[#7C0116]">
            <p className="font-montserrat font-semibold uppercase tracking-[0.2em] text-sm mb-3">Next Project</p>
            <Link to={`/work/${nextProject.slug}`} className="font-abril text-4xl md:text-5xl hover:underline">
              {nextProject.name} <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
