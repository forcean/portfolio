import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/component/layout/Navbar";
import Footer from "@/component/layout/Footer";



export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Full-stack developer portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0B0F19] text-white scroll-smooth">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}