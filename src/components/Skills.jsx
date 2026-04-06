import React from 'react';
import { Code2, Smartphone, Database, Server, Settings, Layout } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 size={24} />,
      skills: ['JavaScript', 'Python', 'C', 'PHP', 'TypeScript']
    },
    {
      title: 'Frontend / Web',
      icon: <Layout size={24} />,
      skills: ['Angular', 'React', 'HTML', 'CSS', 'Ionic', 'Tailwind CSS']
    },
    {
      title: 'Mobile',
      icon: <Smartphone size={24} />,
      skills: ['React Native (Android & iOS)', 'Ionic', 'Mobile UI/UX']
    },
    {
      title: 'Backend',
      icon: <Server size={24} />,
      skills: ['Node.js', 'Django', 'PHP', '.NET']
    },
    {
      title: 'Databases',
      icon: <Database size={24} />,
      skills: ['MySQL', 'SQLite', 'Directus']
    },
    {
      title: 'Tools & Core',
      icon: <Settings size={24} />,
      skills: ['Git', 'GitHub', 'REST APIs', 'RBAC', 'GPS & Geofencing']
    }
  ];

  return (
    <section id="skills">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="section-title">Core <span className="text-primary-600">Competencies</span></h2>
        <p className="text-text-muted max-w-xl mt-4">A comprehensive toolkit of technologies and methodologies I use to build robust digital solutions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white p-10 rounded-[40px] border border-border-subtle shadow-sm hover:shadow-lg hover:border-primary-100 transition-all duration-500 group">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-primary-50 rounded-2xl text-primary-600 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-text-main group-hover:text-primary-600 transition-colors uppercase tracking-tight">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2 text-primary-200">
              {category.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 bg-page-bg rounded-xl text-sm font-bold text-text-muted hover:text-primary-600 hover:bg-primary-50 border border-transparent hover:border-primary-100 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
