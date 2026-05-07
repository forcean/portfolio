"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTranslations } from "next-intl";

import {
  Mail,
  Phone,
  GitBranch,
  Link as LinkIcon,
  ArrowUpRight,
} from "lucide-react";

export default function ContactPage() {
  const container = useRef<HTMLDivElement>(null);

  const t = useTranslations("contact");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        y: 70,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".contact-glow", {
        scale: 0.8,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="
        relative overflow-hidden
        min-h-screen
        flex items-center
        px-5 sm:px-6 lg:px-8
        pt-32 sm:pt-36 md:pt-40
        pb-16 sm:pb-20 md:pb-28
      "
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="contact-glow absolute top-[-140px] left-1/2 -translate-x-1/2 w-[520px] sm:w-[700px] h-[520px] sm:h-[700px] bg-blue-500/20 blur-[130px] rounded-full" />

        <div className="absolute bottom-[-180px] right-[-120px] w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-purple-500/20 blur-[130px] rounded-full" />
      </div>

      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-7 text-center lg:text-left">
          <div className="contact-reveal inline-flex mx-auto lg:mx-0 items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-[0.72rem] sm:text-sm text-gray-300">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

            {t("badge")}
          </div>

          <div className="contact-reveal">
            <h1 className="font-bold leading-[1.02] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              {t("title1")}{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {t("title2")}
              </span>
            </h1>

            <p className="text-gray-400 mt-5 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t("desc")}
            </p>
          </div>

          <div className="contact-reveal flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="mailto:annopsrichan@gmail.com"
              className="
                w-full sm:w-auto
                px-6 sm:px-7
                py-4
                rounded-2xl
                bg-blue-500
                hover:scale-[1.03]
                transition-all duration-300
                shadow-lg shadow-blue-500/30
                flex items-center justify-center gap-3
                text-sm sm:text-base
              "
            >
              {t("sendEmail")}

              <ArrowUpRight size={20} />
            </a>

            <a
              href="https://github.com/forcean"
              target="_blank"
              className="
                w-full sm:w-auto
                px-6 sm:px-7
                py-4
                rounded-2xl
                bg-white/10
                border border-white/10
                hover:bg-white/20
                transition-all duration-300
                flex items-center justify-center gap-3
                backdrop-blur-xl
                text-sm sm:text-base
              "
            >
              <GitBranch size={20} />

              {t("github")}
            </a>
          </div>
        </div>

        <div
          className="
            contact-reveal relative
            bg-white/[0.05]
            border border-white/10
            backdrop-blur-2xl
            rounded-[2rem]
            p-5 sm:p-7 md:p-10
          "
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[80px] rounded-full" />

          <div className="mb-8">
            <p className="text-blue-400 uppercase tracking-[0.22em] text-[0.7rem] sm:text-xs md:text-sm">
              {t("infoTitle")}
            </p>

            <h2 className="font-bold mt-3 tracking-tight text-2xl sm:text-3xl">
              {t("infoSubtitle")}
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-5">
            <ContactItem
              icon={<Mail />}
              label={t("email")}
              value="annopsrichan@gmail.com"
              link="mailto:annopsrichan@gmail.com"
            />

            <ContactItem
              icon={<Phone />}
              label={t("phone")}
              value="096-659-0527"
            />

            <ContactItem
              icon={<GitBranch />}
              label="GitHub"
              value="github.com/forcean"
              link="https://github.com/forcean"
            />

            <ContactItem
              icon={<LinkIcon />}
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
    <div
      className="
        flex items-center gap-4
        p-4 sm:p-5
        rounded-2xl
        bg-white/[0.04]
        border border-white/10
        hover:border-blue-400/30
        transition-all duration-300
      "
    >
      <div
        className="
          w-12 h-12 sm:w-14 sm:h-14
          shrink-0
          rounded-2xl
          bg-blue-500/20
          flex items-center justify-center
          text-blue-400
        "
      >
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-[0.72rem] sm:text-sm text-gray-500">
          {label}
        </p>

        {link ? (
          <a
            href={link}
            target="_blank"
            className="
              block
              mt-1
              text-sm sm:text-base md:text-lg
              truncate
              hover:text-blue-400
              transition-colors duration-300
            "
          >
            {value}
          </a>
        ) : (
          <p className="mt-1 text-sm sm:text-base md:text-lg break-all">
            {value}
          </p>
        )}
      </div>
    </div>
  );
}