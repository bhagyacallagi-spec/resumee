import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ProjectProvider } from "@/lib/project-context";
import { ResumeProvider } from "@/context/resume-context";
import Navigation from "@/components/layout/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KodNest Premium - AI Resume Builder",
  description: "Build your AI Resume Builder project with the KodNest Premium Build System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50`}
      >
        <ProjectProvider>
          <ResumeProvider>
            <Navigation />
            {children}
          </ResumeProvider>
        </ProjectProvider>
      </body>
    </html>
  );
}
