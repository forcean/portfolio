import Hero from "@/component/sections/Hero";
import HighlightsSection from "@/component/sections/HighlightsSection";
import ActivitiesSection from "@/component/sections/ActivitiesSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <HighlightsSection />

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <ActivitiesSection />
    </>
  );
}