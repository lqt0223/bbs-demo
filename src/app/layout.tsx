import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/layouts/header/Header";
import TopLoader from 'nextjs-toploader'
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopLoader />
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
