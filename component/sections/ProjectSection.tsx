"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/constants/projects";
import ProjectCard from "../features/project/ProjectCard";

export default function ProjectSection() {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray<HTMLElement>(".project-item");

            gsap.from(cards, {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 75%",
                },
                y: 60,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: "power3.out",
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="max-w-6xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold mb-10">Projects</h2>

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((p) => (
                    <div key={p.slug} className="project-item">
                        <ProjectCard project={p} />
                    </div>
                ))}
            </div>
        </section>
    );
}