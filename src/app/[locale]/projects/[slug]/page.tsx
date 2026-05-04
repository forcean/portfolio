import ProjectDetailClient from "@/src/component/projects/ProjectDetailClient";
import { projects } from "@/src/constants/projects";
import { notFound } from "next/navigation";


export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return <ProjectDetailClient project={project} />;
}