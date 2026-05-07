"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";

import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  GitBranch,
  X,
} from "lucide-react";

import { Project } from "@/src/types/project";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function ProjectDetailClient({
  project,
}: {
  project: Project;
}) {
  const container = useRef<HTMLDivElement>(null);

  const t = useTranslations("projects");

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const data = t.raw(`items.${project.key}`);

  const nextImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev + 1) % project.images.length
    );
  };

  const prevImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex((prev) =>
      prev === null
        ? 0
        : (prev - 1 + project.images.length) % project.images.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-image", {
        scale: 1.12,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      });

      gsap.from(".hero-content", {
        y: 80,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power4.out",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={container}
      className="relative overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[45rem] h-[45rem] bg-blue-500/10 blur-[10rem] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-purple-500/10 blur-[10rem] rounded-full" />
      </div>

      <section className="relative min-h-[70svh] md:min-h-[90svh] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={data.title}
          fill
          priority
          sizes="100vw"
          className="hero-image object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <div className="absolute inset-x-0 bottom-0">
          <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pb-12 md:pb-20">
            <div className="hero-content max-w-4xl">
              <p className="text-blue-400 uppercase tracking-[0.3em] text-[0.7rem] sm:text-xs md:text-sm mb-4">
                {t("projectDetailHeader")}
              </p>

              <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-bold leading-[0.95] tracking-tight">
                {data.title}
              </h1>

              <p className="text-gray-300 mt-5 max-w-2xl text-[0.95rem] sm:text-base md:text-lg leading-relaxed">
                {data.desc}
              </p>

              <motion.div
                variants={stagger}
                initial="hidden"
                animate="show"
                className="flex flex-wrap gap-3 mt-8"
              >
                {project.techStack.map((tech) => (
                  <motion.span
                    key={tech}
                    variants={fadeUp}
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="px-4 py-2 rounded-full text-[0.75rem] sm:text-sm bg-white/10 border border-white/10 backdrop-blur-xl"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16 md:space-y-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          <div>
            <p className="text-blue-400 uppercase tracking-[0.2em] text-[0.7rem] sm:text-xs md:text-sm mb-4">
              {t("overview")}
            </p>

            <h2 className="text-[2rem] sm:text-[2.8rem] md:text-[4rem] font-bold leading-[1.05] tracking-tight">
              {t("subtitle2")}
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-400 leading-relaxed text-[0.95rem] sm:text-base md:text-lg">
              {data.desc}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {data.role && (
                <div className="bg-white/5 border border-white/10 rounded-[2rem] p-5 md:p-6 backdrop-blur-xl">
                  <p className="text-sm text-gray-500">Role</p>

                  <p className="mt-2 font-medium text-white text-[0.95rem] sm:text-base">
                    {data.role}
                  </p>
                </div>
              )}

              {data.duration && (
                <div className="bg-white/5 border border-white/10 rounded-[2rem] p-5 md:p-6 backdrop-blur-xl">
                  <p className="text-sm text-gray-500">Duration</p>

                  <p className="mt-2 font-medium text-white text-[0.95rem] sm:text-base">
                    {data.duration}
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {data.features && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-10">
              <p className="text-blue-400 uppercase tracking-[0.2em] text-[0.7rem] sm:text-xs md:text-sm mb-6">
                {t("keyFeatures")}
              </p>

              <div className="grid lg:grid-cols-2 gap-5">
                {data.features.map((feature: string, i: number) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      y: -6,
                    }}
                    className="p-5 md:p-6 rounded-[1.7rem] bg-white/[0.04] border border-white/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 shrink-0 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                        {i + 1}
                      </div>

                      <p className="text-gray-300 leading-relaxed text-[0.9rem] sm:text-base">
                        {feature}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {data.challenges && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-10 backdrop-blur-2xl">
              <p className="text-blue-400 uppercase tracking-[0.2em] text-[0.7rem] sm:text-xs md:text-sm mb-6">
                {t("challenges")}
              </p>

              <div className="space-y-4">
                {data.challenges.map((item: string, i: number) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      x: 4,
                    }}
                    className="border border-white/10 rounded-[1.7rem] p-5 md:p-6 bg-white/[0.04]"
                  >
                    <p className="text-gray-300 text-[0.9rem] sm:text-base leading-relaxed">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {data.learnings && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-10 backdrop-blur-2xl">
              <p className="text-blue-400 uppercase tracking-[0.2em] text-[0.7rem] sm:text-xs md:text-sm mb-6">
                {t("learnings")}
              </p>

              <div className="grid lg:grid-cols-2 gap-5">
                {data.learnings.map((item: string, i: number) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      scale: 1.02,
                    }}
                    className="p-5 md:p-6 rounded-[1.7rem] bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10"
                  >
                    <p className="text-gray-200 text-[0.9rem] sm:text-base leading-relaxed">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="text-blue-400 uppercase tracking-[0.2em] text-[0.7rem] sm:text-xs md:text-sm mb-6">
            {t("gallery")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {project.images.map((img, i) => (
              <motion.button
                key={i}
                whileHover={{
                  y: -6,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                onClick={() => setSelectedIndex(i)}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 group aspect-[16/9] sm:aspect-[16/10]"
              >
                <Image
                  src={img}
                  alt=""
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500" />
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap gap-4"
        >
          {project.github && (
            <motion.a
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href={project.github}
              target="_blank"
              className="px-6 md:px-8 py-4 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/20 transition flex items-center gap-3 backdrop-blur-xl text-[0.85rem] sm:text-sm md:text-base"
            >
              <GitBranch size={20} />
              {t("github")}
            </motion.a>
          )}

          {project.demoUrl && (
            <motion.a
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href={project.demoUrl}
              target="_blank"
              className="px-6 md:px-8 py-4 rounded-2xl bg-blue-500 shadow-lg shadow-blue-500/30 flex items-center gap-3 text-[0.85rem] sm:text-sm md:text-base"
            >
              {t("liveDemo")}
              <ArrowUpRight size={20} />
            </motion.a>
          )}
        </motion.div>
      </section>

      {selectedIndex !== null && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-2xl flex items-center justify-center px-4"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-black to-transparent" />

          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-black to-transparent" />

          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition"
          >
            <X size={20} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-3 md:left-8 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition"
          >
            <ChevronLeft size={26} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-3 md:right-8 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition"
          >
            <ChevronRight size={26} />
          </button>

          <motion.div
            initial={{
              scale: 0.94,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
            }}
            className="relative"
          >
            <Image
              src={project.images[selectedIndex]}
              alt=""
              width={1600}
              height={1000}
              className="max-w-[95vw] md:max-w-[90vw] max-h-[75svh] md:max-h-[88svh] object-contain rounded-[1.5rem] md:rounded-[2rem] shadow-2xl"
            />

            <div className="absolute inset-0 rounded-[1.5rem] md:rounded-[2rem] shadow-[0_0_120px_rgba(59,130,246,0.15)] pointer-events-none" />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}