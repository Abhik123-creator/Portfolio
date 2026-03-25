export default function About() {
  return (
    <section className="relative z-20 bg-[#121212] py-32 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-6xl font-medium text-white mb-20 tracking-tight">
          Philosophy <span className="text-white/30">&</span> Arsenal
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Bio Card */}
          <div className="md:col-span-2 bg-white/[0.02] backdrop-blur-xl rounded-3xl p-12 border border-white/10 hover:border-white/20 transition-all duration-500">
            <h3 className="text-xl font-medium text-white/50 mb-6 uppercase tracking-[0.2em]">The Mission</h3>
            <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-10 font-light">
              Engineering robust, scalable architectures while exploring the frontiers of artificial intelligence. I bridge the gap between complex software systems and human-centric design.
            </p>
            <div className="pl-6 border-l-2 border-emerald-500/50">
              <p className="text-white/90 text-lg leading-relaxed font-medium">
                Driven by a singular vision: to democratize technical education through intelligent, accessible platforms.
              </p>
            </div>
          </div>

          {/* Core Identity */}
          <div className="bg-white/[0.02] backdrop-blur-xl rounded-3xl p-12 border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col justify-center">
            <h3 className="text-xl font-medium text-white/50 mb-8 uppercase tracking-[0.2em]">Facets</h3>
            <ul className="space-y-6">
              {['Tech Columnist', 'Robotics Educator', 'Visual Artist', 'Independent Consultant'].map((role) => (
                <li key={role} className="flex items-center text-gray-300 text-lg font-light tracking-wide">
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-4"></span>
                  {role}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="md:col-span-3 bg-white/[0.02] backdrop-blur-xl rounded-3xl p-12 border border-white/10 hover:border-white/20 transition-all duration-500 mt-4">
            <h3 className="text-xl font-medium text-white/50 mb-12 uppercase tracking-[0.2em]">Technical Foundation</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div>
                <h4 className="text-white font-medium mb-6 tracking-wide">Frontend</h4>
                <ul className="text-gray-400 space-y-3 font-light">
                  <li>React Architecture</li>
                  <li>TypeScript / ES6+</li>
                  <li>Modern CSS Ecosystems</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-6 tracking-wide">Backend & Systems</h4>
                <ul className="text-gray-400 space-y-3 font-light">
                  <li>Node.js / Express</li>
                  <li>Spring Boot Enterprise</li>
                  <li>Microservice Topologies</li>
                  <li>RESTful API Design</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-6 tracking-wide">Applied Intelligence</h4>
                <ul className="text-gray-400 space-y-3 font-light">
                  <li>Machine Learning Pipelines</li>
                  <li>Natural Language Processing</li>
                  <li>Computer Vision (OpenCV)</li>
                  <li>Relational & NoSQL Datastores</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-6 tracking-wide">Infrastructure</h4>
                <ul className="text-gray-400 space-y-3 font-light">
                  <li>Containerization (Docker)</li>
                  <li>Version Control (Git)</li>
                  <li>Spring Security</li>
                  <li>Cloud Deployments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
