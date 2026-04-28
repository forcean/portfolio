import ResumeSection from "@/component/sections/ResumeSection";
import SummarySection from "@/component/sections/SummarySection";


export default function ResumePage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-20 space-y-10">
            <h1 className="text-3xl font-bold">Resume</h1>

            <SummarySection />
            <ResumeSection />
        </div>
    );
}