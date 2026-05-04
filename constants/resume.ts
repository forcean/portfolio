import { Education, Experience, PersonalInfo } from "@/types/resume";

export const personalInfo: PersonalInfo = {
    name: "Annop Srichan",
    role: "Software Developer",
    subtitle: "Frontend Specialist | Angular • NestJS • System Architecture",
    email: "annopsrichan@gmail.com",
    phone: "096-659-0527",
    location: "Nakhon Pathom, Thailand",
    summary:
        "High-achieving Electronics and Computer Systems Engineering student (GPA 3.79). Specialized in Frontend Development with Angular, with strong foundations in Backend (NestJS) and System Architecture. Experienced in designing scalable workflows and implementing CI/CD pipelines.",
};

export const experience: Experience[] = [
    {
        company: "ENTRONICA",
        role: "Software Developer Intern",
        period: "June 2025 - August 2025",
        desc: [
            "Developed responsive frontend applications using Angular and TypeScript.",
            "Built reusable UI components and managed complex state within the service structure.",
            "Integrated frontend services with RESTful APIs and optimized system workflows.",
            "Collaborated in an Agile environment, participating in Sprint planning and reviews.",
            "Gained hands-on experience with CI/CD pipelines and version control (Git).",
        ],
    },
];

export const education: Education[] = [
    {
        school: "Silpakorn University",
        degree: "Bachelor of Engineering (Electronics and Computer Systems)",
        gpa: "3.79",
        period: "2022 - 2026 (Expected Graduation: April 2026)",
    },
];

export const achievements: string[] = [
    "Top 5 Representative - Startup Thailand League 2026 (Project: Morph)",
    "System Architect - AutoServicePro: Designed MongoDB schema and system workflows",
    "Developed AMID: A centralized service marketplace platform",
    "Expertise in Frontend-Heavy Full-stack: Angular, NestJS, and Microservices",
    "Strong foundation in Hardware-Software integration (Microcontrollers)",
];