import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types/project";

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div
        className="
        group relative overflow-hidden rounded-3xl
        border border-white/10
        bg-white/5 backdrop-blur-xl
        transition-all duration-500
        hover:border-blue-400/30
        hover:shadow-[0_0_60px_rgba(59,130,246,0.15)]
        hover:-translate-y-2
      "
      >
        {/* 🔥 Glow Hover */}
        <div
          className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          transition duration-700
          bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10
        "
        />

        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className="
              w-full h-[260px] object-cover
              transition duration-700
              group-hover:scale-110
            "
          />

          {/* Overlay */}
          <div
            className="
            absolute inset-0
            bg-gradient-to-t from-black via-black/20 to-transparent
          "
          />

          {/* Floating button */}
          <div
            className="
            absolute top-5 right-5
            w-12 h-12 rounded-full
            bg-white/10 backdrop-blur
            border border-white/20
            flex items-center justify-center
            opacity-0 translate-y-4
            group-hover:opacity-100
            group-hover:translate-y-0
            transition duration-500
          "
          >
            <ArrowUpRight size={20} />
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6">
          {/* title */}
          <h2
            className="
            text-2xl font-bold
            transition duration-300
            group-hover:text-blue-400
          "
          >
            {project.title}
          </h2>

          {/* desc */}
          <p className="text-gray-400 mt-3 leading-relaxed line-clamp-2">
            {project.desc}
          </p>

          {/* tech */}
          <div className="flex flex-wrap gap-2 mt-5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="
                  px-3 py-1 text-xs rounded-full
                  bg-blue-500/10 border border-blue-400/20
                  text-blue-300
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* footer */}
          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm text-gray-500">
              View Project
            </span>

            <div
              className="
              w-10 h-10 rounded-full
              bg-white/5 border border-white/10
              flex items-center justify-center
              transition duration-300
              group-hover:bg-blue-500/20
            "
            >
              →
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}