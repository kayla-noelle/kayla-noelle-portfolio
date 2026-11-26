import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// Project data now lives in src/data/projects.ts (shared with /work and /work/:slug).
import { projects } from "../../data/projects";
import ProjectImage from "../ProjectImage";

const RED = "#7C0116";

export default function Projects() {
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  // While a click/arrow is smooth-scrolling the carousel, don't let the
  // scroll position overwrite the project that was picked.
  const autoScrolling = useRef<number | undefined>(undefined);
  // Mouse drag-to-scroll state.
  const drag = useRef({ down: false, startX: 0, startScroll: 0, moved: false });

  const setActiveIndex = (index: number) => {
    activeRef.current = index;
    setActive(index);
  };

  // Click a card, number or the arrow: scroll that card to the left edge.
  const select = (index: number) => {
    const viewport = viewportRef.current;
    const card = cardRefs.current[index];
    setActiveIndex(index);
    if (!viewport || !card) return;
    window.clearTimeout(autoScrolling.current);
    autoScrolling.current = window.setTimeout(() => (autoScrolling.current = undefined), 700);
    viewport.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  };

  const next = () => select((activeRef.current + 1) % projects.length);

  // Swipe / trackpad / drag: the counter follows how far along the carousel is.
  const onScroll = () => {
    const viewport = viewportRef.current;
    if (!viewport || autoScrolling.current !== undefined) return;
    const max = viewport.scrollWidth - viewport.clientWidth;
    const progress = max > 0 ? viewport.scrollLeft / max : 0;
    const index = Math.round(progress * (projects.length - 1));
    if (index !== activeRef.current) setActiveIndex(index);
  };

  // Touch and trackpads scroll natively; this adds click-and-drag for a mouse.
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || e.button !== 0 || !viewportRef.current) return;
    drag.current = { down: true, startX: e.clientX, startScroll: viewportRef.current.scrollLeft, moved: false };
  };

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const d = drag.current;
      const viewport = viewportRef.current;
      if (!d.down || !viewport) return;
      const dx = e.clientX - d.startX;
      if (Math.abs(dx) > 5) d.moved = true;
      if (d.moved) viewport.scrollLeft = d.startScroll - dx;
    };
    const onUp = () => { drag.current.down = false; };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  // A drag shouldn't also count as a click on a card or project link.
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  const pad = (n: number) => String(n + 1).padStart(2, "0");

  return (
    <section id="projects" className="bg-[#FFF8D5] py-20 md:py-28 overflow-hidden text-left">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 pl-6 md:pl-12 lg:pl-16">
          {/* Left column: heading top-left, counter bottom-left */}
          <div className="flex flex-col justify-between gap-12 pr-6 lg:pr-0 lg:w-[340px] shrink-0">
            <div>
              <p className="font-montserrat font-semibold uppercase tracking-[0.2em] text-sm text-[#7C0116] mb-3">
                Featured Projects
              </p>
              <h2 className="font-abril font-normal text-5xl md:text-6xl leading-none text-[#7C0116]">
                Selected Work
              </h2>
              <button
                type="button"
                onClick={next}
                aria-label="Next project"
                className="mt-8 block cursor-pointer transition-transform hover:translate-x-1"
              >
                <svg width="104" height="48" viewBox="0 0 104 48" fill="none" aria-hidden="true">
                  <circle cx="24" cy="24" r="24" fill="#E0A4B0" />
                  <circle cx="24" cy="24" r="4" fill={RED} />
                  <line x1="24" y1="24" x2="100" y2="24" stroke={RED} strokeWidth="2" />
                  <polyline points="92,17 100,24 92,31" stroke={RED} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <Link
                to="/work"
                className="mt-6 inline-block font-montserrat font-semibold uppercase tracking-[0.2em] text-sm text-[#7C0116] hover:underline"
              >
                View all work
              </Link>
            </div>

            {/* Counter: 01 —— 02 03 04 */}
            <div className="flex items-end gap-4 text-[#7C0116]" role="tablist" aria-label="Projects">
              {projects.map((project, i) => (
                <div key={project.name} className="flex items-end gap-4">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    aria-label={project.name}
                    onClick={() => select(i)}
                    className={`font-abril leading-none cursor-pointer transition-all duration-300 ${
                      i === active ? "text-5xl opacity-100" : "text-lg opacity-40 hover:opacity-70"
                    }`}
                  >
                    {pad(i)}
                  </button>
                  {i === active && i < projects.length - 1 && (
                    <span className="block w-12 h-px bg-[#7C0116] mb-2" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Carousel: runs off the right edge of the screen */}
          <div
            ref={viewportRef}
            onScroll={onScroll}
            onPointerDown={onPointerDown}
            onClickCapture={onClickCapture}
            onDragStart={(e) => e.preventDefault()}
            className="relative flex-1 min-w-0 overflow-x-auto overscroll-x-contain select-none cursor-grab active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex gap-6 w-max">
              {projects.map((project, i) => (
                <article
                  key={project.name}
                  ref={(el) => { cardRefs.current[i] = el; }}
                  onClick={() => select(i)}
                  className="shrink-0 w-[260px] md:w-[320px] cursor-pointer text-[#7C0116]"
                >
                  {/* Portrait image (placeholder until the project has one) */}
                  <ProjectImage
                    project={project}
                    className={`aspect-[4/5] transition-colors ${
                      i === active ? "border-[#7C0116]" : "border-[#7C0116]/20"
                    }`}
                  />

                  <div className="pt-5">
                    <h3 className="font-abril text-2xl mb-2">
                      <Link
                        to={`/work/${project.slug}`}
                        draggable={false}
                        className="inline-flex items-center gap-1 hover:underline"
                      >
                        {project.name}
                        <svg xmlns="http://www.w3.org/2000/svg" width="0.7em" height="0.7em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                      </Link>
                    </h3>
                    <p className="font-montserrat text-[15px] mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="font-montserrat font-semibold text-xs px-3 py-1 border border-[#7C0116]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
}
