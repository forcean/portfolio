"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ContactPage() {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact-item", {
                y: 40,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out",
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={container}
            className="min-h-screen flex items-center justify-center px-6"
        >
            <div className="max-w-xl w-full bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-10 text-center space-y-6">

                {/* Title */}
                <h1 className="contact-item text-3xl font-bold">
                    Let’s <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Work Together</span>
                </h1>

                {/* Subtitle */}
                <p className="contact-item text-gray-400">
                    I&apos;m open to opportunities, collaborations, or just a friendly chat.
                </p>

                {/* Email */}
                <div className="contact-item">
                    <p className="text-sm text-gray-500">Email</p>
                    <a
                        href="mailto:annopsrichan@gmail.com"
                        className="text-blue-400 text-lg hover:underline"
                    >
                        annopsrichan@gmail.com
                    </a>
                </div>

                {/* Phone */}
                <div className="contact-item">
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-lg">096-659-0527</p>
                </div>

                {/* Buttons */}
                <div className="contact-item flex justify-center gap-4 pt-4">
                    <a
                        href="https://github.com/forcean"
                        target="_blank"
                        className="px-5 py-2 bg-white/10 rounded-xl hover:bg-white/20 transition"
                    >
                        GitHub
                    </a>

                    <a
                        href="mailto:annopsrichan@gmail.com"
                        className="px-5 py-2 bg-blue-500 rounded-xl hover:scale-105 transition"
                    >
                        Send Email
                    </a>
                </div>
            </div>
        </section>
    );
}