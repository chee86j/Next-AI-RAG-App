import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { AppSessionProvider } from "@/components/app-session-provider";

export const metadata: Metadata = {
  title: "Hello World",
  description: "Minimal Next.js + Tailwind starter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <AppSessionProvider>{children}</AppSessionProvider>
      </body>
    </html>
  );
}
