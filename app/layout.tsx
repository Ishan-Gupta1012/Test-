import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CTO Demo Video - Video Streaming Dashboard",
  description: "Modern video streaming dashboard with analytics and VdoCipher integration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <div className="flex min-h-screen" style={{ background: '#0f0f23' }}>
          <Sidebar />
          <main className="flex-1 lg:ml-0 min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
