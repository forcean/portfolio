import { Project } from "@/types/project";

export const projects: Project[] = [
    // AutoServicePro
    {
        slug: "autoservicepro",
        title: "AutoServicePro",
        shortDesc:
            "Service management system with complex workflows and frontend-driven architecture design.",

        desc:
            "AutoServicePro is a full-stack service management system designed for automotive service operations. I was responsible for frontend development and overall system design, including defining business workflows, API structures, and data models. The system handles repair processes, stock management, and billing workflows with a focus on scalability and maintainability. Designed the core system architecture where Repair Order acts as the central entity connecting stock movements, billing, and service history.",

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

        features: [
            "JWT authentication with role-based authorization (RBAC)",
            "Repair order workflow management (create, assign, track status)",
            "Quotation system for complex repair cases",
            "Integrated billing system linked with repair and stock data",
            "Stock management with movement tracking (IN / OUT / ADJUST)",
            "Automatic bill generation from stock usage with manual adjustments",
            "Vehicle management and service history tracking",
            "Advanced image upload system (profile + gallery, multi-image support)",
            "Complex reactive forms with dynamic validation (Angular)",
            "Reusable and modular Angular component architecture",
        ],

        challenges: [
            "Designing end-to-end business workflow (repair → stock → billing)",
            "Defining scalable API structure and data relationships across modules",
            "Managing complex reactive forms and dynamic UI states in Angular",
            "Handling image upload workflows (add, delete, sync existing data)",
            "Ensuring data consistency between frontend state and backend systems",
        ],

        learnings: [
            "Strong understanding of system design and business workflow modeling",
            "Experience designing API contracts and database structure before implementation",
            "Advanced usage of Angular Reactive Forms for complex applications",
            "Improved ability to translate real-world processes into scalable software systems",
        ],

        duration: "3 Months",
        role: "Front-end Developer & System Designer",
        github: "https://github.com/xxx",
        demoUrl: "https://xxx.vercel.app",
    },

    // AMID Marketplace
    {
        "slug": "amid",
        "title": "AMID Marketplace",
        "shortDesc": "Marketplace platform with a focus on system integration, containerization, and modern UI/UX.",
        "desc": "A centralized service marketplace developed during my internship at Entronica Co., Ltd. While focusing on the Front-end experience with Angular, I also served as the Integration and Infrastructure Lead. I was responsible for designing the system architecture, optimizing database schemas, and orchestrating microservices using Docker to ensure a seamless connection between the front-end and back-end services.",

        "coverImage": "/projects/amid-cover.png",
        "images": [
            "/projects/amid-1.png",
            "/projects/amid-2.png",
            "/projects/amid-3.png",
            "/projects/amid-4.png",
            "/projects/amid-5.png",
            "/projects/amid-6.png",
            "/projects/amid-7.png",
            "/projects/amid-8.png",
        ],

        "techStack": [
            "Angular (Front-end)",
            "TypeScript",
            "Docker & Docker Compose",
            "CI/CD Pipelines",
            "PostgreSQL & MongoDB (Schema Design)",
            "NGINX (Reverse Proxy)",
            "Minio (Object Storage)",
            "Google Maps API"
        ],

        "features": [
            "Developed a responsive user interface using Angular for both customers and service partners.",
            "Architected system orchestration using Docker Compose to manage multiple services including API, Web, and DB.",
            "Designed and implemented the Database Schema for PostgreSQL and MongoDB to support complex service data.",
            "Integrated NGINX as a Reverse Proxy to handle routing for Web, API, and File Management Services (FMS).",
            "Implemented location-based shop discovery with Google Maps API and synchronized OAuth2 authentication.",
            "Established automated CI/CD processes for streamlined development and deployment."
        ],

        "challenges": [
            "Bridging Front-end requirements with Back-end services through effective System Integration and API contracts.",
            "Managing complex service orchestration and maintaining environment consistency using Docker.",
            "Configuring secure routing and load balancing between decoupled microservices via NGINX."
        ],

        "learnings": [
            "Advanced proficiency in system orchestration and DevOps practices within a professional team environment.",
            "Expertise in translating technical requirements into functional Sequence Diagrams and Database Designs.",
            "Hands-on experience in Full-stack integration, focusing on the synergy between Front-end and Infrastructure."
        ],

        "duration": "6 Months (Internship)",
        "role": "Software Developer Intern",
        "github": "https://github.com/xxx",
        "demoUrl": "https://xxx.vercel.app"
    },

    // Order Management System (OMS)
    {
        slug: "oms",
        title: "Order Management System (OMS)",
        shortDesc:
            "Architectural design for an enterprise-grade order management and stock synchronization system.",
        desc:
            "Conducted in-depth technical research and architectural design for an Order Management System (OMS) at Entronica Co., Ltd. The project focused on solving complex operational challenges for shop owners, such as multi-channel sales integration and automated stock synchronization. I designed the system's operational flow, from order intake via external platforms (TikTok, Shopee, Lazada) to fulfillment and delivery tracking.",

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

        features: [
            "Designed end-to-end Order Flow: Order Intake → Stock Check → Fulfillment → Shipping",
            "Conceptualized multi-channel synchronization for stock and price updates",
            "Integrated logic for external delivery provider tracking and status updates",
            "Dashboard and Reporting design for real-time sales and inventory insights",
            "Planned modular architecture to support future scaling and platform integrations",
        ],

        challenges: [
            "Designing a unified data model that fits various marketplace API structures",
            "Mapping complex state transitions for orders (Pending, Packed, Shipped, Returned)",
            "Balancing real-time synchronization requirements with API rate limits",
        ],

        learnings: [
            "Deep understanding of Enterprise Resource Planning (ERP) and OMS workflows",
            "Experience in strategic system planning and business process modeling",
            "Knowledge of marketplace ecosystem integrations and logistics automation",
        ],

        duration: "4 Months (Internship Research Phase)",
        role: "Software Developer Intern (System Designer)",
        github: "https://github.com/xxx",
        demoUrl: "",
    },

    // Flood Alert System (IoT)
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
            "/projects/flood-4.png",
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

    // Pygame OOP Game
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
            "/projects/game-4.png",
            "/projects/game-5.png",
            "/projects/game-6.png",
        ],

        techStack: [
            "Python",
            "Pygame",
            "OOP",
        ],

        features: [
            "Object-oriented game architecture",
            "Tile-based level system with walls and collision boundaries",
            "Player movement with directional sprite animation",
            "Basic enemy AI and interaction system",
            "Collision detection and hit cooldown mechanics",
            "Game loop and state management (Game Over / Win)",
        ],

        challenges: [
            "Designing reusable OOP structure for game entities",
            "Handling collision detection with map boundaries",
            "Managing smooth player movement and input handling",
            "Implementing game state transitions (menu, gameplay, end)",
        ],

        learnings: [
            "Strong OOP design in game development",
            "Understanding real-time game loops and rendering",
            "Handling state management in interactive applications",
            "Working with sprite animations and collision systems",
        ],

        duration: "1 Month",
        role: "Game Developer",
        github: "https://github.com/forcean/project-oop",
        demoUrl: "",
    },
];