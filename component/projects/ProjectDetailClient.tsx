"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Project } from "@/types/project";


export default function ProjectDetailClient({
    project,
}: {
    project: Project;
}) {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".fade-up", {
                y: 50,
                opacity: 0,
                stagger: 0.12,
                duration: 1,
                ease: "power3.out",
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={container}
            className="max-w-6xl mx-auto px-6 py-20 space-y-12"
        >
            {/* HERO */}
            <div className="fade-up space-y-4">
                <h1 className="text-4xl font-bold">{project.title}</h1>

                <p className="text-gray-400 max-w-2xl">{project.desc}</p>

                {/* Tech */}
                <div className="flex gap-2 flex-wrap mt-4">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs bg-blue-500/20 px-3 py-1 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* GALLERY */}
            <div className="fade-up grid md:grid-cols-2 gap-6">
                {project.images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        className="rounded-xl w-full object-cover hover:scale-105 transition duration-500"
                    />
                ))}
            </div>

            {/* FEATURES */}
            {project.features && (
                <div className="fade-up bg-white/5 backdrop-blur border border-white/10 p-6 rounded-2xl">
                    <h2 className="text-xl font-semibold mb-4">Key Features</h2>

                    <ul className="list-disc list-inside text-gray-400 space-y-2">
                        {project.features.map((f, i) => (
                            <li key={i}>{f}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* LINKS */}
            <div className="fade-up flex gap-4">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        className="px-5 py-2 bg-white/10 rounded-xl hover:bg-white/20 transition"
                    >
                        GitHub
                    </a>
                )}

                {project.demoUrl && (
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        className="px-5 py-2 bg-blue-500 rounded-xl hover:scale-105 transition"
                    >
                        Live Demo
                    </a>
                )}
            </div>
        </div>
    );
}