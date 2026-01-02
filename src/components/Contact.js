import React, { useState } from 'react';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Let's Work Together</h2>
        <p className="text-center text-gray-400 text-xl mb-12">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800 bg-opacity-50 backdrop-blur p-6 rounded-xl border border-slate-700 text-center card-hover">
            <div className="text-4xl text-blue-400 mb-4">
              <i className="fas fa-envelope"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">Email</h3>
            <a href={`mailto:${data.personal.email}`} className="text-gray-400 hover:text-blue-400 transition">
              aadityacg2@gmail.com
            </a>
          </div>

          <div className="bg-slate-800 bg-opacity-50 backdrop-blur p-6 rounded-xl border border-slate-700 text-center card-hover">
            <div className="text-4xl text-blue-400 mb-4">
              <i className="fas fa-phone"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">Phone</h3>
            <a href={`tel:${data.personal.phone}`} className="text-gray-400 hover:text-blue-400 transition">
              {data.personal.phone}
            </a>
          </div>

          <div className="bg-slate-800 bg-opacity-50 backdrop-blur p-6 rounded-xl border border-slate-700 text-center card-hover">
            <div className="text-4xl text-blue-400 mb-4">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">Location</h3>
            <p className="text-gray-400">{data.personal.location}</p>
          </div>
        </div>

        <div className="bg-slate-800 bg-opacity-50 backdrop-blur p-8 rounded-xl border border-slate-700">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-slate-900 bg-opacity-50 border border-slate-600 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-slate-900 bg-opacity-50 border border-slate-600 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full bg-slate-900 bg-opacity-50 border border-slate-600 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition resize-none"
            ></textarea>
            <button
              type="submit"
              className="btn-primary w-full"
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-6">
          <a href="https://github.com/AadityaCHG017" className="text-gray-400 hover:text-blue-400 transition text-3xl">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/aaditya-chandra-gupta-17842b2b8/" className="text-gray-400 hover:text-blue-400 transition text-3xl">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:aadityacg2@gmail.com" className="text-gray-400 hover:text-blue-400 transition text-3xl">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
