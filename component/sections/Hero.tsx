"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(".hero-title", {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
            })
                .from(".hero-sub", {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                }, "-=0.6")
                .from(".hero-btn", {
                    scale: 0.8,
                    opacity: 0,
                    duration: 0.8,
                }, "-=0.5");
        }, container);

        return () => ctx.revert(); // 🔥 cleanup
    }, []);

    return (
        <section ref={container} className="h-screen flex flex-col justify-center items-center text-center px-6">
            <h1 className="hero-title text-5xl md:text-6xl font-bold">
                Annop <span className="text-blue-400">Srichan</span>
            </h1>

            <p className="hero-sub text-gray-400 mt-6 max-w-xl">
                Full-stack Developer specializing in Angular, NestJS & Microservices
            </p>

            <button className="hero-btn mt-6 px-6 py-3 bg-blue-500 rounded-xl hover:scale-105 transition">
                View Projects
            </button>
        </section>
    );
}