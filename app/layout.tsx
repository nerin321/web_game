import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";

export const metadata: Metadata = {
  title: "Web game",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-[90%] mx-auto py-5 bg-gray-200">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
