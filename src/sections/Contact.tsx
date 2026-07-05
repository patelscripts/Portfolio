import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Yaha apna form submission logic laga sakte ho (EmailJS, backend API, etc.)
    console.log(formData);
  };

  return (
    <section id="contact" className="w-full max-w-5xl mx-auto px-6 py-20 relative z-10">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-portfolio-dark-text tracking-tight mb-2">
          Get In Touch
        </h2>
        <div className="w-36 h-1 bg-portfolio-coral mx-auto rounded-full" />
        <p className="text-portfolio-dark-text/60 mt-4 max-w-md mx-auto">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
      </div>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left: Contact Info */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-portfolio-coral/10 text-portfolio-coral">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-xs text-portfolio-dark-text/50">Email</p>
              <p className="text-sm font-medium text-portfolio-dark-text">
                navneet@example.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-portfolio-coral/10 text-portfolio-coral">
              <FaGithub size={20} />
            </div>
            <div>
              <p className="text-xs text-portfolio-dark-text/50">GitHub</p>
              <a
                href="https://github.com/patelscripts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-portfolio-dark-text hover:text-portfolio-coral transition-colors"
                >
                patelscripts
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-portfolio-coral/10 text-portfolio-coral">
              <FaLinkedinIn size={20} />
            </div>
            <div>
              <p className="text-xs text-portfolio-dark-text/50">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/navneet-patel-658941281/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-portfolio-dark-text hover:text-portfolio-coral transition-colors"
              >
                Connect with me
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-portfolio-dark-text/15 bg-white/80 text-sm text-portfolio-dark-text placeholder:text-portfolio-dark-text/40 focus:outline-none focus:ring-2 focus:ring-portfolio-coral/40"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-portfolio-dark-text/15 bg-white/80 text-sm text-portfolio-dark-text placeholder:text-portfolio-dark-text/40 focus:outline-none focus:ring-2 focus:ring-portfolio-coral/40"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-portfolio-dark-text/15 bg-white/80 text-sm text-portfolio-dark-text placeholder:text-portfolio-dark-text/40 focus:outline-none focus:ring-2 focus:ring-portfolio-coral/40 resize-none"
            />
            <button
              onClick={handleSubmit}
              className="flex items-center justify-center gap-2 bg-portfolio-coral hover:bg-portfolio-coral/90 text-white text-sm font-medium px-4 py-3 rounded-xl transition-colors"
            >
              <Send size={16} />
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}