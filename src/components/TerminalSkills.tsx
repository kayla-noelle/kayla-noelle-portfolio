import { useState, useEffect, type JSX } from "react";

interface TerminalStep {
  command: string;
  output: string[];
}

const terminalSteps: TerminalStep[] = [
  { command: "ls frontend.skills/", output: ["JavaScript", "React", "TailwindCSS", "HTML5", "CSS"] },
  { command: "ls design.skills/", output: ["Adobe Suite", "Figma", "Graphic Design", "UI/UX"] },
];

export const TerminalSkills = (): JSX.Element => {
  const [lines, setLines] = useState<JSX.Element[]>([]);
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [typingCommand, setTypingCommand] = useState<boolean>(true);

  useEffect(() => {
    const step = terminalSteps[stepIndex];
    if (!step) return;

    const currentText = typingCommand
      ? step.command
      : step.output.join("  ");

    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        const newLine = lines[lines.length - 1] || <span></span>;
        setLines([
          ...lines.slice(0, -1),
          <span key={lines.length}>
            {newLine.props?.children}
            {currentText[charIndex]}
          </span>,
        ]);
        setCharIndex(charIndex + 1);
      }, 100); // typing speed in ms

      return () => clearTimeout(timeout);
    } else {
      if (typingCommand) {
        // Finished typing command, add a blank line for output
        setLines([...lines, <span key={lines.length}></span>]);
        setCharIndex(0);
        setTypingCommand(false);
      } else {
        // Finished output, move to next step after pause
        const timeout = setTimeout(() => {
          setLines([]); // clear lines for next command
          setStepIndex((stepIndex + 1) % terminalSteps.length);
          setCharIndex(0);
          setTypingCommand(true);
        }, 1500);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, typingCommand, lines, stepIndex]);

  return (
    <div className="terminal-box text-left font-inter">
      {lines.map((line, idx) => {
        const isCurrentLine = idx === lines.length - 1;
        return (
          <div key={idx}>
            {typingCommand && line.props?.children && (
              <span className="command-text">➜ </span>
            )}
            <span className={typingCommand && isCurrentLine ? "command-text" : "output-text"}>
              {line.props?.children}
            </span>
            {isCurrentLine && <span className="blink cursor">|</span>}
          </div>
        );
      })}
    </div>
  );
};
