import React from 'react';

const About = ({ data }) => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="fade-in-up">
            <h2 className="section-title text-left md:text-3xl">About Me</h2>
            <div className="space-y-6 text-gray-300">
              {data.about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800 bg-opacity-50 backdrop-blur p-8 rounded-xl border border-slate-700 card-hover transform">
              <div className="text-4xl font-bold text-blue-400 mb-2">0</div>
              <p className="text-gray-300 text-lg">Years of Experience</p>
            </div>
            <div className="bg-slate-800 bg-opacity-50 backdrop-blur p-8 rounded-xl border border-slate-700 card-hover transform">
              <div className="text-4xl font-bold text-blue-400 mb-2">2</div>
              <p className="text-gray-300 text-lg">Projects Completed</p>
            </div>
            <div className="bg-slate-800 bg-opacity-50 backdrop-blur p-8 rounded-xl border border-slate-700 card-hover transform">
              <div className="text-4xl font-bold text-blue-400 mb-2">0</div>
              <p className="text-gray-300 text-lg">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
