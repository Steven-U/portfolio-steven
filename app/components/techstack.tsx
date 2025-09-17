export default function TechStack() {
  const technologies = [
    {
      category: "Frontend",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn UI"]
    },
    {
      category: "Backend & Database",
      items: ["Node.js", "Supabase", "PostgreSQL", "Prisma", "Docker"]
    },
    {
      category: "AI & Machine Learning",
      items: ["Claude API", "OpenAI", "Langchain", "Custom Models", "MLOps"]
    },
    {
      category: "DevOps & Tools",
      items: ["GitHub Actions", "CI/CD", "Docker", "Vercel", "AWS"]
    },
    {
      category: "Data & Analytics",
      items: ["Python", "SQL", "Data Analysis", "Jupyter", "Pandas"]
    },
    {
      category: "Design & UX",
      items: ["Figma", "Adobe Suite", "Responsive Design", "User Research"]
    }
  ]

  return (
    <section id="techstack" className="sm:p-8 max-w-7xl bg-neutral-50 rounded-3xl mt-10 mb-20 mx-auto p-6">
      <div className="relative pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-40"></div>
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-40"></div>
        <div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent opacity-40"></div>
        <div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent opacity-40"></div>
      </div>
      <div className="relative z-10">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2 2 7l10 5 10-5z"></path>
              <path d="m2 17 10 5 10-5"></path>
              <path d="m2 12 10 5 10-5"></path>
            </svg>
            Tech Stack
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-neutral-900 font-medium leading-[1.05] tracking-tight font-playfair mb-4">
            Technologies & Tools
          </h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            A comprehensive toolkit for building scalable, AI-powered solutions from frontend to deployment.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {technologies.map((tech) => (
            <div key={tech.category} className="bg-white rounded-2xl p-6 border border-neutral-200 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4 tracking-tight">
                {tech.category}
              </h3>
              <div className="space-y-2">
                {tech.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                    <span className="text-sm text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-600">
            Always learning and adapting to the latest technologies to deliver cutting-edge solutions.
          </p>
        </div>
      </div>
    </section>
  )
}