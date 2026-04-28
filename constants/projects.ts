import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        slug: "autoservicepro",
        title: "AutoServicePro",
        desc: "Full-stack service management platform with Microservices architecture",
        images: [
            "/projects/auto-1.png",
            "/projects/auto-2.png",
            "/projects/auto-3.png",
        ],
        techStack: ["Angular", "NestJS", "MongoDB"],
        github: "https://github.com/your",
    },
    {
        slug: "flood-alert",
        title: "Flood Alert System",
        desc: "IoT real-time alert system with Node-RED + LINE API",
        images: [
            "/projects/flood-1.png",
            "/projects/flood-2.png",
        ],
        techStack: ["Node-RED", "Arduino"],
    },
];