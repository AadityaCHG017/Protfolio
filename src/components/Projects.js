import React from 'react';

const Projects = ({ data }) => {
  const gradients = [
    'from-blue-500 to-purple-600',
    'from-green-500 to-emerald-600',
    'from-purple-500 to-pink-600',
    'from-orange-500 to-red-600'
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-slate-800 bg-opacity-50 backdrop-blur rounded-xl overflow-hidden border border-slate-700 card-hover"
            >
              <div className={`h-64 bg-gradient-to-br ${gradients[index]} relative overflow-hidden`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-300 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-blue-400 font-medium">
                  
                  <a href={project.github} className="hover:text-blue-300 transition flex items-center gap-1">
                    GitHub <i className="fas fa-arrow-right text-xs"></i>
                  </a>
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
