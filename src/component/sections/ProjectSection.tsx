"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/src/constants/projects";
import ProjectCard from "../features/project/ProjectCard";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSection() {
    const container = useRef<HTMLDivElement>(null);

    const t = useTranslations("projects");

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".project-heading", {
                y: 80,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 82%",
                },
            });

            gsap.from(".project-item", {
                y: 100,
                opacity: 0,
                stagger: 0.14,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".projects-grid",
                    start: "top 85%",
                },
            });

            gsap.to(".project-glow", {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={container}
            className="
    relative overflow-hidden
    pt-32 sm:pt-36 md:pt-40
    pb-20 sm:pb-24 md:pb-32
  "
        >
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="project-glow absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-blue-500/10 blur-[120px] rounded-full" />

                <div className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="project-heading text-center mb-14 sm:mb-20">
                    <p className="text-blue-400 uppercase tracking-[0.28em] text-[0.7rem] sm:text-xs md:text-sm mb-4">
                        {t("header")}
                    </p>

                    <h2 className="font-bold leading-[1.05] tracking-tight text-3xl sm:text-5xl md:text-6xl">
                        {t("title1")}{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            {t("title2")}
                        </span>
                    </h2>

                    <p className="text-gray-400 mt-5 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-2">
                        {t("subtitle")}
                    </p>
                </div>

                <div className="projects-grid grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                    {projects.map((p, i) => (
                        <div
                            key={p.slug}
                            className="project-item"
                        >
                            <ProjectCard
                                project={p}
                                priority={i === 0}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}