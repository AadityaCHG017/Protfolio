import React from 'react';

const Footer = ({ data }) => {
  return (
    <footer className="border-t border-slate-700 py-8 px-4 bg-slate-900 bg-opacity-30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-gray-400">© 2024 {data.personal.name}. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-1">Designed & Built using React & Tailwind CSS</p>
          </div>

          <div className="flex gap-6">
            <a 
              href="https://github.com/AadityaCHG017"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition text-2xl"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/aaditya-chandra-gupta-17842b2b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition text-2xl"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="mailto:aadityacg2@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition text-2xl"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
