import type { Metadata } from "next";
import "@fontsource-variable/geist";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import { portfolio } from "@/data/portfolio";

const description =
  "Shiran Lakshitha is a Computer Science undergraduate building practical cloud, DevOps, container, and CI/CD skills across AWS and Azure.";

export const metadata: Metadata = {
  title: `${portfolio.profile.name} — Cloud & DevOps Portfolio`,
  description,
  keywords: ["Shiran Lakshitha", "Cloud Engineering", "DevOps", "AWS", "Azure", "Docker", "Kubernetes"],
  authors: [{ name: portfolio.profile.name }],
  openGraph: {
    title: `${portfolio.profile.name} — Cloud & DevOps Portfolio`,
    description,
    type: "website",
    locale: "en_US",
    siteName: `${portfolio.profile.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolio.profile.name} — Cloud & DevOps Portfolio`,
    description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
