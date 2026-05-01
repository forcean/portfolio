"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import {
  Mail,
  Phone,
  GitBranch,
  Link,
  ArrowUpRight,
} from "lucide-react";

export default function ContactPage() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".contact-glow", {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="
        relative min-h-screen
        overflow-hidden
        flex items-center
        justify-center
        px-6 py-24
      "
    >
      {/* BG Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            contact-glow
            absolute top-[-100px] left-1/2 -translate-x-1/2
            w-[700px] h-[700px]
            bg-blue-500/20
            blur-[140px]
            rounded-full
          "
        />

        <div
          className="
            absolute bottom-[-150px] right-[-100px]
            w-[500px] h-[500px]
            bg-purple-500/20
            blur-[140px]
            rounded-full
          "
        />
      </div>

      {/* Main Card */}

      <div
        className="
          w-full max-w-6xl
          grid lg:grid-cols-2
          gap-10
          items-center
        "
      >
        {/* Left Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div
            className="
              contact-reveal
              inline-flex items-center gap-2
              px-4 py-2
              rounded-full
              bg-white/5 border border-white/10
              backdrop-blur
              text-sm text-gray-300
            "
          >
            Available for Work
          </div>

          {/* Title */}
          <div className="contact-reveal">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Let&apos;s Build{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-blue-400
                  to-purple-500
                  bg-clip-text
                  text-transparent
                "
              >
                Something Amazing
              </span>
            </h1>

            <p className="text-gray-400 mt-6 text-lg max-w-xl leading-relaxed">
              I’m currently open to internships, full-time opportunities,
              freelance projects, and startup collaborations.
            </p>
          </div>

          {/* Buttons */}
          <div className="contact-reveal flex flex-wrap gap-4">
            <a
              href="mailto:annopsrichan@gmail.com"
              className="
                px-6 py-4 rounded-2xl
                bg-blue-500
                hover:scale-105
                transition
                shadow-lg shadow-blue-500/30
                flex items-center gap-3
              "
            >
              Send Email
              <ArrowUpRight size={20} />
            </a>

            <a
              href="https://github.com/forcean"
              target="_blank"
              className="
                px-6 py-4 rounded-2xl
                bg-white/10 border border-white/10
                hover:bg-white/20
                transition
                flex items-center gap-3
              "
            >
              <GitBranch size={20} />
              GitHub
            </a>
          </div>
        </div>

        {/* Right Card */}
        <div
          className="
            contact-reveal
            relative
            bg-white/5
            border border-white/10
            backdrop-blur-2xl
            rounded-[32px]
            p-8 md:p-10
            overflow-hidden
          "
        >
          {/* glow */}
          <div
            className="
              absolute top-0 right-0
              w-40 h-40
              bg-blue-500/10
              blur-[80px]
              rounded-full
            "
          />

          {/* title */}
          <div className="mb-10">
            <p className="text-blue-400 uppercase tracking-[0.2em] text-sm">
              Contact Information
            </p>

            <h2 className="text-3xl font-bold mt-3">
              Get In Touch
            </h2>
          </div>

          {/* Contact List */}
          <div className="space-y-6">
            {/* email */}
            <div
              className="
                flex items-center gap-5
                p-5 rounded-2xl
                bg-white/5 border border-white/10
                hover:border-blue-400/30
                transition
              "
            >
              <div
                className="
                  w-14 h-14 rounded-2xl
                  bg-blue-500/20
                  flex items-center justify-center
                  text-blue-400
                "
              >
                <Mail size={24} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Email</p>

                <a
                  href="mailto:annopsrichan@gmail.com"
                  className="text-lg hover:text-blue-400 transition"
                >
                  annopsrichan@gmail.com
                </a>
              </div>
            </div>

            {/* phone */}
            <div
              className="
                flex items-center gap-5
                p-5 rounded-2xl
                bg-white/5 border border-white/10
                hover:border-blue-400/30
                transition
              "
            >
              <div
                className="
                  w-14 h-14 rounded-2xl
                  bg-purple-500/20
                  flex items-center justify-center
                  text-purple-400
                "
              >
                <Phone size={24} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Phone</p>

                <p className="text-lg">
                  096-659-0527
                </p>
              </div>
            </div>

            {/* github */}
            <div
              className="
                flex items-center gap-5
                p-5 rounded-2xl
                bg-white/5 border border-white/10
                hover:border-blue-400/30
                transition
              "
            >
              <div
                className="
                  w-14 h-14 rounded-2xl
                  bg-white/10
                  flex items-center justify-center
                "
              >
                <GitBranch size={24} />
              </div>

              <div>
                <p className="text-sm text-gray-500">GitHub</p>

                <a
                  href="https://github.com/forcean"
                  target="_blank"
                  className="text-lg hover:text-blue-400 transition"
                >
                  github.com/forcean
                </a>
              </div>
            </div>

            {/* linkedin */}
            <div
              className="
                flex items-center gap-5
                p-5 rounded-2xl
                bg-white/5 border border-white/10
                hover:border-blue-400/30
                transition
              "
            >
              <div
                className="
                  w-14 h-14 rounded-2xl
                  bg-blue-500/20
                  flex items-center justify-center
                  text-blue-400
                "
              >
                <Link size={24} />
              </div>

              <div>
                <p className="text-sm text-gray-500">LinkedIn</p>

                <a
                  href="#"
                  className="text-lg hover:text-blue-400 transition"
                >
                  linkedin.com/in/yourprofile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}