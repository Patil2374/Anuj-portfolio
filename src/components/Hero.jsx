import React from 'react';
import { Mail, Smartphone, MapPin, Github, Linkedin, ArrowRight, Code2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-48 md:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="order-2 lg:order-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-bold mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
          </span>
          AVAILABLE FOR NEW PROJECTS
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight leading-[1.1] text-text-main">
          Hello! I'm <br />
          <span className="text-primary-600">Anuj Patil</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-text-muted mb-10 max-w-xl font-medium leading-relaxed">
          A dedicated <span className="font-bold text-text-main underline decoration-primary-300 decoration-4">Software Developer</span> bridging the gap between innovative design and robust functionality.
        </h2>

        <div className="flex flex-col gap-5 mb-10">
          <div className="flex items-center gap-3 text-text-muted hover:text-primary-600 transition-colors">
            <div className="p-2 bg-primary-50 rounded-lg text-primary-600"><Mail size={18} /></div>
            <span className="font-semibold">anujypatil@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-text-muted hover:text-primary-600 transition-colors">
            <div className="p-2 bg-primary-50 rounded-lg text-primary-600"><Smartphone size={18} /></div>
            <span className="font-semibold">+91-7721029878</span>
          </div>
          <div className="flex items-center gap-3 text-text-muted">
            <div className="p-2 bg-primary-50 rounded-lg text-primary-600"><MapPin size={18} /></div>
            <span className="font-semibold">Pune, Maharashtra</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <a href="#projects" className="btn-primary group">
            Check My Work <ArrowRight size={20} className="inline-block transition-transform group-hover:translate-x-1" />
          </a>
          <div className="flex gap-4 ml-2">
            <a href="https://github.com/anujypatil" target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-border-subtle rounded-xl text-text-muted hover:text-primary-600 hover:border-primary-100 transition-all shadow-sm active:scale-90">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/anujypatil" target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-border-subtle rounded-xl text-text-muted hover:text-primary-600 hover:border-primary-100 transition-all shadow-sm active:scale-90">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
        <div className="relative">
          {/* Main frame */}
          <div className="w-64 h-80 md:w-80 md:h-[450px] bg-primary-50 rounded-[48px] border-4 border-white shadow-xl relative z-10 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-transparent flex items-center justify-center text-primary-300">
               {/* Since I don't have the user's photo, I'll use the generated image tool if needed, 
                   but for now, a placeholder with a nice gradient and icon */}
               <div className="flex flex-col items-center">
                 <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center text-white mb-4">
                   <Code2 size={40} />
                 </div>
                 <span className="font-black text-4xl opacity-20">AP.</span>
               </div>
             </div>
          </div>
          {/* Decorative shapes behind */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-200 rounded-full blur-3xl opacity-50 -z-0"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-teal-100 rounded-full blur-3xl opacity-50 -z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
