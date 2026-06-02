"use client";
import { motion } from "motion/react";
import Container from "./Container";
import { MapPin, Mail, Linkedin, Github, Send } from "lucide-react";
import Link from "next/link";

const contactItems = [
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "Bengaluru, Karnataka, India",
    href: null,
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "pandya07844@gmail.com",
    href: "mailto:pandya07844@gmail.com",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    value: "linkedin.com/in/pandian-d",
    href: "https://www.linkedin.com/in/pandian-d",
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    value: "github.com/d-pandian",
    href: "https://github.com/d-pandian",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-blue-600/8 blur-[80px] pointer-events-none" />

      <Container>
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="text-center mb-16"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3"
          >
            Get in touch
          </motion.p>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Connect
            </span>
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="text-slate-400 mt-4 max-w-xl mx-auto"
          >
            I&apos;m currently open to new opportunities. Feel free to reach
            out — I&apos;ll get back to you as soon as possible.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">
              Contact Information
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Whether you have a project in mind, want to discuss an
              opportunity, or just want to say hi — my inbox is always open.
            </p>

            {contactItems.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                    {item.label}
                  </div>
                  {item.href ? (
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium text-sm hover:text-blue-400 transition-colors mt-0.5 block"
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <div className="text-white font-medium text-sm mt-0.5">
                      {item.value}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65 }}
            className="bg-white/[0.04] border border-white/10 rounded-2xl p-6"
          >
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-400 text-xs font-medium uppercase tracking-wider block mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="text-slate-400 text-xs font-medium uppercase tracking-wider block mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-400 text-xs font-medium uppercase tracking-wider block mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all duration-200"
                />
              </div>

              <div>
                <label className="text-slate-400 text-xs font-medium uppercase tracking-wider block mb-1.5">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold text-sm hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
