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
    }).catch(() => toast.error("That didn’t load. Technology, am I right?"));
  };
    return (
      <section id="contact" className="py-16 flex items-center justify-center bg-[#fffcf3]">
      <RevealOnScroll>
        <div
          className="w-full px-4 md:w-[600px] mx-auto rounded-2xl p-8 hover:-translate-y-1 transition-all border border-[#0d0a07]"
        >
          <h2 className="text-[#1c1c1c] text-4xl font-bold mb-8">Get in Touch</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="font-inter w-full rounded-lg px-4 py-3 text-[#1c1c1c] placeholder-[#1c1c1c]/50 transition focus:outline-none focus:ring-2 focus:ring-[#2C7A7B]/40 border border-[#0d0a07]"
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
              className="font-inter w-full rounded-lg px-4 py-3 text-[#1c1c1c] placeholder-[#1c1c1c]/50 transition focus:outline-none focus:ring-2 focus:ring-[#2C7A7B]/40 border border-[#0d0a07]"
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
              className="font-inter w-full rounded-lg px-4 py-3 text-[#1c1c1c] placeholder-[#1c1c1c]/50 transition focus:outline-none focus:ring-2 focus:ring-[#2C7A7B]/40 border border-[#0d0a07]"
              placeholder="Your message..." />
            </div>
            <button
            type="submit"
            className="btn-border-reveal w-full bg-[#9342fc] text-white px-6 py-3 rounded-full text-lg font-libre font-bold transition relative overflow-hidden">
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
      </section>
    );
  }