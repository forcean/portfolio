"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full border-b border-white/10 backdrop-blur bg-white/5 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* LEFT: LOGO */}
                <Link href="/" className="flex items-center gap-3 group">
                    <img
                        src="/logo.png"
                        alt="logo"
                        className="w-8 h-8 object-contain group-hover:scale-110 transition"
                    />

                    <span className="font-semibold text-lg tracking-wide">
                        My Portfolio
                    </span>
                </Link>

                {/* RIGHT: MENU */}
                <div className="flex gap-6 text-sm">
                    {["Home", "Projects", "Resume", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                            className="relative text-gray-300 hover:text-white transition"
                        >
                            {item}

                            {/* underline hover effect */}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}