import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Honeywell via WorldVision IT',
      role: 'Angular Developer',
      period: 'Oct 2025 – Present',
      location: 'Pune, Maharashtra',
      description: [
        'Develop enterprise-grade Angular web apps with multi-role permission frameworks and dynamic access control',
        'Build analytical dashboards for operational monitoring, reporting, and workflow orchestration',
        'Collaborate with cross-functional teams to deliver scalable frontend solutions on schedule'
      ]
    },
    {
      company: 'WorldVision IT Solutions Pvt. Ltd.',
      role: 'Full Stack & Mobile Developer',
      period: 'Jan 2025 – Present',
      location: 'Pune, Maharashtra',
      description: [
        'Engineered 3–5 production-ready cross-platform mobile apps using React Native and Node.js',
        'Built INDEF Commissioning App and INDEF Connect with secure authentication and registration workflows',
        'Delivered Resource Management System (RMS) featuring GPS geofencing and real-time tracking',
        'Developed scalable Node.js REST APIs supporting real-time data operations'
      ]
    },
    {
      company: 'Yohita Technologies',
      role: 'Full Stack Developer Intern',
      period: 'Apr 2024 – Dec 2024',
      location: 'Pune, Maharashtra',
      description: [
        'Developed web and mobile applications using Angular, Ionic, and WordPress with REST API integrations',
        'Resolved software defects, participated in code reviews, and maintained technical documentation'
      ]
    }
  ];

  return (
    <section id="experience" className="bg-white/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title mb-12">Professional <span className="text-primary-600">Journey</span></h2>
        
        <div className="relative pl-8 md:pl-0">
          {/* Vertical Line */}
          <div className="timeline-line md:left-1/2"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="timeline-dot md:left-1/2 md:-translate-x-1/2 z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white p-8 rounded-[32px] border border-border-subtle shadow-sm hover:shadow-md transition-all group overflow-hidden relative">
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary-600/10 group-hover:bg-primary-600 transition-colors"></div>
                    
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} mb-4`}>
                      <span className="text-sm font-bold text-primary-600 mb-2">{exp.period}</span>
                      <h3 className="text-2xl font-bold text-text-main group-hover:text-primary-600 transition-colors">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-text-muted font-semibold mt-1">
                        <Briefcase size={16} className="text-primary-600" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <ul className={`space-y-3 ${index % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className={`flex items-start gap-3 text-text-muted text-sm leading-relaxed ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-400 shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Date for Desktop (Hidden on mobile side) */}
                <div className={`hidden md:block w-[45%] font-black text-6xl text-primary-600/5 select-none pointer-events-none ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                   {exp.period.split(' – ')[0]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
