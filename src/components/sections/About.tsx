import { RevealOnScroll } from "../RevealOnScroll";
export default function About() {
  const frontendSkills = ["React", "TypeScript", "Tailwindcss", "Shopify"];
  const backendSkills = ["Node.js", "Express", "MongoDB", "SQL"];
  const otherSkills = ["AdobeSuite", "Figma", "WCAG", "Accessibility"];
    return (
      <section id="about" className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 flex flex-col md:flex-row gap-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">About Me</h2>
          <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className=" text-left text-gray-900 dark:text-gray-300 mb-6">
              I am a detail-oriented Front End Developer with a background in graphic design. After earning a B.A. in Graphic Design from San Diego State University, I began my career collaborating with various teams across branding, publications, and digital content. In 2021, I expanded my skills by completing a Full Stack Engineering bootcamp with Thinkful, which solidified my focus on software engineering. Today, I bring both design and development expertise together, creating clean, intuitive interfaces and products that are both functional and user-friendly. In my spare time, I am usually feeding that same love of learning –– whether it’s solving Wordle, Sudoku, or crossword puzzles or diving into a good mystery novel. Of course, when I need a break from all the problem solving…I head to the gym 💪
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-gray-900 dark:text-gray-300 text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2"></div>
                {frontendSkills.map((skill,key) => (
                  <span key={key} className="bg-sky-500/10 text-[#20BF55] py-1 px-3 rounded-full text-sm hover:bg-[#20BF55]/20 hover:shadow-[0_2px_8px_rgba(32,191,85,0.2)] transition">{skill}</span>))}
                </div>
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-gray-900 dark:text-gray-300 text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2"></div>
                {backendSkills.map((skill,key) => (
                  <span key={key} className="bg-sky-500/10 text-[#20BF55] py-1 px-3 rounded-full text-sm hover:bg-[#20BF55]/20 hover:shadow-[0_2px_8px_rgba(32,191,85,0.2)] transition">{skill}</span>))}
                </div>
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-gray-900 dark:text-gray-300 text-xl font-bold mb-4"> Other</h3>
                <div className="flex flex-wrap gap-2"></div>
                {otherSkills.map((skill,key) => (
                  <span key={key} className="bg-sky-500/10 text-[#20BF55] py-1 px-3 rounded-full text-sm hover:bg-[#20BF55]/20 hover:shadow-[0_2px_8px_rgba(32,191,85,0.2)] transition">{skill}</span>))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover hover:-translate-y-1 transition-all">
              <h3 className=" text-left text-gray-900 dark:text-gray-300 text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-left text-gray-900 dark:text-gray-300 space-y-2">
                <li>
                  <strong>B.A. in Graphic Design</strong> - San Diego State University, (2014-2019)
                </li>
                <li>
                  <strong>Full-Stack Engineering</strong> - Thinkful, (2021)
                </li>
              </ul>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover hover:-translate-y-1 transition-all">
              <h3 className="text-left text-gray-900 dark:text-gray-300 text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-white-400">
                <div>
                  <h4 className="text-left font-semibold text-gray-900 dark:text-gray-300">Front End Developer at Tubby Todd (DEC 2021-NOV 2025)</h4>
                <p className="text-left text-gray-900 dark:text-gray-300">Ensured quality and performance of Shopify based e-commerce platform through developing and deploying scripts
                    Conducted extensive testing to validate new features, troubleshoot bugs, and maintain site stability across devices and browsers
                </p>
                </div>
                <div>
                  <h4 className="text-left font-semibold text-gray-900 dark:text-gray-300">Social Media Graphic Design Representative at ReviewBoost (FEB 2021-DEC 2021)</h4>
                <p className="text-left text-gray-900 dark:text-gray-300">At Review Boost, I created branded social content, digital assets, and visual templates used across multiple marketing channels. I partnered with the marketing team to support campaigns with eye-catching, conversion-friendly graphics.
                </p>
                </div>
                <div>
                  <h4 className="text-left font-semibold text-gray-900 dark:text-gray-300">Graphic Designer at Preserve Magazine (OCT 2019-JUL 2021)</h4>
                <p className="text-left text-gray-900 dark:text-gray-300">As the sole designer for a lifestyle publication, I owned everything from layout design and editorial visuals to brand assets and print production. Working directly with the magazine’s founder, I shaped the visual direction of each issue and brought every edition to life with clean, cohesive design.
                </p>
                </div>
                <div>
                  <h4 className="text-left font-semibold text-gray-900 dark:text-gray-300">Graphic Designer at Museum of Man (FEB 2020-APR 2020)</h4>
                <p className="text-left text-gray-900 dark:text-gray-300">At the Museum of Man, I produced exhibition visuals, print collateral, and digital designs that supported community-focused programming. I worked within established brand guidelines while helping evolve the museum’s visual language.
                </p>
                </div>
                <div>
                  <h4 className="text-left font-semibold text-gray-900 dark:text-gray-300">Graphic Designer Intern at City of Carlsbad (JUL 2019-AUG 2019)</h4>
                <p className="text-left text-gray-900 dark:text-gray-300">I supported the city’s in-house design team by creating marketing materials, event graphics, social content, and community outreach collateral. I collaborated with multiple departments to keep designs clear, accessible, and on brand.
                </p>
                </div>
              </div>
              </div>
            </div>
          </div>
          </RevealOnScroll>
      </section>

    );
  }
  