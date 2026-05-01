import { Project } from "@/types/project";

export const projects: Project[] = [
    // ================= AUTO SERVICE PRO =================
    {
        slug: "autoservicepro",
        title: "AutoServicePro",
        shortDesc:
            "Full-stack service management platform with modern scalable architecture.",
        desc:
            "AutoServicePro is a full-stack web application designed to manage automotive service operations. It includes booking systems, shop management, and customer interactions. The project focuses on clean architecture, reusable frontend components, and scalable backend design.",

        coverImage: "/projects/auto-cover.png",
        images: [
            "/projects/auto-1.png",
            "/projects/auto-2.png",
            "/projects/auto-3.png",
        ],

        techStack: [
            "Angular",
            "NestJS",
            "MongoDB",
            "TypeScript",
            "Docker",
            "JWT",
            "SCSS",
        ],

        features: [
            "JWT authentication with role-based authorization",
            "Shop and service management system",
            "Real-time booking and appointment handling",
            "Dynamic product and category management",
            "Image upload system with gallery support",
            "Responsive UI with reusable components",
        ],

        challenges: [
            "Designing scalable backend structure with NestJS",
            "Handling complex form states with Angular Reactive Forms",
            "Managing image upload and update workflows",
        ],

        learnings: [
            "Improved full-stack architecture design",
            "Better understanding of Angular state management",
            "Hands-on experience with REST API design",
        ],

        duration: "3 Months",
        role: "Full-stack Developer",
        github: "https://github.com/xxx",
        demoUrl: "https://xxx.vercel.app",
    },

    // ================= AMID MARKETPLACE =================
    {
        slug: "amid",
        title: "AMID Marketplace",
        shortDesc:
            "Marketplace platform for connecting service providers and customers.",
        desc:
            "AMID is a marketplace platform that connects users with service providers. This project focuses on high-performance frontend development, relational database modeling, and automated deployment pipelines.",

        coverImage: "/projects/amid-cover.png",
        images: [
            "/projects/amid-1.png",
            "/projects/amid-2.png",
            "/projects/amid-3.png",
        ],

        techStack: [
            "Angular",
            "PostgreSQL",
            "TypeScript",
            "RxJS",
            "CI/CD",
            "Node.js (Express)",
        ],

        features: [
            "Interactive shop listing and search with debounce (RxJS)",
            "Efficient relational database schema design (PostgreSQL)",
            "Automated CI/CD pipeline for build and deployment",
            "Category and keyword-based filtering system",
            "Responsive UI using reusable Angular components",
        ],

        challenges: [
            "Optimizing frontend search performance with RxJS operators",
            "Designing a flexible relational data model for shops and services",
            "Automating deployment workflows to ensure reliable updates",
        ],

        learnings: [
            "Deep understanding of relational database design (PostgreSQL)",
            "Mastering CI/CD concepts for modern web applications",
            "Improved frontend-backend integration and architecture patterns",
        ],

        duration: "2 Months",
        role: "Front-end Developer & System Architect",
        github: "https://github.com/xxx",
        demoUrl: "https://xxx.vercel.app",
    },

    // ================= OMS (SYSTEM DESIGN & RESEARCH) =================
    {
        slug: "oms",
        title: "Order Management System (OMS)",
        shortDesc:
            "Technical design and research for an enterprise order management system.",
        desc:
            "A research-driven project focused on designing a structured backend for managing enterprise operations. This project served as a foundation for understanding clean architecture, modular system design, and role-based access control before implementation.",

        coverImage: "/projects/oms-cover.png",
        images: [
            "/projects/oms-1.png",
            "/projects/oms-2.png",
            "/projects/oms-3.png",
        ],

        techStack: [
            "System Design",
            "NestJS",
            "TypeScript",
            "Architecture Research",
            "ER Diagram",
        ],

        features: [
            "Conceptual modular backend architecture design",
            "Planned role-based access control (RBAC) logic",
            "Designed API specifications and data validation patterns",
            "Researched scalable database structures for reporting",
        ],

        challenges: [
            "Designing a maintainable and decoupled module structure",
            "Defining complex permission logic and user workflows",
            "Balancing system flexibility with strict data validation requirements",
        ],

        learnings: [
            "Strong theoretical foundation in NestJS and clean architecture",
            "Best practices in API documentation and design (DTOs/Validators)",
            "Strategic thinking in system scalability and modularity",
        ],

        duration: "1.5 Months",
        role: "System Designer (Research & Design)",
        github: "https://github.com/xxx",
        demoUrl: "",
    },

    // ================= FLOOD ALERT SYSTEM =================
    {
        slug: "flood-alert",
        title: "Flood Alert System",
        shortDesc:
            "IoT-based real-time flood monitoring and notification system.",
        desc:
            "Flood Alert System is an IoT project that monitors water levels using sensors and triggers alerts via LINE API. It uses Node-RED for workflow automation and MQTT for real-time communication.",

        coverImage: "/projects/flood-cover.png",
        images: [
            "/projects/flood-1.png",
            "/projects/flood-2.png",
            "/projects/flood-3.png",
        ],

        techStack: [
            "Arduino",
            "Node-RED",
            "MQTT",
            "LINE API",
            "IoT",
        ],

        features: [
            "Real-time water level monitoring",
            "Automated LINE notifications",
            "Threshold-based alert system",
            "Sensor data visualization",
            "Workflow automation with Node-RED",
        ],

        challenges: [
            "Handling unstable sensor readings",
            "Designing real-time data flow",
            "Ensuring reliable notifications",
        ],

        learnings: [
            "IoT system architecture",
            "Real-time event-driven workflows",
            "Integration with external APIs",
        ],

        duration: "2 Months",
        role: "IoT Developer",
        github: "https://github.com/xxx",
        demoUrl: "",
    },

    // ================= PYGAME OOP GAME =================
    {
        slug: "pygame-game",
        title: "2D Game with Pygame (OOP)",
        shortDesc:
            "Object-oriented 2D game built with Python and Pygame.",
        desc:
            "This project is a 2D game developed using Python and Pygame, focusing on object-oriented programming principles. The game includes player movement, enemy AI, collision detection, and game state management.",

        coverImage: "/projects/game-cover.png",
        images: [
            "/projects/game-1.png",
            "/projects/game-2.png",
            "/projects/game-3.png",
        ],

        techStack: [
            "Python",
            "Pygame",
            "OOP",
        ],

        features: [
            "Object-oriented game architecture",
            "Player movement and controls",
            "Enemy AI behavior system",
            "Collision detection",
            "Game loop and state management",
        ],

        challenges: [
            "Designing reusable OOP structure",
            "Managing game states and transitions",
            "Handling real-time rendering performance",
        ],

        learnings: [
            "Strong OOP fundamentals",
            "Game loop and rendering concepts",
            "Problem-solving in real-time systems",
        ],

        duration: "1 Month",
        role: "Game Developer",
        github: "https://github.com/xxx",
        demoUrl: "",
    },
];