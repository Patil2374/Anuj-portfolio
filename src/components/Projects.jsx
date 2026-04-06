import React from 'react';
import { ExternalLink, Github, Code, Layers } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'OTT Platform',
      tech: ['Ionic', 'Angular', 'Directus', 'SQLite'],
      description: 'End-to-end OTT app with user authentication, content management, and third-party API integration. Optimized for cross-device performance.',
      icon: <Layers size={32} />
    },
    {
      title: 'Online Voting System',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      description: 'Tamper-resistant voting platform with identity verification and real-time result computation. Focused on security and scalability.',
      icon: <Code size={32} />
    }
  ];

  return (
    <section id="projects" className="bg-primary-50/30 mx-0 max-w-none">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="section-title">Academic & Side <span className="text-primary-600">Projects</span></h2>
          <p className="text-text-muted max-w-xl mt-4">A selection of my professional and personal work demonstrating technical proficiency.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-[40px] border border-border-subtle overflow-hidden group hover:shadow-2xl transition-all duration-700">
              <div className="h-56 bg-slate-50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-transparent"></div>
                <div className="p-8 bg-white shadow-xl shadow-primary-500/5 rounded-3xl text-primary-600 group-hover:scale-125 group-hover:rotate-6 transition-all duration-700 relative z-10">
                  {project.icon}
                </div>
                {/* Decorative circle */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-100/50 rounded-full blur-2xl"></div>
              </div>
              
              <div className="p-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-text-main group-hover:text-primary-600 transition-colors uppercase tracking-tight">{project.title}</h3>
                  <div className="flex gap-4">
                    <a href="#" className="p-2 hover:bg-primary-50 rounded-lg text-text-light hover:text-primary-600 transition-all"><Github size={20} /></a>
                    <a href="#" className="p-2 hover:bg-primary-50 rounded-lg text-text-light hover:text-primary-600 transition-all"><ExternalLink size={20} /></a>
                  </div>
                </div>
                
                <p className="text-text-muted mb-8 leading-relaxed font-medium">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag, i) => (
                    <span key={i} className="text-xs font-bold px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full border border-primary-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
