import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pandian D | Software Developer — Enterprise, ERP & AI Solutions",
  description:
    "Software Developer with 2+ years of experience building enterprise applications, ERP systems, CRM platforms, SaaS products, and AI-powered solutions. Based in Bengaluru, India.",
  keywords: [
    "Software Developer",
    "Enterprise Software",
    "ERP Development",
    "CRM Development",
    "AI Solutions",
    "SaaS Applications",
    "React.js",
    "Node.js",
    "Bengaluru",
    "Pandian D",
  ],
  authors: [{ name: "Pandian D" }],
  creator: "Pandian D",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Pandian D | Software Developer",
    description:
      "Software Developer specializing in enterprise applications, ERP & CRM systems, SaaS platforms, and AI-powered solutions.",
    siteName: "Pandian D Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
