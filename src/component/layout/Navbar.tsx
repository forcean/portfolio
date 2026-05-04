"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

export default function Navbar() {
    const locale = useLocale();
    const t = useTranslations("navbar");
    const pathname = usePathname();

    const navItems = [
        { key: "home", path: "" },
        { key: "projects", path: "/projects" },
        { key: "resume", path: "/resume" },
        { key: "contact", path: "/contact" },
    ];

    const switchLocale = (newLocale: string) => {
        const segments = pathname.split("/");
        segments[1] = newLocale; // replace locale
        return segments.join("/") || "/";
    };

    return (
        <nav className="w-full border-b border-white/10 backdrop-blur bg-white/5 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                <Link href={`/${locale}`} className="flex items-center gap-3 group">
                    <img
                        src="/logo.png"
                        alt="logo"
                        className="w-8 h-8 object-contain group-hover:scale-110 transition"
                    />
                    <span className="font-semibold text-lg tracking-wide">
                        My Portfolio
                    </span>
                </Link>

                <div className="flex items-center gap-6 text-sm">

                    {navItems.map((item) => (
                        <Link
                            key={item.key}
                            href={`/${locale}${item.path}`}
                            className="relative text-gray-300 hover:text-white transition group"
                        >
                            {t(item.key)}

                            {/* underline */}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}

                    <div className="flex gap-2 ml-4">
                        <Link
                            href={switchLocale("en")}
                            className={`px-2 py-1 rounded ${locale === "en" ? "bg-white/10 text-white" : "text-gray-400"}`}
                        >
                            EN
                        </Link>

                        <Link
                            href={switchLocale("th")}
                            className={`px-2 py-1 rounded ${locale === "th" ? "bg-white/10 text-white" : "text-gray-400"}`}
                        >
                            TH
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    );
}