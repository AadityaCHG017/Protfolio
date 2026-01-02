import React, { useState } from 'react';

const Navbar = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-950 bg-opacity-95 backdrop-blur-lg z-50 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            ACG
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-blue-400 transition font-medium">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition font-medium">About</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-blue-400 transition font-medium">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-blue-400 transition font-medium">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition font-medium">Contact</button>
          </div>

          <button onClick={() => scrollToSection('contact')} className="hidden md:block btn-primary text-sm">
            Get in Touch
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-blue-400" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-300 hover:text-blue-400 py-2">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-300 hover:text-blue-400 py-2">About</button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left text-gray-300 hover:text-blue-400 py-2">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-gray-300 hover:text-blue-400 py-2">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-300 hover:text-blue-400 py-2">Contact</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
