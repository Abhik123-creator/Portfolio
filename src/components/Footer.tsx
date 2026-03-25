export default function Footer() {
  return (
    <footer className="relative z-20 bg-black py-16 px-8 md:px-24 border-t border-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-0">
        <div className="max-w-md">
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Abhik Kumar Panda</h2>
          <p className="text-gray-500 italic max-w-xs leading-relaxed">
            "Technology is not just about building systems — it's about solving real-world problems and empowering people."
          </p>
        </div>
        
        <div className="flex flex-col md:text-right space-y-4">
          <a href="mailto:abhik.kr.panda@gmail.com" className="text-gray-400 hover:text-emerald-400 transition-colors font-medium">
            abhik.kr.panda@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/abhik-kumar-panda-701b2220a" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors font-medium">
            LinkedIn Profile
          </a>
          <p className="text-gray-600 text-sm tracking-wider uppercase">Chandannagar, West Bengal, India</p>
        </div>
      </div>
    </footer>
  );
}
