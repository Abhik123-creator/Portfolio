export default function Experience() {
  const experiences = [
    {
      role: "Java Full Stack Engineer",
      company: "Cognizant",
      date: "July 2025 – Present",
      desc: "Architecting enterprise-scale applications with a focus on high-availability backend services and fluid, reactive interfaces."
    },
    {
      role: "Campus Ambassador",
      company: "Techfest IIT Bombay",
      date: "Jan 2022 – Present",
      desc: "Spearheaded technical initiatives, fostering a culture of innovation and connecting emerging talent with cutting-edge technological paradigms."
    },
    {
      role: "Independent Consultant & Educator",
      company: "Freelance",
      date: "April 2019 – Present",
      desc: "Delivered bespoke full-stack solutions ranging from academic management platforms to smart-hardware integrations. Mentored emerging developers in algorithmic thinking and robotics."
    }
  ];

  return (
    <section className="relative z-20 bg-[#121212] py-32 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-medium text-white mb-20 tracking-tight">
          Professional <span className="text-white/30">Tenure</span>
        </h2>
        <div className="space-y-20">
          {experiences.map((exp, i) => (
            <div key={i} className="flex flex-col md:flex-row md:gap-24 group cursor-default">
              <div className="md:w-1/4 mb-6 md:mb-0 pt-2">
                <p className="text-white/30 font-mono text-sm uppercase tracking-[0.2em] transition-colors duration-500 group-hover:text-white/60">{exp.date}</p>
              </div>
              <div className="md:w-3/4 relative">
                {/* Subtle timeline connector for desktop */}
                <div className="hidden md:block absolute -left-12 top-4 w-px h-full bg-white/5 group-last:bg-transparent" />
                <div className="hidden md:block absolute -left-[1.55rem] top-3 w-3 h-3 rounded-full border-2 border-white/20 bg-[#121212] transition-colors duration-500 group-hover:border-white/80" />
                
                <h3 className="text-3xl font-medium text-white mb-3 tracking-tight transition-colors duration-500 group-hover:text-white/90">
                  {exp.role}
                </h3>
                <h4 className="text-xl text-white/50 mb-6 font-light">{exp.company}</h4>
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl font-light">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
