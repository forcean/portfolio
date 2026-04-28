export type Project = {
    slug: string;
    title: string;
    desc: string;
    features?: string[];
    images: string[];
    techStack: string[];
    github?: string;
    demoUrl?: string;
};