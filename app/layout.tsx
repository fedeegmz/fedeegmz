import type { Metadata, Viewport } from "next";
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
  title: "Federico Gomez | Software Developer",
  description:
    "Software Developer specializing in backend systems, data pipelines, and scalable solutions. Building with Python, FastAPI, and modern web technologies.",
  keywords: [
    "Software Developer",
    "Backend Developer",
    "Python",
    "FastAPI",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: "Federico Gomez" }],
  openGraph: {
    title: "Federico Gomez | Software Developer",
    description:
      "Software Developer specializing in backend systems and scalable solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Federico Gomez | Software Developer",
    description:
      "Software Developer specializing in backend systems and scalable solutions.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
