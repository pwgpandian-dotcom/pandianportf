"use client";
import { motion } from "motion/react";
import Container from "./Container";
import { Code2, Server, Database, Building2, Brain, Wrench } from "lucide-react";

const categories = [
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Frontend",
    gradient: "from-blue-500 to-cyan-500",
    iconBg: "bg-blue-500/15 text-blue-400",
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    icon: <Server className="w-5 h-5" />,
    title: "Backend",
    gradient: "from-indigo-500 to-purple-500",
    iconBg: "bg-indigo-500/15 text-indigo-400",
    skills: ["Node.js", "Express.js", "REST API Development", "JWT Authentication"],
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Database",
    gradient: "from-violet-500 to-fuchsia-500",
    iconBg: "bg-violet-500/15 text-violet-400",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "ERP & Enterprise",
    gradient: "from-amber-500 to-orange-500",
    iconBg: "bg-amber-500/15 text-amber-400",
    skills: [
      "ERP Development",
      "CRM Development",
      "School Management Systems",
      "Inventory Management",
      "Payroll Systems",
      "Finance Software",
    ],
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: "AI & LLM",
    gradient: "from-emerald-500 to-teal-500",
    iconBg: "bg-emerald-500/15 text-emerald-400",
    skills: ["Claude", "OpenAI", "Prompt Engineering", "AI Workflows", "MCP Integrations", "Hugging Face"],
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    title: "Tools & DevOps",
    gradient: "from-rose-500 to-pink-500",
    iconBg: "bg-rose-500/15 text-rose-400",
    skills: ["Git", "GitHub", "Docker", "Postman", "Vercel", "Netlify"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[200px] bg-blue-600/5 blur-[80px] pointer-events-none" />

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
            What I work with
          </motion.p>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Skills
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2.5 rounded-xl ${cat.iconBg} border border-white/10`}>
                  {cat.icon}
                </div>
                <h3 className="text-white font-bold text-lg">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: i * 0.04 + si * 0.04 }}
                    className="bg-white/5 border border-white/10 text-slate-300 text-xs font-medium px-3 py-1.5 rounded-lg hover:border-blue-400/40 hover:text-white hover:bg-blue-500/10 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;
