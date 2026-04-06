import React, { useState, useRef } from 'react';
import { Mail, Smartphone, Linkedin, Send, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Please note: The user will need to provide or put these IDs in their .env file
    // Using environment variables is best practice. E.g., import.meta.env.VITE_EMAILJS_SERVICE_ID
    // For this example we look for them, or if missing the request to emailjs will fail visibly.
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
          console.log(result.text);
          setSubmitStatus('success');
          setIsSubmitting(false);
          formRef.current.reset();
      }, (error) => {
          console.log(error.text);
          setSubmitStatus('error');
          setIsSubmitting(false);
      });
  };

  return (
    <section id="contact">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="section-title">Get In <span className="text-primary-600">Touch</span></h2>
        <p className="text-text-muted max-w-xl mt-4 font-medium">Have a project in mind or just want to say hi? Feel free to reach out!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Contact Form */}
        <div className="bg-white p-10 md:p-12 rounded-[48px] border border-border-subtle shadow-sm relative">
          
          {submitStatus === 'success' && (
            <div className="absolute top-4 right-4 left-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-2xl flex items-center gap-3">
              <CheckCircle2 size={20} className="text-green-500" />
              <p className="font-semibold text-sm">Message sent successfully!</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="absolute top-4 right-4 left-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-2xl flex items-center gap-3">
              <AlertCircle size={20} className="text-red-500" />
              <p className="font-semibold text-sm">Oops! Something went wrong. Please try again.</p>
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-black text-text-main uppercase tracking-widest opacity-60 ml-2">Name</label>
                <input 
                  type="text" 
                  name="user_name"
                  required
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-page-bg rounded-2xl border border-transparent focus:border-primary-300 focus:bg-white focus:outline-none transition-all font-bold"
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-black text-text-main uppercase tracking-widest opacity-60 ml-2">Email</label>
                <input 
                  type="email" 
                  name="user_email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 bg-page-bg rounded-2xl border border-transparent focus:border-primary-300 focus:bg-white focus:outline-none transition-all font-bold"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-sm font-black text-text-main uppercase tracking-widest opacity-60 ml-2">Subject</label>
              <input 
                type="text" 
                name="subject"
                required
                placeholder="How can I help?"
                className="w-full px-6 py-4 bg-page-bg rounded-2xl border border-transparent focus:border-primary-300 focus:bg-white focus:outline-none transition-all font-bold"
              />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-black text-text-main uppercase tracking-widest opacity-60 ml-2">Message</label>
              <textarea 
                name="message"
                required
                rows="5"
                placeholder="Your message starts here..."
                className="w-full px-6 py-4 bg-page-bg rounded-2xl border border-transparent focus:border-primary-300 focus:bg-white focus:outline-none transition-all resize-none font-bold"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`btn-primary w-full py-5 text-lg font-black uppercase tracking-widest flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={20} />
            </button>
          </form>
        </div>

        {/* Contact Info Tiles */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-10 tracking-tight">Contact Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-border-subtle flex items-center gap-6 group hover:border-primary-200 transition-all">
              <div className="p-4 bg-primary-50 rounded-2xl text-primary-600 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500">
                <Smartphone size={28} />
              </div>
              <div>
                <p className="text-xs font-black text-text-light uppercase tracking-widest mb-1">Call Me</p>
                <p className="text-xl font-black text-text-main tracking-tight">+91-7721029878</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-border-subtle flex items-center gap-6 group hover:border-primary-200 transition-all">
              <div className="p-4 bg-primary-50 rounded-2xl text-primary-600 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500">
                <Mail size={28} />
              </div>
              <div className="truncate">
                <p className="text-xs font-black text-text-light uppercase tracking-widest mb-1">Email Me</p>
                <p className="text-xl font-black text-text-main tracking-tight truncate">anujypatil@gmail.com</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-border-subtle flex items-center gap-6 group hover:border-primary-200 transition-all">
              <div className="p-4 bg-primary-50 rounded-2xl text-primary-600 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500">
                <Linkedin size={28} />
              </div>
              <div>
                <p className="text-xs font-black text-text-light uppercase tracking-widest mb-1">LinkedIn</p>
                <a href="https://linkedin.com/in/anujypatil" target="_blank" rel="noopener noreferrer" className="text-xl font-black text-text-main tracking-tight hover:text-primary-600 transition-colors">
                  anujypatil
                </a>
              </div>
            </div>

            <div className="bg-primary-600 p-8 rounded-3xl flex items-center gap-6 text-white shadow-xl shadow-primary-600/20">
               <div className="p-4 bg-white/10 rounded-2xl">
                 <MapPin size={28} />
               </div>
               <div>
                 <p className="text-xs font-black text-white/60 uppercase tracking-widest mb-1">Location</p>
                 <p className="text-xl font-black tracking-tight">Pune, Maharashtra</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
