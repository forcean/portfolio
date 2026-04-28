"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Card from "@/component/ui/Card";
import SkillsSection from "@/component/sections/SkillsSection";


export default function ResumePage() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".resume-item", {
        y: 60,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power4.out",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="max-w-6xl mx-auto px-6 py-20">

      {/* Header */}
      <div className="resume-item mb-12">
        <h1 className="text-4xl font-bold tracking-tight">
          Annop{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Srichan
          </span>
        </h1>

        <p className="text-gray-400 mt-2 text-sm">
          Full-stack Developer • Angular • NestJS • Microservices
        </p>

        {/* Highlight Skills */}
        <div className="flex gap-2 mt-4 flex-wrap">
          {["Angular", "NestJS", "Microservices"].map((tech) => (
            <span
              key={tech}
              className="text-xs bg-blue-500/20 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div className="space-y-8">

          {/* About */}
          <div className="resume-item">
            <Card>
              <h2 className="font-semibold mb-3">About</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                High-achieving Engineering student (GPA 3.79) with strong experience in
                Full-stack Development. Passionate about building scalable systems
                and clean UI.
              </p>
            </Card>
          </div>

          {/* Skills (ใช้ของคุณ) */}
          <div className="resume-item">
            <Card>
              <SkillsSection />
            </Card>
          </div>

          {/* Contact */}
          <div className="resume-item">
            <Card>
              <h2 className="font-semibold mb-3">Contact</h2>
              <p className="text-sm text-gray-400">annopsrichan@gmail.com</p>
              <p className="text-sm text-gray-400">096-659-0527</p>
            </Card>
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:col-span-2 space-y-8">

          {/* Experience */}
          <div className="resume-item">
            <Card>
              <h2 className="font-semibold mb-4">Experience</h2>

              <div>
                <p className="font-medium">Intern – ENTRONICA</p>
                <p className="text-gray-400 text-sm">
                  Developed Angular frontend, worked with CI/CD pipelines, and collaborated in Agile teams.
                </p>
              </div>
            </Card>
          </div>

          {/* Projects */}
          <div className="resume-item">
            <Card>
              <h2 className="font-semibold mb-4">Projects</h2>

              <div className="space-y-4">
                <div>
                  <p className="font-medium">AutoServicePro</p>
                  <p className="text-gray-400 text-sm">
                    Microservices-based service management platform using Angular & NestJS.
                  </p>
                </div>

                <div>
                  <p className="font-medium">Flood Alert System</p>
                  <p className="text-gray-400 text-sm">
                    IoT-based alert system using Arduino + Node-RED with real-time notifications.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Education */}
          <div className="resume-item">
            <Card>
              <h2 className="font-semibold mb-4">Education</h2>
              <p className="text-gray-400 text-sm">
                Engineering Student – GPA 3.79
              </p>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}