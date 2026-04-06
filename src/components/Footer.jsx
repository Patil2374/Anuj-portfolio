import React from 'react';
import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border-subtle py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-8 group cursor-default">
          <div className="p-2 bg-primary-600 rounded-xl text-white group-hover:rotate-12 transition-transform">
            <Code2 size={24} />
          </div>
          <span className="font-extrabold text-2xl tracking-tighter text-text-main uppercase">Anuj Patil</span>
        </div>

        <p className="text-text-muted max-w-sm mb-10 font-medium leading-relaxed">
           Crafting exceptional digital experiences through clean code and innovative design.
        </p>

        <div className="flex gap-6 mb-12">
          <a href="https://github.com/anujypatil" target="_blank" rel="noopener noreferrer" className="p-4 bg-page-bg rounded-2xl text-text-light hover:text-primary-600 hover:bg-primary-50 transition-all border border-transparent hover:border-primary-100">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/anujypatil" target="_blank" rel="noopener noreferrer" className="p-4 bg-page-bg rounded-2xl text-text-light hover:text-primary-600 hover:bg-primary-50 transition-all border border-transparent hover:border-primary-100">
            <Linkedin size={24} />
          </a>
          <a href="mailto:anujypatil@gmail.com" className="p-4 bg-page-bg rounded-2xl text-text-light hover:text-primary-600 hover:bg-primary-50 transition-all border border-transparent hover:border-primary-100">
            <Mail size={24} />
          </a>
        </div>

        <div className="w-full h-px bg-border-subtle mb-10"></div>

        <p className="text-text-light text-sm font-bold uppercase tracking-[0.2em] flex items-center gap-2">
          Made with <Heart size={14} className="text-red-500 animate-pulse fill-red-500" /> by <span className="text-text-main">Anuj Patil</span> © 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;
