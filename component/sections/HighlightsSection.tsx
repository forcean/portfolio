"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { highlights } from "@/constants/highlights";

gsap.registerPlugin(ScrollTrigger);

export default function HighlightsSection() {
  const container = useRef<HTMLDivElement>(null);

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
          zIndex: highlights.length - index,
        });
      });

      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: `+=${highlights.length * 120}%`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,

        onUpdate: (self) => {
          const progress = self.progress;

          const index = Math.min(
            highlights.length - 1,
            Math.floor(progress * highlights.length)
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
  }, []);

  return (
    <section
      ref={container}
      id="highlights"
      className="
        relative
        h-screen
        overflow-hidden
      "
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[500px] h-[500px]
            md:w-[700px] md:h-[700px]
            bg-blue-500/10
            blur-[120px]
            md:blur-[140px]
            rounded-full
          "
        />

        <div
          className="
            absolute bottom-0 right-0
            w-[300px] h-[300px]
            md:w-[500px] md:h-[500px]
            bg-purple-500/10
            blur-[100px]
            md:blur-[140px]
            rounded-full
          "
        />
      </div>

      <div
        className="
          h-screen
          max-w-7xl
          mx-auto
          px-5 sm:px-6 lg:px-8
          flex flex-col justify-center
        "
      >
        {/* Header */}
        <div className="mb-10 md:mb-16">
          <p
            className="
              text-blue-400
              uppercase
              tracking-[0.25em]
              md:tracking-[0.3em]
              text-[11px]
              md:text-sm
              mb-4
            "
          >
            Beyond Development
          </p>

          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-7xl
              font-bold
              leading-[1.05]
            "
          >
            Beyond Coding
          </h2>

          <p
            className="
              text-gray-400
              mt-5 md:mt-6
              max-w-2xl
              text-base md:text-lg
              leading-relaxed
            "
          >
            Experience, mindset, and engineering values
            beyond just writing code.
          </p>
        </div>

        {/* Content */}
        <div
          className="
            grid
            lg:grid-cols-[90px_1fr]
            gap-6 md:gap-10
            items-center
          "
        >
          {/* Progress */}
          <div className="hidden lg:flex flex-col gap-4">
            {highlights.map((_, index) => (
              <div
                key={index}
                className={`
                  rounded-full transition-all duration-500
                  ${activeIndex === index
                    ? "w-14 h-2 bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.8)]"
                    : "w-6 h-2 bg-white/20"
                  }
                `}
              />
            ))}
          </div>

          {/* Mobile Progress */}
          <div className="flex lg:hidden gap-2 mb-4">
            {highlights.map((_, index) => (
              <div
                key={index}
                className={`
                  rounded-full transition-all duration-500
                  ${activeIndex === index
                    ? "w-10 h-2 bg-blue-400"
                    : "w-4 h-2 bg-white/20"
                  }
                `}
              />
            ))}
          </div>

          {/* Cards */}
          <div
            className="
              relative
              h-[340px]
              sm:h-[380px]
              md:h-[420px]
            "
          >
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="
                  highlight-panel
                  absolute inset-0
                  bg-white/5
                  border border-white/10
                  backdrop-blur-2xl
                  rounded-[28px]
                  md:rounded-[36px]
                  p-6 sm:p-8 md:p-14
                  flex flex-col justify-center
                  will-change-transform
                  will-change-opacity
                  shadow-[0_20px_80px_rgba(0,0,0,0.35)]
                "
              >
                {/* top number */}
                <div
                  className="
                    inline-flex w-fit
                    px-3 py-1.5
                    md:px-4 md:py-2
                    rounded-full
                    bg-blue-500/10
                    border border-blue-400/20
                    text-blue-300
                    text-xs md:text-sm
                    mb-6 md:mb-8
                    backdrop-blur
                  "
                >
                  0{index + 1}
                </div>

                {/* title */}
                <h3
                  className="
                    text-2xl
                    sm:text-3xl
                    md:text-5xl
                    font-bold
                    leading-tight
                    max-w-3xl
                  "
                >
                  {item.title}
                </h3>

                {/* desc */}
                <p
                  className="
                    text-gray-400
                    text-sm sm:text-base md:text-lg
                    mt-4 md:mt-6
                    max-w-2xl
                    leading-relaxed
                  "
                >
                  {item.desc}
                </p>

                {/* bottom line */}
                <div
                  className="
                    mt-8 md:mt-10
                    w-16 md:w-24
                    h-[2px]
                    bg-gradient-to-r
                    from-blue-400
                    to-transparent
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}