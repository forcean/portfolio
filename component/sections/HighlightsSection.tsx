"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { highlights } from "@/constants/highlights";

gsap.registerPlugin(ScrollTrigger);

export default function HighlightsSection() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(
        container.current!.querySelectorAll(".highlight-card")
      );

      gsap.fromTo(
        cards,
        {
          y: 80,
          opacity: 0,
          scale: 0.95,
          filter: "blur(10px)",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          stagger: 0.2,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="highlights"
      ref={container}
      className="max-w-6xl mx-auto px-6 py-32"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Beyond Coding
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="highlight-card opacity-0 bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-6 transition duration-300 hover:scale-[1.05] hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-[0_20px_60px_rgba(59,130,246,0.3)]"
          >
            <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}