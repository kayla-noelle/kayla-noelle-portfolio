import { useEffect, useRef } from "react";

/**
 * Stacking-cards scroll effect: the section sticks once you've scrolled to its
 * bottom, and the next StackSection slides up over it.
 *
 * Sections taller than the screen get a negative `top`, so you can scroll
 * through all of their content before they pin instead of the bottom being
 * covered up.
 */
export default function StackSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      el.style.top = `${Math.min(0, window.innerHeight - el.offsetHeight)}px`;
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={ref} className="sticky">
      {children}
    </div>
  );
}
