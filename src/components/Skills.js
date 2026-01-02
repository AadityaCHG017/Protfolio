import React from 'react';

const Skills = ({ data }) => {
  const iconMap = {
    Frontend: 'fas fa-laptop-code',
    Backend: 'fas fa-server',
    Tools: 'fas fa-tools',
    'Soft Skills': 'fas fa-handshake'
  };

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900 bg-opacity-30">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.skills.map((skillCategory, index) => (
            <div 
              key={index}
              className="bg-slate-800 bg-opacity-50 backdrop-blur p-8 rounded-xl border border-slate-700 card-hover"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-3">
                <i className={iconMap[skillCategory.category]}></i>
                {skillCategory.category}
              </h3>
              <div className="space-y-3 flex flex-wrap gap-2">
                {skillCategory.items.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
