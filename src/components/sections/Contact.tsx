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
      <section id="contact" className="py-20 md:py-28 flex items-center justify-center bg-[#A7CFE3] text-[#7C0116] relative overflow-hidden">
        <div
          className="relative z-10 w-full px-6 md:w-[600px] mx-auto"
        >
          <h2 className="text-[#7C0116] font-abril text-4xl font-normal mb-8 max-w-lg mx-auto text-balance">Let's Build Something Beautiful Together!</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <label htmlFor="name" className="block text-left font-montserrat text-sm font-medium text-[#7C0116] mb-1">Your Name</label>
              <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="font-montserrat w-full rounded-none px-4 py-3 bg-[#FFF8D5] text-[#7C0116] placeholder-[#7C0116]/70 border-0 transition focus:outline-none focus:ring-2 focus:ring-[#7C0116]"
              placeholder="Name..." />
            </div>
            <div className="relative">
              <label htmlFor="email" className="block text-left font-montserrat text-sm font-medium text-[#7C0116] mb-1">Your Email</label>
              <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="font-montserrat w-full rounded-none px-4 py-3 bg-[#FFF8D5] text-[#7C0116] placeholder-[#7C0116]/70 border-0 transition focus:outline-none focus:ring-2 focus:ring-[#7C0116]"
              placeholder="example@example.com" />
            </div>
            <div className="relative">
              <label htmlFor="message" className="block text-left font-montserrat text-sm font-medium text-[#7C0116] mb-1">Your Message</label>
              <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={5}
              className="font-montserrat w-full rounded-none px-4 py-3 bg-[#FFF8D5] text-[#7C0116] placeholder-[#7C0116]/70 border-0 transition focus:outline-none focus:ring-2 focus:ring-[#7C0116]"
              placeholder="Your message..." />
            </div>
            <button
            type="submit"
            className="relative isolate overflow-hidden w-full px-6 py-3 rounded-none border-2 border-[#7C0116] text-[#7C0116] hover:text-[#E0A4B0] font-montserrat font-semibold text-lg cursor-pointer transition-colors duration-300 after:content-[''] after:absolute after:inset-y-0 after:left-0 after:w-0 after:bg-[#7C0116] after:-z-10 after:transition-all after:duration-300 hover:after:w-full">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }