import React from "react";
import Container from "./Container";
import Link from "next/link";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";

const footerNav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const social = [
  { label: "GitHub", href: "https://github.com/d-pandian", icon: <Github className="w-4 h-4" /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pandian-d", icon: <Linkedin className="w-4 h-4" /> },
  { label: "YouTube", href: "https://www.youtube.com/@pandya076", icon: <Youtube className="w-4 h-4" /> },
  { label: "Email", href: "mailto:pandya07844@gmail.com", icon: <Mail className="w-4 h-4" /> },
];

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <Container className="py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Logo + tagline + social */}
          <div className="space-y-3">
            <a
              href="#home"
              className="text-xl font-bold text-white hover:text-blue-400 transition-colors"
            >
              Pandian<span className="text-blue-400">.</span>
            </a>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Software Developer specializing in MERN Stack, ERP systems, and
              AI-powered solutions. Based in Bengaluru, India.
            </p>
            <div className="flex items-center gap-2 pt-1">
              {social.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-blue-400/40 hover:bg-blue-500/10 transition-all duration-200"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {footerNav.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-slate-400 text-sm hover:text-white transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Pandian D. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs">
            Built with Next.js, Tailwind CSS &amp; Motion
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
