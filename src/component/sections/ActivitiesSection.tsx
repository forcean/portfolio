"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

import { activities } from "@/src/constants/activities";

gsap.registerPlugin(ScrollTrigger);

export default function ActivitiesSection() {
  const container = useRef<HTMLDivElement>(null);
  const t = useTranslations("activities");

  const [activeIndexes, setActiveIndexes] = useState<number[]>(
    activities.map(() => 0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndexes((prev) => {
        return prev.map((current, index) => {
          const images = activities[index].images;

          if (!images || images.length <= 1) return current;

          return (current + 1) % images.length;
        });
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  //GSAP animation (เหมือนเดิม)
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
          stagger: 0.2,
          duration: 1.1,
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
      ref={container}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* BG */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[450px] h-[450px] md:w-[700px] md:h-[700px] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[280px] h-[280px] md:w-[500px] md:h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-blue-400 uppercase tracking-[0.25em] md:tracking-[0.3em] text-[11px] md:text-sm mb-4">
            Beyond Development
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            {t("title")}
          </h2>

          <p className="text-gray-400 mt-5 md:mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {activities.map((item, index) => {
            const currentImage = item.images
              ? item.images[activeIndexes[index] % item.images.length]
              : item.image;
            return (
              <div
                key={item.key} // ✅ FIX สำคัญ
                className="activity-card opacity-0 relative overflow-hidden bg-white/5 border border-white/10 rounded-[28px] md:rounded-[32px] backdrop-blur-xl group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:border-blue-400/30 hover:shadow-[0_30px_80px_rgba(59,130,246,0.18)]"
              >
                {/* image */}
                <div className="overflow-hidden relative h-52 sm:h-56 md:h-64">
                  <img
                    src={currentImage}
                    alt={t(`${item.key}.title`)}
                    className="w-full h-full object-cover transition duration-1000 group-hover:scale-110"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  {/* glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-blue-500/10" />

                  {/* dots */}
                  {item.images && item.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {item.images.map((_, dotIndex) => (
                        <div
                          key={dotIndex}
                          className={`
                            h-2 rounded-full transition-all duration-300
                            ${activeIndexes[index] === dotIndex
                              ? "bg-white w-6"
                              : "bg-white/40 w-2"
                            }
                          `}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* content */}
                <div className="p-5 md:p-7">
                  <h3 className="text-xl md:text-2xl font-semibold leading-tight">
                    {t(`${item.key}.title`)}
                  </h3>

                  <p className="text-gray-400 text-sm md:text-base mt-4 leading-relaxed">
                    {t(`${item.key}.desc`)}
                  </p>

                  <div className="mt-6 w-16 h-[2px] bg-gradient-to-r from-blue-400 to-transparent" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}