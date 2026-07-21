import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import BlurText from './reactbits/BlurText';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="w-full py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <BlurText text="Get In Touch" className="text-4xl md:text-5xl font-black text-slate-900 justify-center mb-4" delay={80} />
        <p className="text-lg text-slate-400">Ready to start a data-driven conversation? Let's connect.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm">
        {/* Info */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Contact Information</h3>
            <p className="text-slate-400 text-sm">Fill out the form or reach out directly.</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center text-lg flex-shrink-0">
                <FaEnvelope />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-400">Email</span>
                <a href="mailto:gokulnathdeveloper7@gmail.com" className="text-sm text-slate-700 font-semibold hover:text-blue-500 transition-colors break-all">
                  gokulnathdeveloper7@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center text-lg flex-shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-400">Location</span>
                <span className="text-sm text-slate-700 font-semibold">Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3">
              <a href="https://linkedin.com/in/gokulnathj" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center text-lg transition-all hover:-translate-y-0.5 shadow-sm">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Gokulnathdeveloper7" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-900 text-white flex items-center justify-center text-lg transition-all hover:-translate-y-0.5 shadow-sm">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-bold text-slate-500 ml-1">Full Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-shadow" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-bold text-slate-500 ml-1">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-shadow" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-xs font-bold text-slate-500 ml-1">Subject</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Data Analytics Opportunity"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-shadow" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-bold text-slate-500 ml-1">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="4" placeholder="Hello Gokul, we have an opening..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-shadow resize-y"></textarea>
            </div>

            <button type="submit" disabled={isSubmitting}
              className={`w-full py-3.5 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 transition-all shadow-md ${isSubmitting ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 shadow-blue-200 hover:-translate-y-0.5'}`}>
              {isSubmitting ? 'Sending...' : <><FaPaperPlane /> Send Message</>}
            </button>

            {submitStatus === 'success' && (
              <div className="p-3 bg-green-50 border border-green-100 text-green-600 rounded-xl text-center text-sm font-bold">
                ✓ Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
