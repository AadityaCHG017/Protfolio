import React from 'react';

const Experience = ({ data }) => {
  return (
    <section id="experience" className="py-20 px-4 bg-slate-900 bg-opacity-30">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Experience</h2>
        <div className="space-y-8">
          {Array.isArray(data.experience) && data.experience.length > 0 ? (
            data.experience.map((exp, idx) => (
              <div
                key={exp.id ?? idx}
                className="bg-slate-800 bg-opacity-50 backdrop-blur p-8 rounded-xl border border-slate-700 card-hover"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                  <div>
                    {exp.University ? (
                      <h3 className="text-2xl font-bold text-blue-400">{exp.University}</h3>
                    ) : null}
                    {exp.role ? (
                      <p className="text-gray-400 text-lg">{exp.role}</p>
                    ) : null}
                  </div>
                  {exp.duration ? (
                    <span className="text-gray-500 font-semibold whitespace-nowrap">{exp.duration}</span>
                  ) : null}
                </div>

                {exp.description ? (
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                ) : null}

                {Array.isArray(exp.responsibilities) && exp.responsibilities.length > 0 ? (
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    {exp.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))
          ) : (
            <p className="text-gray-300">No experience entries found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
