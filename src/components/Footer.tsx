export default function Footer() {
  return (
    <footer className="relative z-20 bg-[#0a0a0a] py-24 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 md:gap-0">
        <div className="max-w-xl">
          <h2 className="text-3xl font-medium text-white mb-6 tracking-tight">Abhik Kumar Panda</h2>
          <p className="text-white/40 text-xl font-light leading-relaxed">
            "Technology reaches its highest potential not in the systems it builds, but in the human potential it unlocks."
          </p>
        </div>
        
        <div className="flex flex-col md:text-right space-y-6">
          <div>
            <p className="text-white/30 text-sm uppercase tracking-[0.2em] mb-2 font-medium">Inquiries</p>
            <a href="mailto:abhik.kr.panda@gmail.com" className="text-white hover:text-white/70 transition-colors text-lg font-light">
              abhik.kr.panda@gmail.com
            </a>
          </div>
          <div>
            <p className="text-white/30 text-sm uppercase tracking-[0.2em] mb-2 font-medium">Network</p>
            <a href="https://www.linkedin.com/in/abhik-kumar-panda-701b2220a" target="_blank" rel="noreferrer" className="text-white hover:text-white/70 transition-colors text-lg font-light">
              LinkedIn Profile
            </a>
          </div>
          <div>
            <p className="text-white/30 text-sm uppercase tracking-[0.2em] mb-2 font-medium">Locale</p>
            <p className="text-white text-lg font-light">Chandannagar, WB, India</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/30 text-sm font-light tracking-wide">
        <p>© {new Date().getFullYear()} Abhik Kumar Panda. All rights reserved.</p>
        <p className="mt-4 md:mt-0">Designed & Engineered with Precision.</p>
      </div>
    </footer>
  );
}
