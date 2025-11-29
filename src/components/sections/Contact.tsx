import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com'
import React from "react";
import toast from "react-hot-toast";
export default function Contact() {
  const [formData, setFormData] = React.useState({
    name:"",
    email:"",
    message:"" ,
  });

  React.useEffect(() => {
  emailjs.init(import.meta.env.VITE_PUBLIC_KEY);
}, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.currentTarget, import.meta.env.VITE_PUBLIC_KEY).then(() => {
      toast.success("Message sent successfully!");
      setFormData({name:"",
      email:"",
      message:"" ,
      });
    }).catch(() => toast.error("Oops! Something went wrong, please try again."));
  };
    return (
      <section id="contact" className="min-h-screen flex items-center justify-center relative bg-white dark:bg-gray-900 py-20">
      <RevealOnScroll>
        <div className="px-4 w-full max-w-3xl flex flex-col md:flex-row gap-6">
          <h2 className="w-full md:w-1/2 text-gray-900 dark:text-white text-4xl font-bold mb-8">Get in Touch</h2>
          <form className="w-full md:w-1/2 space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-slate-200 dark:bg-white/5 border border-white/10 rounded px-4 py-3 text-gray-900 dark:text-gray-300 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 dark:focus:border-blue-300 dark:focus:bg-blue-300/10"
              placeholder="Name..." />
            </div>
            <div className="relative">
              <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-slate-200 dark:bg-white/5 border border-white/10 rounded px-4 py-3 text-gray-900 dark:text-gray-300 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 dark:focus:border-blue-300 dark:focus:bg-blue-300/10"
              placeholder="example@example.com" />
            </div>
            <div className="relative">
              <textarea 
              id="message" 
              name="message" 
              required 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={5}
              className="w-full bg-slate-200 dark:bg-white/5 border border-white/10 rounded px-4 py-3 text-gray-900 dark:text-gray-300 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 dark:focus:border-blue-300 dark:focus:bg-blue-300/10"
              placeholder="Your message..." />
            </div>
            <button 
            type="submit" 
            className="w-full bg-[#20BF55] text-white px-6 py-3 rounded text-lg font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(32,191,85,0.4)]">
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
      </section>
    );
  }