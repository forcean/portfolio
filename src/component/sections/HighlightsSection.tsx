"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function HighlightsSection() {
  const container = useRef<HTMLDivElement>(null);
  const t = useTranslations("highlights");

  const items = t.raw("items");

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards =
        gsap.utils.toArray<HTMLElement>(".highlight-panel");

      // initial state
      cards.forEach((card, index) => {
        gsap.set(card, {
          opacity: index === 0 ? 1 : 0,
          scale: index === 0 ? 1 : 0.95,
          y: index === 0 ? 0 : 120,
          filter:
            index === 0 ? "blur(0px)" : "blur(20px)",
          zIndex: items.length - index,
        });
      });

      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: `+=${items.length * 120}%`,
        pin: true,
        scrub: 1,

        onUpdate: (self) => {
          const index = Math.min(
            items.length - 1,
            Math.floor(self.progress * items.length)
          );

          setActiveIndex(index);

          cards.forEach((card, i) => {
            const isActive = i === index;

            gsap.to(card, {
              opacity: isActive ? 1 : 0,
              scale: isActive ? 1 : 0.92,
              y: isActive ? 0 : 100,
              filter: isActive
                ? "blur(0px)"
                : "blur(30px)",
              pointerEvents: isActive ? "auto" : "none",
              duration: 0.7,
              ease: "power3.out",
            });
          });
        },
      });
    }, container);

    return () => ctx.revert();
  }, [items]);

  return (
    <section
      ref={container}
      id="highlights"
      className="relative h-screen overflow-hidden"
    >
      {/* BG */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="h-screen max-w-7xl mx-auto px-6 flex flex-col justify-center">

        {/* HEADER */}
        <div className="mb-12">
          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
            {t("subtitle")}
          </p>

          <h2 className="text-4xl md:text-7xl font-bold">
            {t("title")}
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl">
            {t("description")}
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-[80px_1fr] gap-8 items-center">

          {/* PROGRESS */}
          <div className="hidden lg:flex flex-col gap-4">
            {items.map((_: { title: string; desc: string }, index: number) => (
              <div
                key={index}
                className={`transition-all duration-500 rounded-full ${activeIndex === index
                  ? "w-14 h-2 bg-blue-400"
                  : "w-6 h-2 bg-white/20"
                  }`}
              />
            ))}
          </div>

          {/* CARDS */}
          <div className="relative h-[360px]">
            {items.map((item: { title: string; desc: string }, index: number) => (
              <div
                key={index}
                className="highlight-panel absolute inset-0 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 flex flex-col justify-center"
              >
                <div className="text-blue-400 mb-4">
                  0{index + 1}
                </div>

                <h3 className="text-2xl md:text-4xl font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}