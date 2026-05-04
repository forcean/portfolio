export interface Project {
    slug: string;
    title: string;
    shortDesc: string;
    desc: string;
    coverImage: string;
    images: string[];
    techStack: string[];
    features?: string[];
    challenges?: string[];
    learnings?: string[];
    duration?: string;
    role?: string;
    github?: string;
    demoUrl?: string;
}