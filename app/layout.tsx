import type { Metadata } from "next";
import { Fira_Code, Fira_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const firaSans = Fira_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sistem Monitoring Ekonomi HUT Nunukan 2026",
  description: "Dashboard monitoring aktivitas ekonomi rangkaian HUT Kabupaten Nunukan 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${firaCode.variable} ${firaSans.variable} bg-background font-body text-foreground antialiased`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 lg:ml-64">
            <Navbar />
            <main className="p-4 lg:p-8">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
