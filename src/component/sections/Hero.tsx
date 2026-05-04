"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl"; // ✅ เพิ่ม
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const t = useTranslations("Hero"); // ✅ ใช้ namespace Hero

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-title", {
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      })
        .from(
          ".hero-sub",
          {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.7"
        )
        .from(
          ".hero-btn",
          {
            scale: 0.9,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.6"
        );

      // parallax
      gsap.to(".hero-bg", {
        y: 180,
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // fade out
      gsap.to(".hero-content", {
        opacity: 0,
        y: -100,
        filter: "blur(10px)",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom center",
          scrub: true,
        },
      });

      // glow animation
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
      className="
        relative
        min-h-screen
        flex flex-col justify-center items-center
        text-center
        px-6
        overflow-hidden
      "
    >
      {/* BG */}
      <div className="hero-bg absolute inset-0 -z-10">

        <div
          className="
            absolute inset-0
            opacity-[0.03]
            bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        />

        <div className="glow-1 absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full" />

        <div className="glow-2 absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="hero-content max-w-5xl mx-auto">

        {/* badge */}
        <div
          className="
            inline-flex items-center gap-2
            mb-6 px-4 py-1.5
            text-sm text-gray-200
            bg-white/5 border border-white/10
            rounded-full backdrop-blur-xl
          "
        >
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

          {t("badge")}
        </div>

        {/* title */}
        <h1 className="hero-title text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
          {t("title1")}{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {t("title2")}
          </span>
        </h1>

        {/* subtitle */}
        <p className="hero-sub text-gray-400 mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          {t("subtitle")}
        </p>

        {/* buttons */}
        <div className="hero-btn flex flex-col sm:flex-row gap-4 mt-10 justify-center items-center">
          <Link
            href="/projects"
            className="w-full sm:w-auto px-6 py-3 bg-blue-500 rounded-xl hover:scale-105 transition shadow-lg shadow-blue-500/30"
          >
            {t("projects")}
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition"
          >
            {t("contact")}
          </Link>
        </div>
      </div>

      {/* scroll */}
      <button
        onClick={handleScroll}
        className="absolute bottom-10 sm:bottom-16 md:bottom-24 text-gray-400 text-sm animate-bounce opacity-80 hover:opacity-100 transition"
      >
        {t("scroll")}
      </button>
    </section>
  );
}