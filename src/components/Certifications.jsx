import React from 'react';
import { Award, GraduationCap, Trophy } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    { title: 'Full Stack Python Developer', issuer: 'iHub, Hyderabad', date: 'Nov 2023 – Mar 2024' },
    { title: 'Communication Skills Training', issuer: 'Internal', date: 'Nov 2020 – Jan 2021' },
    { title: 'Ideazz 2023', issuer: 'Hackathon', date: 'May 2023' }
  ];

  return (
    <section id="certifications">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Education */}
        <div>
          <h2 className="section-title mb-10 tracking-tight flex items-center gap-3">
             <GraduationCap className="text-primary-600" size={32} />
             Education
          </h2>
          <div className="card-shadow p-10 group bg-white">
            <h3 className="text-2xl font-bold text-text-main group-hover:text-primary-600 transition-colors uppercase tracking-tight">B.E. in Computer Engineering</h3>
            <p className="text-primary-600 font-bold mt-2 mb-4">Sinhgad Institute of Technology and Science, Pune</p>
            <div className="flex justify-between items-center py-4 border-t border-border-subtle mt-6 text-text-muted font-bold">
              <span className="px-4 py-1.5 bg-primary-50 rounded-full text-primary-700">CGPA: 8.11</span>
              <span>2019 – 2023</span>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="section-title mb-10 tracking-tight flex items-center gap-3">
             <Award className="text-primary-600" size={32} />
             Certifications
          </h2>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="card-shadow p-6 flex items-center gap-6 group bg-white border-transparent hover:border-primary-100">
                <div className="p-4 bg-primary-50 rounded-2xl text-primary-600 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500">
                  <Trophy size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-text-main group-hover:text-primary-600 transition-colors uppercase tracking-tight">{cert.title}</h4>
                  <p className="text-sm text-text-muted font-bold mt-1 uppercase tracking-wider opacity-80">{cert.issuer} • {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
