"use client";
import { motion } from "motion/react";
import Container from "./Container";
import { GraduationCap, Award } from "lucide-react";

const certifications = [
  { name: "Cloud Computing Training Program", issuer: "Spryntas Software Solutions" },
  { name: "SRM Axis Intellects", issuer: "SRM Institute of Science and Technology" },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-blue-600/6 rounded-full blur-[100px] pointer-events-none" />

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
            Academic Background
          </motion.p>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Education &amp;{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:border-blue-400/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-blue-500/15 border border-blue-500/20 text-blue-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-lg">Education</h3>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
              <div>
                <h4 className="text-white font-semibold">
                  Bachelor of Science in Computer Science
                </h4>
                <p className="text-blue-400 text-sm font-medium mt-0.5">
                  SRM Institute of Science and Technology
                </p>
                <p className="text-slate-400 text-sm mt-1">2020 – 2023</p>
              </div>
            </div>
          </motion.div>

          {/* Certifications card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:border-indigo-400/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-indigo-500/15 border border-indigo-500/20 text-indigo-400">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-lg">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold text-sm">{cert.name}</h4>
                    <p className="text-slate-400 text-xs mt-0.5">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default EducationSection;
