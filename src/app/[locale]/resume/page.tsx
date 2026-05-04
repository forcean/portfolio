"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

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
        px-6 py-24
      "
    >
      {/* BG GLOW */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            resume-glow
            absolute top-0 left-1/2 -translate-x-1/2
            w-[700px] h-[700px]
            bg-blue-500/10
            blur-[140px]
            rounded-full
          "
        />

        <div
          className="
            absolute bottom-0 right-0
            w-[500px] h-[500px]
            bg-purple-500/10
            blur-[140px]
            rounded-full
          "
        />
      </div>

      {/* HEADER */}

      <div className="resume-reveal mb-20">
        <div
          className="
            inline-flex items-center gap-2
            px-4 py-2 rounded-full
            bg-white/5 border border-white/10
            text-sm text-gray-300
            backdrop-blur
          "
        >
          Resume & Experience
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
          {personalInfo.name.split(" ")[0]}{" "}
          <span
            className="
              bg-gradient-to-r
              from-blue-400
              to-purple-500
              bg-clip-text
              text-transparent
            "
          >
            {personalInfo.name.split(" ")[1]}
          </span>
        </h1>

        <p className="text-gray-400 text-lg mt-6 max-w-2xl leading-relaxed">
          {personalInfo.role} specializing in{" "}
          {personalInfo.subtitle}
        </p>

        {/* buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="/resume.pdf"
            target="_blank"
            className="
              px-6 py-4 rounded-2xl
              bg-blue-500
              hover:scale-105
              transition
              shadow-lg shadow-blue-500/30
              flex items-center gap-3
            "
          >
            <Download size={20} />
            Download CV
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="
              px-6 py-4 rounded-2xl
              bg-white/10 border border-white/10
              hover:bg-white/20
              transition
              flex items-center gap-3
            "
          >
            <Mail size={20} />
            Contact Me
          </a>
        </div>
      </div>

      {/* STATS */}

      <div className="resume-reveal grid md:grid-cols-4 gap-6 mb-20">
        {[
          {
            title: "Projects",
            value: `${projects.length}+`,
          },
          {
            title: "Tech Stack",
            value: "15+",
          },
          {
            title: "GPA",
            value: education[0]?.gpa || "3.79",
          },
          {
            title: "Experience",
            value: "Full-stack",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="
              bg-white/5 border border-white/10
              rounded-3xl p-6
              backdrop-blur
            "
          >
            <p className="text-gray-500 text-sm">
              {item.title}
            </p>

            <h2 className="text-3xl font-bold mt-3">
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Main */}

      <div className="grid lg:grid-cols-[320px_1fr] gap-12">

        {/* Left */}
        <div className="space-y-8">

          {/* About */}
          <div
            className="
              resume-reveal
              bg-white/5 border border-white/10
              rounded-3xl p-8
              backdrop-blur-xl
            "
          >
            <h2 className="text-xl font-semibold mb-5">
              About Me
            </h2>

            <p className="text-gray-400 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          {/* Skills */}
          <div
            className="
              resume-reveal
              bg-white/5 border border-white/10
              rounded-3xl p-8
              backdrop-blur-xl
            "
          >
            <div className="flex items-center gap-3 mb-5">
              <Code2 className="text-blue-400" />

              <h2 className="text-xl font-semibold">
                Skills
              </h2>
            </div>

            <SkillsSection />
          </div>

          {/* Achievements */}
          <div
            className="
              resume-reveal
              bg-white/5 border border-white/10
              rounded-3xl p-8
              backdrop-blur-xl
            "
          >
            <div className="flex items-center gap-3 mb-5">
              <Trophy className="text-yellow-400" />

              <h2 className="text-xl font-semibold">
                Achievements
              </h2>
            </div>

            <div className="space-y-4">
              {achievements.map((item) => (
                <div
                  key={item}
                  className="
                    bg-white/5 border border-white/10
                    rounded-2xl px-4 py-3
                    text-sm text-gray-300
                  "
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-10">

          {/* Experience */}
          <div
            className="
              resume-reveal
              bg-white/5 border border-white/10
              rounded-3xl p-8
              backdrop-blur-xl
            "
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-blue-400" />

              <h2 className="text-2xl font-semibold">
                Experience
              </h2>
            </div>

            <div className="border-l border-white/10 pl-6 space-y-10">
              {experience.map((exp) => (
                <div
                  key={exp.company}
                  className="relative"
                >
                  <div
                    className="
                      absolute -left-[31px]
                      w-4 h-4 rounded-full
                      bg-blue-400
                    "
                  />

                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <div>
                      <h3 className="font-semibold text-lg">
                        {exp.role}
                      </h3>

                      <p className="text-blue-400 text-sm mt-1">
                        {exp.company}
                      </p>
                    </div>

                    <span className="text-sm text-gray-500">
                      {exp.period}
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    {exp.desc.map((item) => (
                      <p
                        key={item}
                        className="text-gray-400 leading-relaxed"
                      >
                        • {item}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div
            className="
    resume-reveal
    bg-white/5 border border-white/10
    rounded-3xl p-8
    backdrop-blur-xl
  "
          >
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="text-purple-400" />

              <h2 className="text-2xl font-semibold">
                Featured Projects
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.slice(0, 4).map((project, index) => (
                <div
                  key={project.slug}
                  className="
          relative overflow-hidden
          bg-gradient-to-br from-white/5 to-white/[0.02]
          border border-white/10
          rounded-3xl p-6
          hover:border-blue-400/30
          hover:-translate-y-1
          transition-all duration-500
          group
        "
                >
                  {/* Glow */}
                  <div
                    className="
            absolute inset-0 opacity-0
            group-hover:opacity-100
            transition duration-500
            bg-blue-500/5
          "
                  />

                  {/* Number */}
                  <div
                    className="
            w-12 h-12 rounded-2xl
            bg-blue-500/10
            border border-blue-400/20
            flex items-center justify-center
            text-blue-400 font-bold text-lg
            mb-6
          "
                  >
                    0{index + 1}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="
                px-3 py-1 rounded-full
                text-xs
                bg-white/5 border border-white/10
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
          <div
            className="
              resume-reveal
              bg-white/5 border border-white/10
              rounded-3xl p-8
              backdrop-blur-xl
            "
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-green-400" />

              <h2 className="text-2xl font-semibold">
                Education
              </h2>
            </div>

            {education.map((edu) => (
              <div key={edu.school}>
                <h3 className="font-semibold text-lg">
                  {edu.degree}
                </h3>

                <p className="text-blue-400 mt-2">
                  {edu.school}
                </p>

                <div className="flex gap-4 mt-3 text-sm text-gray-500">
                  <span>{edu.period}</span>
                  <span>•</span>
                  <span>GPA {edu.gpa}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}