"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const locale = useLocale();
  const t = useTranslations("navbar");
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { key: "home", path: "" },
    { key: "projects", path: "/projects" },
    { key: "resume", path: "/resume" },
    { key: "contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/") || "/";
  };

  return (
    <motion.nav
      initial={false}
      animate={{
        height: scrolled ? 64 : 80,
        backdropFilter: scrolled ? "blur(20px)" : "blur(8px)",
        backgroundColor: scrolled
          ? "rgba(0,0,0,0.7)"
          : "rgba(255,255,255,0.05)",
      }}
      className="fixed top-0 w-full z-50 border-b border-white/10 transition-all"
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex justify-between items-center">

        <Link href={`/${locale}`} className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            className="w-8 h-8 group-hover:scale-110 transition"
          />
          <span className="font-semibold text-lg tracking-wide">
            My Portfolio
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 relative">

          {navItems.map((item) => {
            const href = `/${locale}${item.path}`;
            const active = pathname === href;

            return (
              <div
                key={item.key}
                onMouseEnter={() => setHovered(item.key)}
                onMouseLeave={() => setHovered(null)}
                className="relative"
              >
                <Link
                  href={href}
                  className={`text-sm transition ${active ? "text-white" : "text-gray-400"
                    }`}
                >
                  {t(item.key)}
                </Link>

                {(hovered === item.key || active) && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-[2px] bg-blue-400 w-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </div>
            );
          })}

          <div className="flex gap-2 ml-4">
            {["en", "th"].map((lng) => (
              <Link
                key={lng}
                href={switchLocale(lng)}
                className={`px-3 py-1 rounded-full text-xs transition ${locale === lng
                  ? "bg-blue-500 text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
                  }`}
              >
                {lng.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-white"
        >
          <Menu size={26} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* panel */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 120 }}
              className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-xl border-b border-white/10 z-50"
            >
              <div className="flex justify-between items-center p-6">
                <span className="text-white text-lg font-semibold">
                  Menu
                </span>

                <button onClick={() => setIsOpen(false)}>
                  <X size={28} />
                </button>
              </div>

              <div className="flex flex-col items-center gap-8 pb-10">

                {navItems.map((item, i) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={`/${locale}${item.path}`}
                      onClick={() => setIsOpen(false)}
                      className="text-xl text-gray-300 hover:text-white transition"
                    >
                      {t(item.key)}
                    </Link>
                  </motion.div>
                ))}

                <div className="flex gap-4 mt-6">
                  {["en", "th"].map((lng) => (
                    <Link
                      key={lng}
                      href={switchLocale(lng)}
                      className={`px-4 py-2 rounded-full transition ${locale === lng
                        ? "bg-blue-500 text-white"
                        : "bg-white/10 text-gray-400"
                        }`}
                    >
                      {lng.toUpperCase()}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}