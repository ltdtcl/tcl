import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const body = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "Tropical Consulting Ltd | Customer Support, 24/7",
  description: "Part of an international group, rooted in Mauritius. Customer support and service excellence, around the clock."
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={body.variable}>
    <head><noscript><style>{".reveal{opacity:1!important;transform:none!important}"}</style></noscript></head>
    <body><Header />{children}<Footer /></body>
  </html>;
}
