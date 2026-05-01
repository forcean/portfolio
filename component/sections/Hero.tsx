"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-title", {
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      })
        .from(".hero-sub", {
          y: 60,
          opacity: 0,
          duration: 1,
        }, "-=0.7")
        .from(".hero-btn", {
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
        }, "-=0.6");

      // 🔥 parallax background
      gsap.to(".hero-bg", {
        y: 150,
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // 🔥 floating glow
      gsap.to(".glow-1", {
        x: 60,
        y: 40,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".glow-2", {
        x: -50,
        y: -30,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const handleScroll = () => {
    document.getElementById("highlights")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={container}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      {/* BG */}
      <div className="hero-bg absolute inset-0 -z-10">
        <div className="glow-1 absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full" />
        <div className="glow-2 absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="mb-4 px-4 py-1 text-sm bg-white/5 border border-white/10 rounded-full backdrop-blur">
        Available for work
      </div>

      <h1 className="hero-title text-5xl md:text-7xl font-bold leading-tight">
        Building Modern{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Web Experiences
        </span>
      </h1>

      <p className="hero-sub text-gray-400 mt-6 max-w-xl text-lg">
        I’m Annop — Full-stack Developer specializing in Angular, NestJS &
        Microservices.
      </p>

      <div className="flex gap-4 mt-8 hero-btn">
        <Link
          href="/projects"
          className="px-6 py-3 bg-blue-500 rounded-xl hover:scale-105 transition shadow-lg shadow-blue-500/30"
        >
          View Projects
        </Link>

        <Link
          href="/contact"
          className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition"
        >
          Contact Me
        </Link>
      </div>

      <button
        onClick={handleScroll}
        className="absolute bottom-20 md:bottom-24 text-gray-400 text-sm animate-bounce opacity-80 hover:opacity-100 transition"
      >
        ↓ Scroll
      </button>
    </section>
  );
}