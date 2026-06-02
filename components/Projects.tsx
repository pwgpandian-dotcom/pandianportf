import React from "react";
import Container from "./Container";
import Image from "next/image";
import { projectOne, projectThree, projectTwo } from "@/assets/image";
import { cn } from "@/lib/utils";

const data = [
  {
    title:
      "DoctorOnCall is a full-stack Doctor Appointment Booking System developed using the MERN stack...",
    href: "https://buymeacoffee.com/reactbd",
    image: projectOne,
    publishedAt: "April 21, 2024",
    category: "Ecommerce",
  },
  {
    title:
      "Tomato is a full-featured, responsive food delivery application built using the MERN stack...",
    href: "https://buymeacoffee.com/reactbd",
    image: projectTwo,
    publishedAt: "April 21, 2024",
    category: "Design",
  },
  {
    title:
      "The Shoptech Ecommerce Application is a fully functional, scalable ecommerce platform built with Next.js...",
    href: "https://buymeacoffee.com/reactbd",
    image: projectThree,
    publishedAt: "April 21, 2024",
    category: "Blogs",
  },
];

const Projects = ({ className }: { className?: string }) => {
  return (
    <div className={cn("py-20 md:py-24", className)}>
      <Container>
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="text-4xl font-bold tracking-wide">My Projects</h1>
          <p className="max-w-3xl text-center">
            Crafted using the MERN stack (MongoDB, Express.js, React.js, Node.js) with full attention
            to scalability, security, and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {data.map((item, index) => (
            <div key={index}>
              <div className="overflow-hidden relative w-full h-64 group">
                <Image
                  src={item.image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full z-10 object-cover"
                  fill
                />
                <div className="absolute w-full h-full bg-primary left-0 top-0 opacity-10 scale-100 hover:scale-95 hoverEffect" />
              </div>

              <div className="space-y-5 mt-2">
                <p className="font-semibold text-primary/70 text-sm">
                  {item.publishedAt} / {item.category}
                </p>
                <h2 className="text-xl font-bold">{item.title}</h2>

                {/* Optional: Add link or remove if unused */}
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-primary hover:text-darkOrange transition"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Projects;
