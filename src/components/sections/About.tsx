export default function About() {
  const frontendSkills = ["React", "TypeScript", "Tailwindcss", "Shopify"];
  const backendSkills = ["Node.js", "Express", "MongoDB", "SQL"];
    return (
      <section id="about" className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">About Me</h2>
          <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-900 dark:text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web applications and creating innovative soluitions. I’ve always been a problem solver at heart. As a kid I loved puzzles, solving riddles and finding patterns in things. I was drawn to anything that I could figure out. That curiosity stayed with me throughout the years guiding me as I entered into my career. Eventually that evolved into a love for good design – solving visual problems and crafting experiences that make sense at a glance. After graduating from San Diego State with a B.A. in Graphic Design, I began my career as a graphic designer. I collaborated with different companies and teams, working across branding, publications, and digital content. In 2021, I decided to take a leap to expand and challenge myself in a new way, joining a Full Stack Engineering bootcamp with Thinkful. Writing code gave me the same feeling I had as a kid solving puzzles –– that mix of curiosity, logic, and satisfaction when everything clicks. It became quickly clear that software engineering was where I wanted to grow. Now as a Front End Developer, I bring both design and engineering together. I care about details, clean interfaces, and building products where that not only works but feels good to use. In my spare time, I am usually feeding that same love of learning –– whether it’s solving Wordle, Sudoku, or crossword puzzles or diving into a good mystery novel. Of course, when I need a break from all the problem solving…I head to the gym 💪
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-gray-900 dark:text-gray-300text-xl font-bold mb-4"> Frontend</h3>
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
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover hover:-translate-y-1 transition-all">
              <h3 className="text-gray-900 dark:text-gray-300 text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-900 dark:text-gray-300 space-y-2">
                <li>
                  <strong>B.A. in Graphic Design</strong> - San Diego State University, (2014-2019)
                </li>
                <li>
                  <strong>Full-Stack Engineering</strong> - Thinkful, (2021)
                </li>
              </ul>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover hover:-translate-y-1 transition-all">
              <h3 className="text-gray-900 dark:text-gray-300 text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-white-400">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-300">Front End Developer at Tubby Todd (DEC 2021-NOV 2025)</h4>
                <p className="text-gray-900 dark:text-gray-300">Ensured quality and performance of Shopify based e-commerce platform through developing and deploying scripts
                    Conducted extensive testing to validate new features, troubleshoot bugs, and maintain site stability across devices and browsers
                </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-300">Social Media Graphic Design Representative at ReviewBoost (FEB 2021-DEC 2021)</h4>
                <p className="text-gray-900 dark:text-gray-300">Ensured quality and performance of Shopify based e-commerce platform through developing and deploying scripts
                    Conducted extensive testing to validate new features, troubleshoot bugs, and maintain site stability across devices and browsers
                </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-300">Graphic Designer at Preserve Magazine (OCT 2019-JUL 2021)</h4>
                <p className="text-gray-900 dark:text-gray-300">Ensured quality and performance of Shopify based e-commerce platform through developing and deploying scripts
                    Conducted extensive testing to validate new features, troubleshoot bugs, and maintain site stability across devices and browsers
                </p>
                </div>
              </div>
              </div>
            </div>
          </div>
      </section>

    );
  }
  