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
      setScrolled(window.scrollY > 20);
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
    <>
      <motion.nav
        initial={false}
        animate={{
          height: scrolled ? 66 : 82,
          backdropFilter: scrolled ? "blur(24px)" : "blur(10px)",
          backgroundColor: scrolled
            ? "rgba(0,0,0,0.78)"
            : "rgba(255,255,255,0.04)",
        }}
        className="fixed top-0 inset-x-0 z-50 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-3 group shrink-0"
          >
            <img
              src="/logo.png"
              alt="logo"
              className="w-8 h-8 md:w-9 md:h-9 object-contain group-hover:scale-110 transition duration-300"
            />

            <span className="font-semibold tracking-tight text-[0.95rem] sm:text-base md:text-[1.05rem]">
              My Portfolio
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 lg:gap-10 relative">
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
                    className={`relative transition-colors duration-300 text-[0.9rem] lg:text-[0.95rem] tracking-wide ${active
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                      }`}
                  >
                    {t(item.key)}
                  </Link>

                  {(hovered === item.key || active) && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 -bottom-1.5 h-[2px] bg-blue-400 rounded-full w-full"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </div>
              );
            })}

            <div className="flex items-center gap-2 ml-2">
              {["en", "th"].map((lng) => (
                <Link
                  key={lng}
                  href={switchLocale(lng)}
                  className={`px-3 py-1.5 rounded-full transition-all duration-300 text-xs ${locale === lng
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                    }`}
                >
                  {lng.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="
              md:hidden
              relative
              w-11 h-11
              rounded-2xl
              bg-white/5
              border border-white/10
              backdrop-blur-xl
              flex items-center justify-center
              text-white
              active:scale-95
              transition
            "
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{
                opacity: 0,
                y: -40,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.98,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                fixed
                top-4
                left-4
                right-4
                z-50
                overflow-hidden
                rounded-[2rem]
                border border-white/10
                bg-black/90
                backdrop-blur-2xl
                shadow-[0_0_80px_rgba(59,130,246,0.12)]
              "
            >
              <div className="relative">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full" />
                  <div className="absolute bottom-0 right-0 w-[220px] h-[220px] bg-purple-500/10 blur-[100px] rounded-full" />
                </div>

                <div className="relative px-6 pt-6 pb-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[0.7rem] tracking-[0.3em] uppercase text-blue-400">
                        Navigation
                      </p>

                      <h2 className="mt-2 text-xl font-semibold text-white">
                        Menu
                      </h2>
                    </div>

                    <button
                      onClick={() => setIsOpen(false)}
                      className="
                        w-11 h-11
                        rounded-2xl
                        bg-white/5
                        border border-white/10
                        backdrop-blur-xl
                        flex items-center justify-center
                        text-white
                        active:scale-95
                        transition
                      "
                    >
                      <X size={22} />
                    </button>
                  </div>

                  <div className="mt-10 flex flex-col gap-3">
                    {navItems.map((item, i) => {
                      const href = `/${locale}${item.path}`;
                      const active = pathname === href;

                      return (
                        <motion.div
                          key={item.key}
                          initial={{
                            opacity: 0,
                            x: -20,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay: i * 0.06,
                          }}
                        >
                          <Link
                            href={href}
                            onClick={() => setIsOpen(false)}
                            className={`
                              group
                              relative
                              flex items-center justify-between
                              rounded-2xl
                              border
                              px-5 py-4
                              transition-all duration-300
                              ${active
                                ? "border-blue-500/30 bg-blue-500/10"
                                : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                              }
                            `}
                          >
                            <span
                              className={`text-[1rem] font-medium tracking-wide ${active
                                  ? "text-white"
                                  : "text-gray-300 group-hover:text-white"
                                }`}
                            >
                              {t(item.key)}
                            </span>

                            <div
                              className={`
                                w-2 h-2 rounded-full transition
                                ${active
                                  ? "bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)]"
                                  : "bg-white/20 group-hover:bg-white/50"
                                }
                              `}
                            />
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="mt-8 flex items-center justify-center gap-3">
                    {["en", "th"].map((lng) => (
                      <Link
                        key={lng}
                        href={switchLocale(lng)}
                        onClick={() => setIsOpen(false)}
                        className={`
                          px-5 py-2.5 rounded-full
                          text-sm tracking-wide
                          transition-all duration-300
                          ${locale === lng
                            ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                            : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                          }
                        `}
                      >
                        {lng.toUpperCase()}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}