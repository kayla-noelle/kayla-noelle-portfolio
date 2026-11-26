import type { Project } from "../data/projects";

/** The project's image, or the "Image coming soon" placeholder until it has one. */
export default function ProjectImage({ project, className = "" }: { project: Project; className?: string }) {
  if (project.image) {
    return <img src={project.image} alt={project.name} className={`w-full object-cover ${className}`} />;
  }

  return (
    <div className={`w-full flex flex-col items-center justify-center gap-2 bg-[#E0A4B0]/40 border text-[#7C0116] ${className}`}>
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span className="font-montserrat text-xs uppercase tracking-widest opacity-50">Image coming soon</span>
    </div>
  );
}
