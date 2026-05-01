"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { activities } from "@/constants/activities";

gsap.registerPlugin(ScrollTrigger);

export default function ActivitiesSection() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(
        container.current!.querySelectorAll(".activity-card")
      );

      gsap.fromTo(
        cards,
        {
          y: 120,
          opacity: 0,
          rotateX: 10,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.25,
          duration: 1.2,
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
    <section ref={container} className="max-w-6xl mx-auto px-6 py-32">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Activities & Experiences
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {activities.map((item) => (
          <div
            key={item.title}
            className="activity-card opacity-0 bg-white/5 border border-white/10 rounded-2xl overflow-hidden group transition duration-500 hover:scale-[1.04] hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(59,130,246,0.25)]"
          >
            <div className="overflow-hidden relative">
              <img
                src={item.image}
                className="w-full h-48 object-cover transition duration-700 group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-80 transition" />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}