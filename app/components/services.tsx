export default function Services() {
  const services = [
    {
      title: "10-Day AI MVP Launch",
      price: "€7.5k",
      duration: "10 days",
      description: "From concept to functional AI MVP in under two weeks. Ideal for founders needing to validate demand rapidly.",
      features: [
        "Rapid prototyping with Next.js & AI",
        "LLM integration (OpenAI/Claude/Ax)",
        "Database & Auth setup (Convex/Supabase)",
        "Mobile-responsive UI/UX",
        "Production-ready deployment"
      ],
      cta: "Launch your MVP",
      popular: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z"></path>
        </svg>
      )
    },
    {
      title: "AI & Code Security Audit",
      price: "€3k",
      duration: "Fixed price",
      description: "Auditing 'vibe-coded' or rapid MVP projects to ensure they are secure, scalable, and ready for real users.",
      features: [
        "Security vulnerability scan",
        "Architecture & Scalability review",
        "AI prompt injection testing",
        "Performance optimization",
        "Actionable refactoring roadmap"
      ],
      cta: "Audit my project",
      popular: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      )
    },
    {
      title: "Fractional AI Lead",
      price: "€1.2k",
      duration: "per day",
      description: "Senior technical leadership for scaling teams. Strategic guidance on AI integration and system architecture.",
      features: [
        "Technical strategy & roadmap",
        "AI vendor selection & evaluation",
        "Code review & Mentorship",
        "System architecture design",
        "Hiring & Team building support"
      ],
      cta: "Hire Fractional Lead",
      popular: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200 mt-12 pt-16 px-4 mb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <p className="text-sm text-neutral-500 font-medium uppercase tracking-widest mb-2">Services & Partnerships</p>
          <h3 className="text-4xl sm:text-5xl text-neutral-900 font-medium tracking-tighter font-playfair">
            Scale your ideas with precision and speed.
          </h3>
          <p className="text-lg text-neutral-600 mt-4">
            Focused on high-velocity development and robust AI architecture.
          </p>
        </div>
        <a 
          href="https://cal.com/steven-ung-7epnj7/30min" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center justify-center gap-2 hover:bg-neutral-800 transition text-sm font-medium text-white bg-black h-12 rounded-full px-8 shadow-lg shadow-neutral-200"
        >
          Book a discovery call
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div 
            key={service.title} 
            className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
              service.popular 
                ? 'bg-white border-2 border-blue-600 shadow-xl shadow-blue-50' 
                : 'bg-neutral-50 border border-neutral-200 hover:border-neutral-300 hover:bg-white hover:shadow-lg'
            }`}
          >
            {service.popular && (
              <span className="absolute -top-4 left-8 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wide">
                MOST POPULAR
              </span>
            )}
            
            <div className="mb-6 p-3 bg-white rounded-2xl w-fit shadow-sm border border-neutral-100">
              {service.icon}
            </div>

            <h4 className="text-xl font-bold text-neutral-900 mb-2 font-playfair">{service.title}</h4>
            
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-bold text-neutral-900">{service.price}</span>
              <span className="text-sm text-neutral-500 font-medium">{service.duration}</span>
            </div>

            <p className="text-sm text-neutral-600 mb-8 leading-relaxed">
              {service.description}
            </p>

            <ul className="space-y-4 mb-10 flex-grow">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-neutral-700">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <a 
              href="https://cal.com/steven-ung-7epnj7/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`inline-flex items-center justify-center h-12 rounded-2xl text-sm font-bold transition-all ${
                service.popular
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-100'
                  : 'bg-white text-neutral-900 border border-neutral-200 hover:bg-neutral-50'
              }`}
            >
              {service.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
