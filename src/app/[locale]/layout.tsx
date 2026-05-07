import type { Metadata } from "next";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

import Navbar from "@/src/component/layout/Navbar";
import Footer from "@/src/component/layout/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Full-stack developer portfolio",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "th" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  let messages;

  try {
    messages = (
      await import(`@/src/messages/${locale}.json`)
    ).default;
  } catch {
    notFound();
  }

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
    >
      <body className="bg-[#0B0F19] text-white min-h-screen flex flex-col">

        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </NextIntlClientProvider>

      </body>
    </html>
  );
}