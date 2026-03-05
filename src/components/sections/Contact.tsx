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
      <section id="contact" className="py-16 flex items-center justify-center relative bg-white overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-[#2C7A7B] opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-sky-400 opacity-15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#2C7A7B] opacity-10 rounded-full blur-3xl"></div>
        </div>
      <RevealOnScroll>
        <div
          className="w-full px-4 md:w-[600px] mx-auto rounded-2xl p-8 hover:-translate-y-1 transition-all relative"
          style={{
            background: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.45)",
            boxShadow: "0 8px 32px rgba(44, 122, 123, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(44, 122, 123, 0.08)",
          }}
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
              className="font-inter w-full rounded-lg px-4 py-3 text-[#1c1c1c] placeholder-[#1c1c1c]/50 transition focus:outline-none focus:ring-2 focus:ring-[#2C7A7B]/40"
              style={{
                background: "rgba(255, 255, 255, 0.35)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.55)",
              }}
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
              className="font-inter w-full rounded-lg px-4 py-3 text-[#1c1c1c] placeholder-[#1c1c1c]/50 transition focus:outline-none focus:ring-2 focus:ring-[#2C7A7B]/40"
              style={{
                background: "rgba(255, 255, 255, 0.35)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.55)",
              }}
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
              className="font-inter w-full rounded-lg px-4 py-3 text-[#1c1c1c] placeholder-[#1c1c1c]/50 transition focus:outline-none focus:ring-2 focus:ring-[#2C7A7B]/40"
              style={{
                background: "rgba(255, 255, 255, 0.35)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.55)",
              }}
              placeholder="Your message..." />
            </div>
            <button
            type="submit"
            className="btn-border-reveal w-full bg-[#2C7A7B] text-white px-6 py-3 rounded-full text-lg font-libre transition relative overflow-hidden">
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
      </section>
    );
  }