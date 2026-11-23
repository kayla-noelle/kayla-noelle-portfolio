import { useEffect, useState } from 'react';

const WORD = "Loading";
const DURATION = 2000; // ms before the site fades in
const TICK = 110;      // how often the letters swap fonts

// The last font is the one every letter lands on: the site's heading font.
const FONTS = [
  "'Montserrat', sans-serif",
  "'Poppins', sans-serif",
  "'IBMPlexMono', monospace",
  "Georgia, serif",
  "'Courier New', monospace",
  "'Brush Script MT', cursive",
  "Impact, sans-serif",
];
const FINAL_FONT = "'Abril Fatface', serif";

// Letter i stops changing at this tick, so they settle one by one, left to right.
const settleTick = (i: number) => Math.round(6 + i * 1.5); // last letter lands ~1.65s

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  // People who turn off animations in their OS settings just see the final font.
  const [reduced] = useState(prefersReducedMotion);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(onComplete, DURATION);
    return () => clearTimeout(timeout);
  }, [onComplete]);

  useEffect(() => {
    if (reduced) return;
    const interval = setInterval(() => setTick((t) => t + 1), TICK);
    return () => clearInterval(interval);
  }, [reduced]);

  return (
    <div className="fixed inset-0 z-50 bg-[#7C0116] text-[#E0A4B0] flex items-center justify-center">
      <p className="text-6xl md:text-8xl leading-none" aria-label={WORD} role="status">
        {WORD.split("").map((letter, i) => {
          const settled = reduced || tick >= settleTick(i);
          return (
            <span
              key={i}
              aria-hidden="true"
              // A fixed width while flickering keeps the word from jumping around.
              className={`inline-block text-center ${settled ? "" : "min-w-[0.55em]"}`}
              style={{ fontFamily: settled ? FINAL_FONT : FONTS[(tick + i * 3) % FONTS.length] }}
            >
              {letter}
            </span>
          );
        })}
      </p>
    </div>
  );
}
