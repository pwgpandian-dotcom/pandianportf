"use client";
import { motion } from "motion/react";
import Container from "./Container";
import {
  BarChart3,
  Users,
  Zap,
  Building2,
  Settings,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    title: "Persuaxion",
    subtitle: "CRO Intelligence Dashboard",
    category: "SaaS Platform",
    badgeGradient: "from-blue-500 to-cyan-500",
    cardGradient: "from-blue-600/10 to-cyan-600/10",
    border: "border-blue-500/20 hover:border-blue-500/50",
    icon: <BarChart3 className="w-6 h-6" />,
    iconBg: "bg-blue-500/15 text-blue-400",
    description:
      "A modern CRO intelligence platform designed to help eCommerce brands understand customer hesitation, buying intent, conversion behavior, and revenue opportunities through behavioral analytics.",
    features: [
      "Intent Detection",
      "Customer Behavior Tracking",
      "Revenue Analytics",
      "Conversion Intelligence",
      "SaaS Dashboard",
      "Real-Time Insights",
    ],
    tech: ["React.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    href: "#",
  },
  {
    title: "Nexoria",
    subtitle: "Consulting & Client Management Platform",
    category: "SaaS Application",
    badgeGradient: "from-indigo-500 to-purple-500",
    cardGradient: "from-indigo-600/10 to-purple-600/10",
    border: "border-indigo-500/20 hover:border-indigo-500/50",
    icon: <Users className="w-6 h-6" />,
    iconBg: "bg-indigo-500/15 text-indigo-400",
    description:
      "A premium consulting and booking platform for freelancers, agencies, and service businesses with integrated payment solutions and client management tools.",
    features: [
      "Razorpay Integration",
      "GPay & UPI Payments",
      "Session Booking",
      "Client Management",
      "Reviews & Ratings",
      "Admin Dashboard",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Razorpay"],
    href: "#",
  },
  {
    title: "Samayapurathal Bankers",
    subtitle: "Gold Loan & Finance Management System",
    category: "Finance Software",
    badgeGradient: "from-amber-500 to-orange-500",
    cardGradient: "from-amber-600/10 to-orange-600/10",
    border: "border-amber-500/20 hover:border-amber-500/50",
    icon: <Zap className="w-6 h-6" />,
    iconBg: "bg-amber-500/15 text-amber-400",
    description:
      "A complete finance management solution for gold loan and pawn broker businesses with comprehensive reporting, customer tracking, and portfolio analytics.",
    features: [
      "Loan Registration",
      "Customer Management",
      "Interest Calculation",
      "Financial Reports",
      "Portfolio Analytics",
      "Staff Management",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    href: "#",
  },
  {
    title: "ERP Management System",
    subtitle: "Enterprise Resource Planning",
    category: "Enterprise Software",
    badgeGradient: "from-emerald-500 to-teal-500",
    cardGradient: "from-emerald-600/10 to-teal-600/10",
    border: "border-emerald-500/20 hover:border-emerald-500/50",
    icon: <Building2 className="w-6 h-6" />,
    iconBg: "bg-emerald-500/15 text-emerald-400",
    description:
      "Comprehensive ERP modules covering inventory, payroll, accounting, employee management, and business reporting systems for enterprise clients.",
    features: [
      "Inventory Management",
      "Payroll Processing",
      "Accounting Module",
      "Employee Management",
      "Business Reports",
      "Role-Based Access",
    ],
    tech: ["React.js", "Node.js", "MongoDB"],
    href: "#",
  },
  {
    title: "CRM Management Platform",
    subtitle: "Customer Relationship Management",
    category: "Business Automation",
    badgeGradient: "from-violet-500 to-fuchsia-500",
    cardGradient: "from-violet-600/10 to-fuchsia-600/10",
    border: "border-violet-500/20 hover:border-violet-500/50",
    icon: <Settings className="w-6 h-6" />,
    iconBg: "bg-violet-500/15 text-violet-400",
    description:
      "Customer relationship management platform with lead tracking, customer management, reporting, and workflow automation for business teams.",
    features: [
      "Lead Tracking",
      "Customer Management",
      "Workflow Automation",
      "Analytics & Reports",
      "Team Collaboration",
      "Email Integration",
    ],
    tech: ["React.js", "Express.js", "MongoDB"],
    href: "#",
  },
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

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
            What I&apos;ve built
          </motion.p>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="text-slate-400 mt-4 max-w-2xl mx-auto"
          >
            Enterprise-grade applications built with modern technologies and
            production-ready architecture.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative bg-gradient-to-br ${p.cardGradient} border ${p.border} rounded-2xl p-6 overflow-hidden transition-all duration-300`}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-slate-900/70 rounded-2xl" />

              <div className="relative z-10">
                {/* Row: icon + badge + external link */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${p.iconBg} border border-white/10`}>
                      {p.icon}
                    </div>
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${p.badgeGradient} text-white`}
                    >
                      {p.category}
                    </span>
                  </div>
                  <a
                    href={p.href}
                    className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/10 transition-all duration-200"
                    aria-label={`View ${p.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{p.title}</h3>
                <p className="text-blue-400 text-sm font-medium mb-3">{p.subtitle}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {p.description}
                </p>

                {/* Feature chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs text-slate-400 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-x-3 gap-y-1 pt-4 border-t border-white/5">
                  {p.tech.map((t, ti) => (
                    <span key={t} className="text-xs text-slate-400 font-medium">
                      {t}
                      {ti < p.tech.length - 1 && (
                        <span className="ml-3 text-slate-700">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProjects;
