import { Education, Experience, PersonalInfo } from "@/types/resume";

export const personalInfo: PersonalInfo = {
    name: "Annop Srichan",
    role: "Full-stack Developer",
    subtitle: "Angular • NestJS • Microservices",
    email: "annopsrichan@gmail.com",
    phone: "096-659-0527",
    location: "Thailand",
    summary:
        "High-achieving Engineering student with strong experience in Full-stack Development. Passionate about building scalable systems, modern UI, and clean architecture.",
};

export const experience: Experience[] = [
    {
        company: "ENTRONICA",
        role: "Software Developer Intern",
        period: "2025",
        desc: [
            "Developed Angular frontend applications",
            "Built reusable UI components",
            "Worked with CI/CD pipelines",
            "Collaborated in Agile teams",
        ],
    },
];

export const education: Education[] = [
    {
        school: "Engineering University",
        degree: "Bachelor of Engineering",
        gpa: "3.79",
        period: "2021 - Present",
    },
];

export const achievements: string[] = [
    "Startup Competition Participant",
    "Built multiple Full-stack Projects",
    "Created scalable Microservices systems",
    "Experienced in Angular + NestJS",
];