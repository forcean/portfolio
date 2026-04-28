import { projects } from "@/constants/projects";
import { notFound } from "next/navigation";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 space-y-8">
      <h1 className="text-3xl font-bold">{project.title}</h1>

      <p className="text-gray-400">{project.desc}</p>

      <div className="grid md:grid-cols-2 gap-4">
        {project.images.map((img, i) => (
          <img key={i} src={img} className="rounded-xl w-full" />
        ))}
      </div>
    </div>
  );
}