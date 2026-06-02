"use client";
import { motion, type Variants } from "motion/react";
import { MoveUpRight, Download, Mail, ChevronDown } from "lucide-react";
import Container from "./Container";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Banner = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col bg-slate-950 overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-[300px] h-[300px] bg-violet-700/10 rounded-full blur-[100px] pointer-events-none" />

      <Container className="flex flex-col md:flex-row items-center justify-between gap-12 py-28 md:py-36 flex-1 relative z-10">
        {/* ── Left — Text ── */}
        <motion.div
          className="w-full md:w-[55%] flex flex-col gap-6"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          animate="show"
        >
          {/* Available badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 w-fit backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300 text-sm font-medium">
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            <span className="text-white">Dinesh</span>
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
              {" "}Pandian
            </span>
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl font-medium text-blue-400 tracking-wide"
          >
            Software Developer
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-slate-400 text-sm md:text-base leading-relaxed max-w-lg"
          >
            Software Developer with{" "}
            <span className="text-white font-semibold">2 years of experience</span>{" "}
            building enterprise applications, ERP systems, CRM platforms,
            finance management software, SaaS products, and AI-powered
            solutions. Experienced in modern web technologies, scalable
            architectures, cloud deployment, and business automation systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-3 mt-1"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg shadow-blue-600/25 hover:from-blue-500 hover:to-indigo-500 hover:-translate-y-0.5 hover:shadow-blue-600/40 transition-all duration-300"
            >
              View Projects <MoveUpRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:border-blue-400/60 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
            >
              Contact Me <Mail className="w-4 h-4" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 border border-white/10 text-slate-300 px-6 py-3 rounded-xl font-semibold text-sm hover:border-white/30 hover:text-white transition-all duration-300"
            >
              Resume <Download className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-10 pt-2 border-t border-white/5 mt-2"
          >
            {[
              { value: "2+", label: "Years Exp." },
              { value: "10+", label: "Projects" },
              { value: "5+", label: "Enterprise Apps" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right — Profile Image ── */}
        <motion.div
          className="w-full md:w-[42%] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25 }}
        >
          <div className="profile-float relative group">
            {/* Glow ring */}
            <div className="profile-glow absolute inset-0 rounded-3xl" />

            {/* Glassmorphism frame */}
            <div className="relative bg-white/[0.06] backdrop-blur-xl border border-white/15 rounded-3xl p-3 shadow-2xl group-hover:border-blue-400/40 transition-all duration-500">
              <div className="absolute inset-3 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-600/10 pointer-events-none" />
              <Image
                src="/images/dineshj.JPEG"
                alt="Dinesh Pandian - Software Developer"
                width={340}
                height={420}
                priority
                className="relative rounded-2xl object-cover object-top w-[220px] h-[210px] md:w-[290px] md:h-[280px] group-hover:scale-[1.02] transition-transform duration-500"
              />
              {/* Corner accents */}
              <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 rounded-full bg-blue-400/80" />
              <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-indigo-400/80" />
              <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 rounded-full bg-indigo-400/80" />
              <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-blue-400/80" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg shadow-blue-500/40 border border-white/20">
              Software Developer ✦
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="flex justify-center pb-8 relative z-10"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-400 transition-colors"
        >
          <span className="text-xs font-medium tracking-widest uppercase">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Banner;
