import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import { ThemeProvider } from "next-themes";

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
      <body className="w-[95%] lg:w-[90%] mx-auto py-5 bg-gray-200 dark:bg-gray-900 text-primary dark:text-white relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <div className="bottom-5 left-5 fixed flex flex-col gap-1 text-white">
            <a href="#" className="py-1.5 px-4 w-fit bg-blue-600 rounded">
              Báo lỗi Nạp VIP
            </a>
            <a href="#" className="py-1.5 px-4 w-fit bg-red-600 rounded">
              Báo lỗi Link VIP
            </a>
            <a href="#" className="py-1.5 px-4 w-fit bg-green-600 rounded">
              Nhóm hỗ trợ cài đặt
            </a>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
