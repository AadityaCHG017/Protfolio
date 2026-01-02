import React from 'react';

const Experience = ({ data }) => {
  return (
    <section id="experience" className="py-20 px-4 bg-slate-900 bg-opacity-30">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Work Experience</h2>
        <div className="space-y-8">
          {data.experience.map((exp) => (
            <div
              key={exp.id}
              className="bg-slate-800 bg-opacity-50 backdrop-blur p-8 rounded-xl border border-slate-700 card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">{exp.position}</h3>
                  <p className="text-gray-400 text-lg">{exp.company}</p>
                </div>
                <span className="text-gray-500 font-semibold whitespace-nowrap">{exp.duration}</span>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {exp.description}
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm md:text-base">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
