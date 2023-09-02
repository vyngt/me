import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nguyễn Thế Vỹ",
  description: "Nguyen The Vy, Personal resume.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-full relative">
          <Sidebar />
          <div className="ml-[242px] mr-[2px]">{children}</div>
        </div>
      </body>
    </html>
  );
}
