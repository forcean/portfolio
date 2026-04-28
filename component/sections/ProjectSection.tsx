"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/constants/projects";
import ProjectCard from "../features/project/ProjectCard";

export default function ProjectSection() {
    const container = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.from(".project-card", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                y: 80,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
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
                    <ProjectCard key={p.slug} project={p} />
                ))}
            </div>
        </section>
    );
}