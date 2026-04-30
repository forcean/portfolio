"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    title: "Internship Experience",
    desc: "Worked on Angular frontend, built reusable UI components, and contributed to CI/CD pipelines in an Agile team at ENTRONICA.",
  },
  {
    title: "Engineering GPA",
    desc: "Maintained a strong academic performance with a GPA of 3.79, showing consistency and discipline.",
  },
  {
    title: "Full-stack Projects",
    desc: "Developed real-world applications using Angular, NestJS, MongoDB, and microservices architecture.",
  },
  {
    title: "System Design Mindset",
    desc: "Focus on clean architecture, scalability, and maintainability in every project.",
  },
  {
    title: "Problem Solving",
    desc: "Strong analytical thinking with the ability to debug complex issues and improve performance.",
  },
  {
    title: "Team Collaboration",
    desc: "Experienced working in teams using Git, Agile workflows, and code reviews.",
  },
];

export default function HighlightsSection() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(
        container.current!.querySelectorAll(".highlight-card")
      );

      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
            once: true, // 🔥 กันบัค refresh
          },
        }
      );
    }, container);

    return () => ctx.revert(); // 🔥 cleanup ป้องกัน memory leak
  }, []);

  return (
    <section
      id="highlights"
      ref={container}
      className="relative max-w-6xl mx-auto px-6 py-32"
    >
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Beyond Coding
      </h2>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="highlight-card opacity-0 bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-6 transition duration-300 hover:scale-[1.03] hover:border-blue-400/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
          >
            <h3 className="text-lg font-semibold mb-3">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}