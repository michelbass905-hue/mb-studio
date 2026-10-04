
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MB Studio — Conception web & développement créatif",
  description:
    "Studio indépendant spécialisé en design d'interface, développement sur mesure et expériences numériques.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "MB Studio — Conception web & développement créatif",
    description:
      "Studio indépendant spécialisé en design d'interface, développement sur mesure et expériences numériques.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "MB Studio — Conception web & développement créatif",
    description:
      "Studio indépendant spécialisé en design d'interface, développement sur mesure et expériences numériques.",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
