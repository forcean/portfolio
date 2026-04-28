"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full backdrop-blur bg-white/5 border-b border-white/10 z-50">
            <div className="max-w-6xl mx-auto flex justify-between p-4">
                <h1 className="font-bold">MyPortfolio</h1>
                <div className="space-x-6 text-sm">
                    <Link href="/">Home</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/resume">Resume</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    );
}