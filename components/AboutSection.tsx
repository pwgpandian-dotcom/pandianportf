"use client";
import { motion, type Variants } from "motion/react";
import Container from "./Container";
import { MapPin, Briefcase, GraduationCap, Code2 } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

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
            variants={fadeUp}
            className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3"
          >
            Get to know me
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* ── Left — Quick-info cards ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-3"
          >
            {[
              { icon: <Briefcase className="w-4 h-4" />, label: "2 Years", sub: "Experience" },
              { icon: <MapPin className="w-4 h-4" />, label: "Bengaluru", sub: "Karnataka, India" },
              { icon: <Code2 className="w-4 h-4" />, label: "10+ Projects", sub: "Delivered" },
              { icon: <GraduationCap className="w-4 h-4" />, label: "B.Sc CS", sub: "SRM Institute" },
            ].map((card) => (
              <div
                key={card.label}
                className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3 hover:border-blue-400/30 transition-colors duration-300"
              >
                <div className="p-2 rounded-lg bg-blue-500/15 text-blue-400 flex-shrink-0">
                  {card.icon}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{card.label}</div>
                  <div className="text-slate-400 text-xs">{card.sub}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* ── Right — Bio ── */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            className="space-y-6"
          >
            <motion.h3
              variants={fadeUp}
              className="text-2xl font-bold text-white"
            >
              Software Developer
            </motion.h3>

            <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed">
              I am a Software Developer with experience building enterprise
              software, ERP solutions, CRM platforms, finance management systems,
              SaaS products, and AI-powered applications. My work focuses on
              creating{" "}
              <span className="text-blue-400 font-medium">scalable, secure,</span>{" "}
              and business-oriented software solutions using modern technologies
              and engineering best practices.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2"
            >
              {[
                { label: "Location", value: "Bengaluru, Karnataka" },
                { label: "Experience", value: "2 Years" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col">
                  <span className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                    {item.label}
                  </span>
                  <span className="text-white text-sm font-medium mt-0.5">
                    {item.value}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-2">
              <span className="text-slate-500 text-xs font-medium uppercase tracking-wider block">
                Current Focus
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Enterprise Software Development",
                  "AI & LLM Integrations",
                  "SaaS Platforms",
                  "Cloud-Based Applications",
                  "Business Automation Solutions",
                ].map((focus) => (
                  <span
                    key={focus}
                    className="bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium px-3 py-1.5 rounded-lg"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-blue-600/20 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300"
              >
                Let&apos;s Connect
              </a>
              <a
                href="#experience"
                className="border border-white/15 text-slate-300 px-5 py-2.5 rounded-xl text-sm font-semibold hover:border-white/30 hover:text-white transition-all duration-300"
              >
                View Experience
              </a>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
