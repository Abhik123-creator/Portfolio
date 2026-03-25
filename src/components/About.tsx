export default function About() {
  return (
    <section className="relative z-20 bg-[#121212] py-24 px-8 md:px-24 border-t border-gray-900">
      <div className="max-w-7xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 border-b border-gray-800 pb-8 tracking-tight">
          About & Vision
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Bio Card */}
          <div className="md:col-span-2 bg-gray-900/40 rounded-3xl p-10 border border-gray-800 hover:border-gray-600 transition-colors">
            <h3 className="text-2xl font-semibold text-white mb-4">The Mission</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I am a Full Stack Developer, IT Engineer, and Machine Learning Enthusiast passionate about building scalable applications and intelligent systems. I enjoy solving complex problems using a combination of software engineering and data-driven approaches.
            </p>
            <p className="text-emerald-400 text-lg font-medium">
              Goal: To become a computer scientist and build platforms that provide free, high-quality technical education to underprivileged communities.
            </p>
          </div>

          {/* Core Identity */}
          <div className="bg-gray-900/40 rounded-3xl p-10 border border-gray-800 hover:border-gray-600 transition-colors flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-white mb-6">Identities</h3>
            <ul className="space-y-4">
              {['Tech Blogger', 'Coding & Robotics Educator', 'Photographer', 'Freelancer'].map((role) => (
                <li key={role} className="flex items-center text-gray-400 font-medium">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
                  {role}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="md:col-span-3 bg-gray-900/40 rounded-3xl p-10 border border-gray-800 hover:border-gray-600 transition-colors">
            <h3 className="text-2xl font-semibold text-white mb-8">Engineering Arsenal</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-indigo-400 font-bold mb-4 uppercase tracking-widest text-xs">Frontend</h4>
                <ul className="text-gray-400 space-y-2">
                  <li>React.js</li>
                  <li>JavaScript (ES6+)</li>
                  <li>HTML5 & CSS3</li>
                </ul>
              </div>
              <div>
                <h4 className="text-teal-400 font-bold mb-4 uppercase tracking-widest text-xs">Backend</h4>
                <ul className="text-gray-400 space-y-2">
                  <li>Node.js</li>
                  <li>Spring Boot (Java)</li>
                  <li>Microservices</li>
                  <li>REST APIs</li>
                </ul>
              </div>
              <div>
                <h4 className="text-rose-400 font-bold mb-4 uppercase tracking-widest text-xs">AI & Data</h4>
                <ul className="text-gray-400 space-y-2">
                  <li>Machine Learning</li>
                  <li>NLP</li>
                  <li>Computer Vision (OpenCV)</li>
                  <li>SQL & NoSQL</li>
                </ul>
              </div>
              <div>
                <h4 className="text-amber-400 font-bold mb-4 uppercase tracking-widest text-xs">Tools & Security</h4>
                <ul className="text-gray-400 space-y-2">
                  <li>Git & GitHub</li>
                  <li>Docker</li>
                  <li>Spring Security</li>
                  <li>Firebase</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
