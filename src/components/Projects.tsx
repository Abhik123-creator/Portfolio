export default function Projects() {
  const projects = [
    { title: "Dynamic Form Builder", desc: "An intuitive drag-and-drop architecture enabling dynamic schema generation and robust backend synchronization.", category: "Systems Architecture", color: "from-blue-500/20" },
    { title: "Gesture Recognition", desc: "Real-time computer vision engine translating spatial hand gestures into semantic text via deep learning pipelines.", category: "Computer Vision", color: "from-purple-500/20" },
    { title: "Bengali News Summarizer", desc: "An automated pipeline leveraging optical character recognition and natural language processing to distill regional news ecosystems.", category: "Machine Learning", color: "from-emerald-500/20" },
    { title: "Acoustic Threat Detection", desc: "A proactive algorithmic security layer performing real-time structural and semantic analysis to identify linguistic anomalies.", category: "Applied AI", color: "from-rose-500/20" },
  ];

  return (
    <section className="relative z-20 bg-[#121212] py-32 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-medium text-white mb-20 tracking-tight">
          Selected <span className="text-white/30">Works</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative h-[450px] rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-700 hover:border-white/30 cursor-pointer`}
            >
              {/* Subtle gradient wash that reacts on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0`} />
              
              <div className="absolute bottom-0 left-0 p-10 z-20 transform transition-transform duration-700 group-hover:-translate-y-4">
                <p className="text-xs font-medium text-white/50 mb-4 uppercase tracking-[0.2em]">
                  {project.category}
                </p>
                <h3 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">
                  {project.title}
                </h3>
                <div className="h-0 overflow-hidden transition-all duration-700 group-hover:h-24">
                  <p className="text-gray-400 text-lg opacity-0 transform translate-y-4 transition-all duration-700 group-hover:opacity-100 group-hover:translate-y-0 leading-relaxed max-w-sm font-light">
                    {project.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
