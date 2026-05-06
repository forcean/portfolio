import { Project } from "@/src/types/project";

export const projects: Project[] = [
    {
        slug: "autoservicepro",
        key: "autoservicepro",
        coverImage: "/projects/auto-cover.png",
        images: [
            "/projects/auto-1.png",
            "/projects/auto-2.png",
            "/projects/auto-3.png",
            "/projects/auto-4.png",
            "/projects/auto-5.png",
            "/projects/auto-6.png",
            "/projects/auto-7.png",
            "/projects/auto-8.png",
            "/projects/auto-9.png",
            "/projects/auto-10.png",
            "/projects/auto-11.png",
            "/projects/auto-12.png",
            "/projects/auto-13.png",
        ],

        techStack: [
            "Angular",
            "TypeScript",
            "SCSS",
            "NestJS",
            "MongoDB",
            "JWT",
        ],

        github: "https://github.com/xxx",
        demoUrl: "https://xxx.vercel.app",
    },

    {
        slug: "amid",
        key: "amid",

        coverImage: "/projects/amid-cover.png",
        images: [
            "/projects/amid-1.png",
            "/projects/amid-2.png",
            "/projects/amid-3.png",
            "/projects/amid-4.png",
            "/projects/amid-5.png",
            "/projects/amid-6.png",
            "/projects/amid-7.png",
            "/projects/amid-8.png",
        ],

        techStack: [
            "Angular",
            "TypeScript",
            "Docker",
            "CI/CD",
            "PostgreSQL",
            "MongoDB",
            "NGINX",
            "Minio",
            "Google Maps API",
        ],

        github: "https://github.com/xxx",
        demoUrl: "https://xxx.vercel.app",
    },

    {
        slug: "oms",
        key: "oms",

        coverImage: "/projects/oms-cover.png",
        images: [
            "/projects/oms-1.png",
            "/projects/oms-2.png",
            "/projects/oms-3.png",
            "/projects/oms-4.png",
            "/projects/oms-5.png",
        ],

        techStack: [
            "System Design",
            "Flowchart Architecture",
            "API Integration Research",
            "Marketplace API (Shopee/Lazada/TikTok)",
            "Inventory Management Logic",
        ],

        github: "https://github.com/xxx",
        demoUrl: "",
    },

    {
        slug: "flood-alert",
        key: "flood",

        coverImage: "/projects/flood-cover.png",
        images: [
            "/projects/flood-1.png",
            "/projects/flood-2.png",
            "/projects/flood-3.png",
            "/projects/flood-4.png",
        ],

        techStack: [
            "Arduino",
            "Node-RED",
            "MQTT",
            "LINE API",
            "IoT",
        ],

        github: "https://github.com/xxx",
        demoUrl: "",
    },

    {
        slug: "pygame-game",
        key: "game",

        coverImage: "/projects/game-cover.png",
        images: [
            "/projects/game-1.png",
            "/projects/game-2.png",
            "/projects/game-3.png",
            "/projects/game-4.png",
            "/projects/game-5.png",
            "/projects/game-6.png",
        ],

        techStack: [
            "Python",
            "Pygame",
            "OOP",
        ],

        github: "https://github.com/forcean/project-oop",
        demoUrl: "",
    },
];