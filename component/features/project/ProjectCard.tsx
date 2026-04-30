import Link from "next/link";
import { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group bg-white/5 backdrop-blur border border-white/10 rounded-2xl overflow-hidden transition duration-300 hover:scale-[1.03] cursor-pointer will-change-transform">

        <div className="overflow-hidden">
          <img
            src={project.images[0]}
            className="w-full h-48 object-cover transition duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-5">
          <h2 className="text-xl font-bold">{project.title}</h2>
          <p className="text-gray-400 mt-2 line-clamp-2">
            {project.desc}
          </p>

          <div className="flex gap-2 mt-3 flex-wrap">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs bg-blue-500/20 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}