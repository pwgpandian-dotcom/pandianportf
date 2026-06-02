import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pandian D | Software Developer",
  description:
    "Portfolio of Pandian D — Software Developer specializing in MERN Stack, ERP systems, and AI solutions.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap"
        />
      </head>
      <body className="antialiased bg-slate-950 text-white">{children}</body>
    </html>
  );
}
