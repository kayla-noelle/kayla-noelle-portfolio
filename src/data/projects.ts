/**
 * All portfolio projects live here.
 *
 * To add a project, copy one of the objects below and give it a unique `slug`.
 * The slug becomes its URL: { slug: "my-project" } -> /work/my-project
 *
 * The homepage carousel, the /work gallery and the /work/:slug case study pages
 * all read from this list, so a new entry shows up everywhere automatically.
 */

export type CaseStudySection = {
  heading: string;
  body: string;
};

export type Project = {
  slug: string;
  name: string;
  /** One-line summary shown on cards. */
  description: string;
  tags: string[];
  /** Link to the live site, shown as a button on the case study page. */
  liveUrl?: string;
  /** Imported image (or a path in /public) used on cards and the case study hero. */
  image?: string;
  comingSoon?: boolean;
  role?: string;
  year?: string;
  /** Longer intro paragraph at the top of the case study. */
  overview?: string;
  /** Free-form case study sections, rendered in order. */
  sections?: CaseStudySection[];
};

export const projects: Project[] = [
  {
    slug: "that-pizza-place",
    name: "That Pizza Place",
    description: "Redesigning a beloved Carlsbad pizza place website",
    tags: ["React", "JavaScript", "Tailwind CSS", "Claude"],
    liveUrl: "https://majestic-begonia-ac7c57.netlify.app/",
    // Placeholder case study content: replace with your own write-up.
    sections: [
      { heading: "The Challenge", body: "Describe the problem the original site had and what the client needed." },
      { heading: "My Approach", body: "Walk through your design and development process." },
      { heading: "The Outcome", body: "Share the results, what you learned, or what's next." },
    ],
  },
  {
    slug: "tubby-todd",
    name: "Tubby Todd",
    description: "Contributed to Tubby Todd's e-commerce experience",
    tags: ["Shopify", "Liquid", "JavaScript"],
    liveUrl: "https://tubbytodd.com/",
  },
  {
    slug: "esker-beauty",
    name: "Esker Beauty",
    description: "Coming Soon",
    tags: [],
    comingSoon: true,
  },
  {
    slug: "preserve-magazine",
    name: "Preserve Magazine",
    description: "Coming Soon",
    tags: [],
    comingSoon: true,
  },
];

export const getProjectBySlug = (slug: string | undefined) =>
  projects.find((project) => project.slug === slug);
