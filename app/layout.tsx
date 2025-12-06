// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Koleys Technology Ltd",
  description:
    "Koleys Technology Ltd – Python, data, and AI engineering for modern businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <div className="mx-auto max-w-6xl px-4 py-8">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
