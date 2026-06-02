"use client";
import { motion } from "motion/react";
import Container from "./Container";
import { Briefcase, Calendar, CheckCircle2, MapPin } from "lucide-react";

const responsibilities = [
  "Developed ERP and CRM applications for enterprise clients",
  "Built scalable REST APIs using Node.js and Express.js",
  "Developed responsive and interactive UIs using React.js and Next.js",
  "Designed and optimized MongoDB database schemas for performance",
  "Implemented JWT Authentication and role-based access control",
  "Built reporting and analytics modules with data visualization",
  "Worked on AI integrations and Claude-based automation workflows",
  "Collaborated using Agile methodology with cross-functional teams",
];

const tech = [
  "React.js", "Next.js", "Node.js", "Express.js",
  "MongoDB", "JWT", "REST APIs", "Claude AI", "Agile",
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-[100px] pointer-events-none" />

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
            Work History
          </motion.p>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-6 bottom-0 w-px bg-gradient-to-b from-blue-500 via-indigo-500/60 to-transparent" />

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65 }}
              className="relative pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-[15px] top-7 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 border-2 border-slate-950 shadow-lg shadow-blue-500/40" />

              {/* Card */}
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-8 hover:border-blue-400/20 transition-all duration-300">
                {/* Card header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-blue-500/15 border border-blue-500/20 text-blue-400 flex-shrink-0">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Software Engineer
                      </h3>
                      <p className="text-blue-400 font-semibold text-sm mt-0.5">
                        Thots2IT Technologies
                      </p>
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs mt-1">
                        <MapPin className="w-3.5 h-3.5" />
                        Remote / India
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 w-fit">
                    <Calendar className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <div>
                      <div className="text-white text-sm font-semibold">
                        Feb 2023 – Jan 2025
                      </div>
                      <div className="text-slate-400 text-xs">2 Years</div>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-3 mb-6">
                  {responsibilities.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium px-3 py-1 rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExperienceSection;
