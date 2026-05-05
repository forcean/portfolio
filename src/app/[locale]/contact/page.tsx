"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTranslations } from "next-intl";

import {
  Mail,
  Phone,
  GitBranch,
  Link,
  ArrowUpRight,
} from "lucide-react";

export default function ContactPage() {
  const container = useRef<HTMLDivElement>(null);
  const t = useTranslations("contact");

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
        flex items-center justify-center
        px-5 sm:px-6 lg:px-8
        py-20 md:py-28
        overflow-hidden
      "
    >
      {/* BG */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="contact-glow absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] md:w-[700px] h-[600px] md:h-[700px] bg-blue-500/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-purple-500/20 blur-[140px] rounded-full" />
      </div>

      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div className="space-y-8 text-center lg:text-left">

          {/* badge */}
          <div className="contact-reveal inline-flex mx-auto lg:mx-0 items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur text-sm text-gray-300">
            {t("badge")}
          </div>

          {/* title */}
          <div className="contact-reveal">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
              {t("title1")}{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {t("title2")}
              </span>
            </h1>

            <p className="text-gray-400 mt-6 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t("desc")}
            </p>
          </div>

          {/* buttons */}
          <div className="contact-reveal flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <a
              href="mailto:annopsrichan@gmail.com"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-blue-500 hover:scale-105 transition shadow-lg shadow-blue-500/30 flex items-center justify-center gap-3"
            >
              {t("sendEmail")}
              <ArrowUpRight size={20} />
            </a>

            <a
              href="https://github.com/forcean"
              target="_blank"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/20 transition flex items-center justify-center gap-3"
            >
              <GitBranch size={20} />
              {t("github")}
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="contact-reveal relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[28px] md:rounded-[32px] p-6 sm:p-8 md:p-10">

          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[80px] rounded-full" />

          <div className="mb-8">
            <p className="text-blue-400 uppercase tracking-[0.2em] text-xs md:text-sm">
              {t("infoTitle")}
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              {t("infoSubtitle")}
            </h2>
          </div>

          <div className="space-y-5">

            {/* email */}
            <ContactItem
              icon={<Mail />}
              label={t("email")}
              value="annopsrichan@gmail.com"
              link="mailto:annopsrichan@gmail.com"
            />

            {/* phone */}
            <ContactItem
              icon={<Phone />}
              label={t("phone")}
              value="096-659-0527"
            />

            {/* github */}
            <ContactItem
              icon={<GitBranch />}
              label="GitHub"
              value="github.com/forcean"
              link="https://github.com/forcean"
            />

            {/* linkedin */}
            <ContactItem
              icon={<Link />}
              label={t("linkedin")}
              value="linkedin.com/in/annop-srichan"
              link="https://www.linkedin.com/in/annop-srichan-521211346"
            />

          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  link,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
}) {
  return (
    <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/30 transition">

      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400">
        {icon}
      </div>

      <div>
        <p className="text-xs sm:text-sm text-gray-500">{label}</p>

        {link ? (
          <a
            href={link}
            target="_blank"
            className="text-base sm:text-lg hover:text-blue-400 transition"
          >
            {value}
          </a>
        ) : (
          <p className="text-base sm:text-lg">{value}</p>
        )}
      </div>
    </div>
  );
}