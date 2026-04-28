import { skills } from "@/constants/skills";
import Badge from "../ui/Badge";

export default function SkillsSection() {
    return (
        <section>
            <h2 className="text-xl font-semibold mb-4">Skills</h2>

            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                ))}
            </div>
        </section>
    );
}