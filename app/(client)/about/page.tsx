import Container from "@/components/Container";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <Container className="bg-white text-darkColor py-10 md:py-20">
      <div>
        {/* Profile card */}
        <div className="md:flex gap-8 items-start mb-10">
          {/* Profile image — premium card */}
          <div className="md:flex-shrink-0 mb-6 md:mb-0">
            <div className="relative group w-fit">
              {/* Glow backdrop */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/30 to-indigo-600/30 blur-xl group-hover:blur-2xl transition-all duration-500" />

              {/* Card frame */}
              <div className="relative bg-gradient-to-br from-slate-900 to-blue-950 border border-white/10 rounded-2xl p-2.5 shadow-2xl group-hover:border-blue-400/40 transition-all duration-300">
                <Image
                  src="/images/dineshj.JPEG"
                  alt="Pandian D - Software Developer"
                  width={192}
                  height={220}
                  className="rounded-xl object-cover object-top w-44 h-52 group-hover:scale-[1.02] transition-transform duration-300"
                />

                {/* Corner dots */}
                <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-blue-400/70" />
                <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-indigo-400/70" />
                <div className="absolute bottom-1 left-1 w-2 h-2 rounded-full bg-indigo-400/70" />
                <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-blue-400/70" />
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white border border-gray-200 shadow-md rounded-full px-3 py-1 text-xs font-semibold text-gray-700 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Open to work
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="p-4 md:p-6">
            <div className="uppercase tracking-wide text-sm text-darkOrange font-bold">
              Software Developer
            </div>
            <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-darkColor sm:text-4xl">
              Pandian D
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-darkColor/80">
              Passionate about building scalable and efficient software solutions.
            </p>
          </div>
        </div>

        <div className="px-4 md:px-8 py-6">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-darkColor/80 mb-4">
            I am a Software Developer with experience building enterprise software, ERP solutions, CRM platforms, finance management systems, SaaS products, and AI-powered applications. My work focuses on creating scalable, secure, and business-oriented software solutions using modern technologies and engineering best practices.
          </p>
          <p className="text-darkColor/80 mb-4">
            I am passionate about clean code, scalable architecture, and continuously learning new technologies. I thrive in turning complex business problems into simple, maintainable software solutions. I am committed to writing performant code and delivering meaningful digital experiences that solve real-world challenges.
          </p>
        </div>

        <div className="px-4 md:px-8 py-6 bg-gray-100 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "JavaScript", "TypeScript", "HTML5", "CSS3", "React.js", "Next.js",
              "Tailwind CSS", "Bootstrap", "Framer Motion", "Redux Toolkit", "Zustand",
              "ShadCN UI", "Node.js", "Express.js", "MongoDB", "Mongoose",
              "PostgreSQL", "Prisma", "REST APIs", "GraphQL", "Responsive Web Design",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutPage;
