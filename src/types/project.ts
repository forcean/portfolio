export interface Project {
    slug: string;
    key: string;
    coverImage: string;
    images: string[];
    techStack: string[];
    github?: string;
    demoUrl?: string;
}