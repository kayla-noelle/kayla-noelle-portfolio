import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router keeps the scroll position between pages, so a new page could
 * open halfway down. This scrolls to the top on every page change, or to the
 * section in the URL hash (e.g. "/#contact").
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a frame so the new page has rendered before looking for the section.
      const frame = requestAnimationFrame(() => {
        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
      });
      return () => cancelAnimationFrame(frame);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
