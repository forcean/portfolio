"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Project } from "@/src/types/project";

export default function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  const t = useTranslations("projects");

  return (
    <Link href={`/projects/${project.slug}`}>
      <article
        className="
          group relative overflow-hidden rounded-[2rem]
          border border-white/10
          bg-white/[0.04]
          backdrop-blur-2xl
          transition-all duration-500
          hover:border-blue-400/30
          hover:shadow-[0_0_60px_rgba(59,130,246,0.14)]
          hover:-translate-y-1.5
        "
      >
        <div
          className="
            absolute inset-0 opacity-0
            group-hover:opacity-100
            transition duration-700
            bg-gradient-to-br
            from-blue-500/10
            via-transparent
            to-purple-500/10
          "
        />

        <div className="relative overflow-hidden">
          <div className="relative aspect-[16/9] sm:aspect-[16/10]">
            <Image
              src={project.images[0]}
              alt={t(`items.${project.key}.title`)}
              fill
              priority={priority}
              loading={priority ? "eager" : "lazy"}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="
    object-cover
    transition duration-700
    group-hover:scale-105
  "
            />
          </div>

          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-black/70
              via-black/10
              to-transparent
            "
          />

          <div
            className="
              absolute top-4 right-4 sm:top-5 sm:right-5
              w-10 h-10 sm:w-12 sm:h-12
              rounded-2xl
              bg-white/10 backdrop-blur-xl
              border border-white/20
              flex items-center justify-center
              opacity-100 sm:opacity-0
              sm:translate-y-4
              group-hover:opacity-100
              group-hover:translate-y-0
              transition duration-500
            "
          >
            <ArrowUpRight
              size={18}
              className="sm:w-5 sm:h-5"
            />
          </div>
        </div>

        <div className="relative p-5 sm:p-6">
          <h2
            className="
              font-bold tracking-tight
              text-xl sm:text-2xl
              transition duration-300
              group-hover:text-blue-400
            "
          >
            {t(`items.${project.key}.title`)}
          </h2>

          <p className="text-gray-400 mt-3 leading-relaxed line-clamp-2 text-sm sm:text-[0.95rem]">
            {t(`items.${project.key}.shortDesc`)}
          </p>

          <div className="flex flex-wrap gap-2 mt-5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="
                  px-3 py-1.5
                  text-[0.7rem] sm:text-xs
                  rounded-full
                  bg-blue-500/10
                  border border-blue-400/20
                  text-blue-300
                  backdrop-blur-xl
                "
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-xs sm:text-sm text-gray-500 tracking-wide">
              {t("viewProject")}
            </span>

            <div
              className="
                w-10 h-10
                rounded-2xl
                bg-white/5
                border border-white/10
                flex items-center justify-center
                transition duration-300
                group-hover:bg-blue-500/20
                group-hover:border-blue-400/20
              "
            >
              →
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}