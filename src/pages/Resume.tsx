// Resume Section
export default function Resume() {
    const jobs = [
      {
        title: "Front-End Developer at Tubby Todd",
        date: "DEC 2021- NOV 2025",
        points: [
          "Developed and maintained Shopify stores using Liquid, HTML, CSS, and JavaScript.",
          "Collaborated with designers and developers to improve UI/UX across multiple platforms.",
          "Implemented features to enhance cart functionality and customer experience."
        ]
      },
      {
        title: "Social Media Graphic Designer at ReviewBoost",
        date: "FEB 2021 - DEC 2021",
        points: [
          "Created visually compelling editorial layouts and digital content.",
          "Worked closely with editorial teams to deliver designs on tight deadlines."
        ]
      },
      {
        title: "Graphic Designer at Preserve Magazine",
        date: "OCT 2019 - JUL 2021",
        points: [
          "Created visually compelling editorial layouts and digital content.",
          "Worked closely with editorial teams to deliver designs on tight deadlines."
        ]
      }
    ];
  
    return (
      <section id="resume" className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-6">Resume</h2>
        <ul className="space-y-6">
          {jobs.map((job, index) => (
            <li key={index}>
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-gray-600">{job.date}</p>
              <ul className="list-disc list-inside text-gray-700 ml-4 mt-2">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    );
  }