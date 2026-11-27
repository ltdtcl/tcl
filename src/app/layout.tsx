import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
export const metadata: Metadata = {
  title: "Tropical Consulting Ltd | Customer Support, 24/7",
  description: "Part of an international group, rooted in Mauritius. Customer support and service excellence, around the clock."
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header />{children}<Footer /></body></html>;
}
