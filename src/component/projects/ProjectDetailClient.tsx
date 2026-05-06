"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useTranslations } from "next-intl";

import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  GitBranch,
  X,
} from "lucide-react";

import { Project } from "@/src/types/project";

export default function ProjectDetailClient({
  project,
}: {
  project: Project;
}) {
  const container = useRef<HTMLDivElement>(null);
  const t = useTranslations("projects");

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const data = t.raw(`items.${project.key}`);

  // Gallery Controls
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

  // Keyboard
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
      gsap.from(".reveal", {
        y: 80,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".hero-image", {
        scale: 1.15,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full" />
      </div>

      {/* HERO */}
      <section className="relative h-[75vh] overflow-hidden">
        <img
          src={project.coverImage}
          alt={data.title}
          className="hero-image w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6">
          <div className="reveal">
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              {t("projectDetailHeader")}
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              {data.title}
            </h1>

            <p className="text-gray-300 mt-6 max-w-2xl text-lg leading-relaxed">
              {data.desc}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-sm bg-white/10 border border-white/10 backdrop-blur"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-24 space-y-24">

        {/* overview */}
        <div className="reveal grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-400 uppercase tracking-[0.2em] text-sm mb-4">
              {t("overview")}
            </p>

            <h2 className="text-4xl font-bold leading-tight">
              {t("subtitle2")}
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-400 leading-relaxed text-lg">
              {data.desc}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {data.role && (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <p className="text-sm text-gray-500">Role</p>
                  <p className="mt-2 font-medium">{data.role}</p>
                </div>
              )}

              {data.duration && (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="mt-2 font-medium">{data.duration}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* features */}
        {data.features && (
          <div className="reveal">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10">
              <p className="text-blue-400 uppercase tracking-[0.2em] text-sm mb-4">
                {t("keyFeatures")}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {data.features.map((feature: string, i: number) => (
                  <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-400/20 transition">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                        {i + 1}
                      </div>

                      <p className="text-gray-300 leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* challenges */}
        {data.challenges && (
          <div className="reveal">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
              <p className="text-blue-400 uppercase tracking-[0.2em] text-sm mb-6">
                {t("challenges")}
              </p>

              <div className="space-y-4">
                {data.challenges.map((item: string, i: number) => (
                  <div key={i} className="border border-white/10 rounded-2xl p-5 bg-white/5">
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* learnings */}
        {data.learnings && (
          <div className="reveal">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
              <p className="text-blue-400 uppercase tracking-[0.2em] text-sm mb-6">
                {t("learnings")}
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {data.learnings.map((item: string, i: number) => (
                  <div key={i} className="p-5 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10">
                    <p className="text-gray-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* gallery */}
        <div className="reveal">
          <p className="text-blue-400 uppercase tracking-[0.2em] text-sm mb-6">
            {t("gallery")}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {project.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedIndex(i)}
                className="overflow-hidden rounded-3xl border border-white/10 group relative"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
              </button>
            ))}
          </div>
        </div>

        {/* links */}
        <div className="reveal flex flex-wrap gap-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="px-8 py-4 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/20 transition flex items-center gap-3"
            >
              <GitBranch size={20} />
              {t("github")}
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              className="px-8 py-4 rounded-2xl bg-blue-500 hover:scale-105 transition shadow-lg shadow-blue-500/30 flex items-center gap-3"
            >
              {t("liveDemo")}
              <ArrowUpRight size={20} />
            </a>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur flex items-center justify-center">
          <button onClick={() => setSelectedIndex(null)} className="absolute top-6 right-6 text-white/70 hover:text-white">
            <X size={32} />
          </button>

          <button onClick={prevImage} className="absolute left-6 text-white/70 hover:text-white">
            <ChevronLeft size={50} />
          </button>

          <button onClick={nextImage} className="absolute right-6 text-white/70 hover:text-white">
            <ChevronRight size={50} />
          </button>

          <img
            src={project.images[selectedIndex]}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl"
          />
        </div>
      )}
    </div>
  );
}