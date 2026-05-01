import ActivitiesSection from "@/component/sections/ActivitiesSection";
import Hero from "@/component/sections/Hero";
import HighlightsSection from "@/component/sections/HighlightsSection";
import ProjectSection from "@/component/sections/ProjectSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <HighlightsSection />
      <ActivitiesSection />
      {/* <ProjectSection /> */}
    </main>
  );
}