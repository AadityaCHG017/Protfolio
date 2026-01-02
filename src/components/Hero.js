import React from 'react';

const Hero = ({ data }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-16 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-600/20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Aaditya
              </span>
            </h1>
            <p className="text-2xl text-blue-400 font-semibold mb-4">Aspiring Full Stack Developer</p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg">
              I build elegant solutions to complex problems using modern web technologies. Passionate about creating user-friendly interfaces and scalable backend systems.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button 
                onClick={() => scrollToSection('projects')}
                className="btn-primary"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
              >
                Download CV
              </button>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="w-72 h-72 mx-auto floating">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-75 blur-3xl"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={process.env.PUBLIC_URL + '/myimg.jpeg'}
                alt="Profile"
                className="absolute bottom-110 right-110 rounded-full border-4 border-white shadow-lg object-cover w-[250px] h-[250px] md:w-[470px] md:h-[470px]"
              />
              </div>
            </div>
          </div>
        </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
