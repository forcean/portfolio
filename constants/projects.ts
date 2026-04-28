import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        slug: "autoservicepro",
        title: "AutoServicePro",
        desc: "Platform for managing service operations",
        images: ["/projects/auto-1.png", "/projects/auto-2.png"],
        techStack: ["Angular", "NestJS", "MongoDB"],
        features: [
            "User authentication with JWT",
            "Real-time booking system",
            "Admin dashboard",
        ],
        github: "https://github.com/xxx",
        demoUrl: "https://xxx.vercel.app"
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
        features: [
            "Real-time water level monitoring",
            "Automated LINE notifications",
            "Historical data logging",
        ],
        github: "https://github.com/xxx",
        demoUrl: "https://xxx.vercel.app"
    },
];