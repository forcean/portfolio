"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { Expand, X } from "lucide-react";

import { activities } from "@/src/constants/activities";

gsap.registerPlugin(ScrollTrigger);

export default function ActivitiesSection() {
  const container = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const t = useTranslations("activities");

  const [activeIndexes, setActiveIndexes] = useState<number[]>(
    activities.map(() => 0)
  );

  const [paused, setPaused] = useState<boolean[]>(
    activities.map(() => false)
  );

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndexes((prev) =>
        activities.map((activity, index) => {
          if (paused[index]) return prev[index] ?? 0;

          const current = prev[index] ?? 0;
          const total = activity.images?.length ?? 0;

          if (total <= 1) return 0;

          return (current + 1) % total;
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [paused]);

  // GSAP ANIMATION
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

  //ESC TO CLOSE PREVIEW
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPreviewImage(null);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // SWIPE HANDLERS
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (
    e: React.TouchEvent,
    activityIndex: number,
    totalImages: number
  ) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) < 50) return;

    setActiveIndexes((prev) => {
      const updated = [...prev];

      if (diff > 0) {
        // swipe left
        updated[activityIndex] =
          (updated[activityIndex] + 1) % totalImages;
      } else {
        // swipe right
        updated[activityIndex] =
          (updated[activityIndex] - 1 + totalImages) %
          totalImages;
      }

      return updated;
    });
  };

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

        {/* TITLE */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-blue-400 uppercase tracking-[0.25em] md:tracking-[0.3em] text-[11px] md:text-sm mb-4">
            Beyond Development
          </p>

          <h2
            className="
              text-[2rem]
              sm:text-[2.8rem]
              md:text-[4rem]
              lg:text-[5rem]
              font-bold
              leading-[1.05]
              tracking-[-0.03em]
            "
          >
            {t("title")}
          </h2>

          <p
            className="
              text-gray-400
              mt-5 md:mt-6
              max-w-2xl mx-auto
              text-[0.95rem]
              sm:text-base
              md:text-lg
              leading-relaxed
            "
          >
            {t("subtitle")}
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {activities.map((item, index) => {
            const currentIndex = activeIndexes[index] ?? 0;

            const currentImage =
              item.images[currentIndex];

            return (
              <div
                key={item.key}
                className="
                  activity-card opacity-0
                  relative overflow-hidden
                  bg-white/5
                  border border-white/10
                  rounded-[28px] md:rounded-[32px]
                  backdrop-blur-xl
                  group
                  transition-all duration-500
                  hover:scale-[1.02]
                  hover:-translate-y-2
                  hover:border-blue-400/30
                  hover:shadow-[0_30px_80px_rgba(59,130,246,0.18)]
                "
                onMouseEnter={() =>
                  setPaused((prev) => {
                    const updated = [...prev];
                    updated[index] = true;
                    return updated;
                  })
                }
                onMouseLeave={() =>
                  setPaused((prev) => {
                    const updated = [...prev];
                    updated[index] = false;
                    return updated;
                  })
                }
              >
                {/* IMAGE */}
                <div
                  className="relative h-52 sm:h-56 md:h-64 overflow-hidden"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={(e) =>
                    handleTouchEnd(
                      e,
                      index,
                      item.images.length
                    )
                  }
                >
                  <Image
                    key={currentImage}
                    src={currentImage}
                    alt={t(`${item.key}.title`)}
                    fill
                    priority={index === 0}
                    sizes="
    (max-width: 640px) 100vw,
    (max-width: 1280px) 50vw,
    33vw
  "
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJyBoZWlnaHQ9JzEwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48ZmlsdGVyIGlkPSdiJz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPScyMCcvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPScxMDAnIGhlaWdodD0nMTAwJyBmaWxsPScjMTExODI3Jy8+PC9zdmc+"
                    className="
    object-cover
    transition-all duration-1000
    group-hover:scale-110
    animate-[fadeIn_0.6s_ease]
  "
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  {/* GLOW */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-blue-500/10" />

                  {/* EXPAND BUTTON */}
                  <button
                    onClick={() =>
                      setPreviewImage(currentImage)
                    }
                    className="
                      absolute top-4 right-4 z-20
                      w-10 h-10
                      rounded-full
                      bg-black/50 backdrop-blur
                      border border-white/10
                      flex items-center justify-center
                      text-white
                      opacity-0 group-hover:opacity-100
                      transition-all duration-300
                      hover:scale-110
                      hover:bg-blue-500
                    "
                  >
                    <Expand size={18} />
                  </button>

                  {/* DOTS */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {item.images.map((_, dotIndex) => (
                      <button
                        key={dotIndex}
                        onClick={() =>
                          setActiveIndexes((prev) => {
                            const updated = [...prev];
                            updated[index] = dotIndex;
                            return updated;
                          })
                        }
                        className={`
                          h-2 rounded-full transition-all duration-300
                          ${currentIndex === dotIndex
                            ? "bg-white w-6"
                            : "bg-white/40 w-2"
                          }
                        `}
                      />
                    ))}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5 md:p-7">
                  <h3
                    className="
                      text-[1.1rem]
                      sm:text-[1.25rem]
                      md:text-[1.5rem]
                      font-semibold
                      leading-snug
                      break-words
                    "
                  >
                    {t(`${item.key}.title`)}
                  </h3>

                  <p
                    className="
                      text-gray-400
                      text-[0.92rem]
                      sm:text-[0.97rem]
                      md:text-[1rem]
                      mt-4
                      leading-relaxed
                      break-words
                    "
                  >
                    {t(`${item.key}.desc`)}
                  </p>

                  <div className="mt-6 w-16 h-[2px] bg-gradient-to-r from-blue-400 to-transparent" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* IMAGE PREVIEW MODAL */}
      {previewImage && (
        <div
          className="
            fixed inset-0 z-[999]
            bg-black/80 backdrop-blur-md
            flex items-center justify-center
            p-4
            animate-[fadeIn_0.3s_ease]
          "
          onClick={() => setPreviewImage(null)}
        >
          {/* CLOSE */}
          <button
            onClick={() => setPreviewImage(null)}
            className="
              absolute top-6 right-6
              w-12 h-12 rounded-full
              bg-white/10 border border-white/10
              flex items-center justify-center
              text-white
              hover:bg-red-500
              transition
              z-50
            "
          >
            <X size={24} />
          </button>

          {/* IMAGE */}
          <div
            className="
              relative
              w-full max-w-6xl
              h-[80vh]
              rounded-3xl overflow-hidden
              border border-white/10
              shadow-2xl
              animate-[zoomIn_0.35s_ease]
            "
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={previewImage}
              alt="Preview"
              fill
              className="object-contain bg-black"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}