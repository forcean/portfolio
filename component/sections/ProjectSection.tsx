"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/constants/projects";
import ProjectCard from "../features/project/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSection() {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            /* 🔥 section intro */
            gsap.from(".project-heading", {
                y: 80,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
            });

            /* 🔥 cards animation */
            gsap.from(".project-item", {
                y: 120,
                opacity: 0,
                stagger: 0.18,
                duration: 1.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".projects-grid",
                    start: "top 80%",
                },
            });

            /* 🔥 parallax bg glow */
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
            className="relative overflow-hidden py-32"
        >
            {/* 🔥 Background */}
            <div className="absolute inset-0 -z-10">
                <div className="project-glow absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[140px] rounded-full" />

                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6">

                {/* 🔥 Heading */}
                <div className="project-heading text-center mb-20">
                    <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
                        Portfolio
                    </p>

                    <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                        Featured{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>

                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
                        A collection of full-stack applications, scalable systems,
                        and modern web experiences built with performance,
                        maintainability and clean UI in mind.
                    </p>
                </div>

                {/* 🔥 Grid */}
                <div className="projects-grid grid lg:grid-cols-2 gap-10">
                    {projects.map((p) => (
                        <div
                            key={p.slug}
                            className="project-item"
                        >
                            <ProjectCard project={p} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}