export default function Experience() {
  const experiences = [
    {
      role: "Java Full Stack Engineer",
      company: "Cognizant (via Cambridge University Press & Assessment)",
      date: "July 2025 – Present",
      desc: "Working on enterprise-level applications leveraging Spring Boot and React. Building scalable backend APIs and implementing secure authentication systems."
    },
    {
      role: "Campus Ambassador",
      company: "Techfest IIT Bombay",
      date: "Jan 2022 – Present",
      desc: "Promoted technical initiatives and engaged students in innovation and emerging technology programs."
    },
    {
      role: "Freelance Full Stack Developer & Tutor",
      company: "Independent",
      date: "April 2019 – Present",
      desc: "Built Result Management, Fee Payment, and Student Management platforms. Conducted coding & robotics training and guided smart-hardware projects."
    }
  ];

  return (
    <section className="relative z-20 bg-[#121212] py-24 px-8 md:px-24 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 border-b border-gray-800 pb-8 tracking-tight">
          Experience
        </h2>
        <div className="space-y-16">
          {experiences.map((exp, i) => (
            <div key={i} className="flex flex-col md:flex-row md:gap-16 group cursor-default">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <p className="text-gray-500 font-mono text-sm uppercase tracking-widest group-hover:text-gray-400 transition-colors">{exp.date}</p>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {exp.role}
                </h3>
                <h4 className="text-lg text-gray-400 mb-4">{exp.company}</h4>
                <p className="text-gray-400 leading-relaxed max-w-2xl">
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
