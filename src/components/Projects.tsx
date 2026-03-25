export default function Projects() {
  const projects = [
    { title: "Dynamic Form Builder", desc: "Drag-and-drop dynamic schema builder with full backend integration for storage/retrieval.", category: "Full Stack" },
    { title: "Gesture Recognition", desc: "Live translation of hand gestures into meaningful text using MediaPipe, TensorFlow, and NLP.", category: "Computer Vision" },
    { title: "Bengali News Summarizer", desc: "Extracts Bengali headlines natively via EasyOCR and structurally summarizes news via NLP.", category: "Machine Learning" },
    { title: "Voice Threat Detection", desc: "Real-time algorithmic speech processing analyzing tone/keywords to detect threats via ML.", category: "Applied AI" },
  ];

  return (
    <section className="relative z-20 min-h-screen bg-[#121212] py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 border-b border-gray-800 pb-8 tracking-tight">
          Featured Engineering
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative h-[420px] rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur-md transition-all duration-500 hover:border-gray-600 hover:bg-gray-800/80 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-10" />
              <div className="absolute bottom-0 left-0 p-8 z-20 transform transition-transform duration-500 group-hover:-translate-y-4">
                <p className="text-xs font-bold text-emerald-400 mb-3 uppercase tracking-[0.2em] drop-shadow-md">
                  {project.category}
                </p>
                <h3 className="text-3xl font-semibold text-white mb-4">
                  {project.title}
                </h3>
                <div className="h-0 overflow-hidden transition-all duration-500 group-hover:h-16">
                  <p className="text-gray-300 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 leading-relaxed max-w-sm">
                    {project.desc}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
