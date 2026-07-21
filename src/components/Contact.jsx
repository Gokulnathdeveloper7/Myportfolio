import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaExclamationTriangle, FaSpinner } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import BlurText from './reactbits/BlurText';

const SMTP_USER = import.meta.env.VITE_SMTP_USER || "gokulnath32478@gmail.com";
const SMTP_PASS = import.meta.env.VITE_SMTP_PASS || "lzwpnvzbjvewqvba";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      // 1. If EmailJS configuration is set up in .env, use EmailJS SDK
      if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: SMTP_USER,
          },
          EMAILJS_PUBLIC_KEY
        );
        setStatus({ type: 'success', message: 'Message sent successfully via EmailJS!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else if (window.Email && typeof window.Email.send === 'function') {
        // 2. Send directly using SMTPJS with configured SMTP credentials
        const response = await window.Email.send({
          Host: "smtp.gmail.com",
          Username: SMTP_USER,
          Password: SMTP_PASS,
          To: SMTP_USER,
          From: formData.email,
          Subject: `[Portfolio Contact] ${formData.subject}`,
          Body: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #1e293b;">
              <h2 style="color: #2563eb; margin-bottom: 15px;">New Contact Form Message</h2>
              <p style="margin: 8px 0;"><strong>Name:</strong> ${formData.name}</p>
              <p style="margin: 8px 0;"><strong>Email:</strong> ${formData.email}</p>
              <p style="margin: 8px 0;"><strong>Subject:</strong> ${formData.subject}</p>
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
              <p style="margin: 8px 0;"><strong>Message:</strong></p>
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 15px; borderRadius: 8px; font-size: 14px; white-space: pre-wrap;">${formData.message}</div>
            </div>
          `
        });

        if (response === "OK" || (typeof response === 'string' && response.toLowerCase().includes('ok'))) {
          setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          console.warn("SMTP response:", response);
          setStatus({
            type: 'error',
            message: `SMTP response: ${response}. You can also email directly to ${SMTP_USER}.`
          });
        }
      } else {
        // 3. Fallback to Mailto link if client JS libraries are blocked
        const mailtoUrl = `mailto:${SMTP_USER}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoUrl;
        setStatus({
          type: 'success',
          message: 'Opening default email client...'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      console.error("Error submitting contact form:", err);
      setStatus({
        type: 'error',
        message: `Failed to send email. Please write to ${SMTP_USER} directly.`
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <p className="text-slate-400 text-sm">Fill out the form or reach out directly via email.</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center text-lg flex-shrink-0">
                <FaEnvelope />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-xs font-bold text-slate-400">Email</span>
                <a href={`mailto:${SMTP_USER}`} className="text-sm text-slate-700 font-semibold hover:text-blue-500 transition-colors break-all">
                  {SMTP_USER}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
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
                <label htmlFor="email" className="text-xs font-bold text-slate-500 ml-1">Your Email</label>
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
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin text-lg" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {status.type === 'success' && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl text-sm font-semibold flex items-center gap-3 animate-fade-in">
                <FaCheckCircle className="text-emerald-500 text-lg flex-shrink-0" />
                <span>{status.message}</span>
              </div>
            )}

            {status.type === 'error' && (
              <div className="p-4 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-sm font-semibold flex items-center gap-3 animate-fade-in">
                <FaExclamationTriangle className="text-rose-500 text-lg flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span>{status.message}</span>
                  <a href={`mailto:${SMTP_USER}?subject=${encodeURIComponent(formData.subject || 'Inquiry')}&body=${encodeURIComponent(formData.message || '')}`} className="underline hover:text-rose-900 font-bold">
                    Click here to open mail app directly
                  </a>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
