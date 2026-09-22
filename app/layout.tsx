import type { Metadata } from "next";
import { Fira_Code, Fira_Sans } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";

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
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
