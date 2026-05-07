"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTranslations } from "next-intl";

import {
  Briefcase,
  GraduationCap,
  Code2,
  Download,
  Mail,
  Trophy,
} from "lucide-react";

import SkillsSection from "@/src/component/sections/SkillsSection";

import {
  personalInfo,
  experience,
  education,
  achievements,
} from "@/src/constants/resume";

import { projects } from "@/src/constants/projects";

export default function ResumePage() {
  const container = useRef<HTMLDivElement>(null);
  const t = useTranslations("resume");
  const projectT = useTranslations("projects");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".resume-reveal", {
        y: 80,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".resume-glow", {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="
        relative overflow-hidden
        max-w-7xl mx-auto
        px-5 sm:px-6 lg:px-8
        pt-32 sm:pt-36 md:pt-40
        pb-20 sm:pb-24 md:pb-28
      "
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="resume-glow absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[650px] md:w-[750px] md:h-[750px] bg-blue-500/10 blur-[140px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] md:w-[550px] md:h-[550px] bg-purple-500/10 blur-[140px] rounded-full" />
      </div>

      {/* Header */}
      <div className="resume-reveal mb-16 sm:mb-20 md:mb-24">
        <div
          className="
            inline-flex items-center gap-2
            px-4 py-2
            rounded-full
            bg-white/5
            border border-white/10
            text-[0.72rem] sm:text-sm
            text-gray-300
            backdrop-blur-xl
          "
        >
          {t("badge")}
        </div>

        <h1
          className="
            mt-6
            font-bold
            leading-[1.05]
            tracking-tight
            text-[2.5rem]
            sm:text-[3.8rem]
            md:text-[5.2rem]
            lg:text-[6.2rem]
          "
        >
          {personalInfo.name.split(" ")[0]}{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {personalInfo.name.split(" ")[1]}
          </span>
        </h1>

        <p
          className="
            text-gray-400
            mt-5 sm:mt-6
            max-w-3xl
            leading-relaxed
            text-[0.95rem]
            sm:text-[1rem]
            md:text-[1.08rem]
          "
        >
          {t("role")} {t("subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="/resume.pdf"
            target="_blank"
            className="
              w-full sm:w-auto
              px-6 py-4
              rounded-2xl
              bg-blue-500
              hover:scale-[1.02]
              transition
              shadow-lg shadow-blue-500/30
              flex items-center justify-center gap-3
              text-[0.92rem] sm:text-base
              font-medium
            "
          >
            <Download size={20} />
            {t("download")}
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="
              w-full sm:w-auto
              px-6 py-4
              rounded-2xl
              bg-white/10
              border border-white/10
              hover:bg-white/20
              transition
              flex items-center justify-center gap-3
              text-[0.92rem] sm:text-base
              font-medium
            "
          >
            <Mail size={20} />
            {t("contact")}
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className="resume-reveal grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
        {[
          { title: t("stats.projects"), value: `${projects.length}+` },
          { title: t("stats.tech"), value: "15+" },
          { title: "GPA", value: education[0]?.gpa || "3.79" },
          { title: t("stats.exp"), value: "Full-stack" },
        ].map((item) => (
          <div
            key={item.title}
            className="
              bg-white/5
              border border-white/10
              rounded-3xl
              p-5 sm:p-6
              backdrop-blur-xl
            "
          >
            <p className="text-gray-500 text-[0.72rem] sm:text-sm">
              {item.title}
            </p>

            <h2 className="text-[1.7rem] sm:text-3xl font-bold mt-3">
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Main */}
      <div className="grid xl:grid-cols-[340px_1fr] gap-8 lg:gap-12">
        {/* Sidebar */}
        <div className="space-y-6 sm:space-y-8">
          {/* About */}
          <div className="resume-reveal bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl">
            <h2 className="text-[1.1rem] sm:text-xl font-semibold mb-5">
              {t("about")}
            </h2>

            <p className="text-gray-400 leading-relaxed text-[0.92rem] sm:text-base">
              {t("summary")}
            </p>
          </div>

          {/* Skills */}
          <div className="resume-reveal bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl">
            <div className="flex items-center gap-3 mb-5">
              <Code2 className="text-blue-400" />

              <h2 className="text-[1.1rem] sm:text-xl font-semibold">
                {t("skills")}
              </h2>
            </div>

            <SkillsSection />
          </div>

          {/* Achievements */}
          <div className="resume-reveal bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl">
            <div className="flex items-center gap-3 mb-5">
              <Trophy className="text-yellow-400" />

              <h2 className="text-[1.1rem] sm:text-xl font-semibold">
                {t("achievementsTitle")}
              </h2>
            </div>

            <div className="space-y-4">
              {achievements.map((i) => (
                <div
                  key={i}
                  className="
                    bg-white/5
                    border border-white/10
                    rounded-2xl
                    px-4 py-3
                    text-[0.85rem] sm:text-sm
                    text-gray-300
                    leading-relaxed
                  "
                >
                  {t(`achievementList.${i}`)}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-8 sm:space-y-10">
          {/* Experience */}
          <div className="resume-reveal bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-blue-400" />

              <h2 className="text-[1.35rem] sm:text-2xl font-semibold">
                {t("experienceTitle")}
              </h2>
            </div>

            <div className="border-l border-white/10 pl-5 sm:pl-6 space-y-10">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-[1rem] sm:text-lg">
                        {t(`${exp.key}.role`)}
                      </h3>

                      <p className="text-blue-400 text-[0.82rem] sm:text-sm mt-1">
                        {exp.company}
                      </p>
                    </div>

                    <span className="text-[0.78rem] sm:text-sm text-gray-500">
                      {t(`${exp.key}.period`)}
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <p
                        key={i}
                        className="
                          text-gray-400
                          leading-relaxed
                          text-[0.9rem] sm:text-[0.97rem]
                        "
                      >
                        • {t(`${exp.key}.desc${i}`)}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="resume-reveal bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl">
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="text-purple-400" />

              <h2 className="text-[1.35rem] sm:text-2xl font-semibold">
                {t("projectsTitle")}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
              {projects.slice(0, 4).map((project, index) => (
                <div
                  key={project.slug}
                  className="
                    relative overflow-hidden
                    bg-gradient-to-br from-white/5 to-white/[0.02]
                    border border-white/10
                    rounded-3xl
                    p-5 sm:p-6
                    hover:border-blue-400/30
                    hover:-translate-y-1
                    transition-all duration-500
                    group
                  "
                >
                  <div
                    className="
                      absolute inset-0 opacity-0
                      group-hover:opacity-100
                      transition duration-500
                      bg-blue-500/5
                    "
                  />

                  <div
                    className="
                      w-11 h-11 sm:w-12 sm:h-12
                      rounded-2xl
                      bg-blue-500/10
                      border border-blue-400/20
                      flex items-center justify-center
                      text-blue-400 font-bold
                      text-base sm:text-lg
                      mb-5
                    "
                  >
                    0{index + 1}
                  </div>

                  <h3 className="text-[1rem] sm:text-xl font-semibold leading-snug">
                    {projectT(`items.${project.key}.title`)}
                  </h3>

                  <p
                    className="
    text-gray-400
    text-[0.85rem] sm:text-sm
    mt-4
    leading-relaxed
  "
                  >
                    {projectT(`items.${project.key}.shortDesc`)}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-3 py-1
                          rounded-full
                          text-[0.7rem] sm:text-xs
                          bg-white/5
                          border border-white/10
                          text-gray-300
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="resume-reveal bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-green-400" />

              <h2 className="text-[1.35rem] sm:text-2xl font-semibold">
                {t("educationTitle")}
              </h2>
            </div>

            {education.map((edu) => (
              <div key={edu.school}>
                <h3 className="font-semibold text-[1rem] sm:text-lg">
                  {t(`${edu.key}.degree`)}
                </h3>

                <p className="text-blue-400 mt-2 text-[0.92rem] sm:text-base">
                  {edu.school}
                </p>

                <div className="flex flex-wrap gap-3 mt-3 text-[0.78rem] sm:text-sm text-gray-500">
                  <span>{edu.period}</span>

                  <span>•</span>

                  <span>GPA {edu.gpa}</span>
                </div>

                <p className="text-gray-400 mt-3 leading-relaxed text-[0.9rem] sm:text-base">
                  {t(`${edu.key}.extra`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}