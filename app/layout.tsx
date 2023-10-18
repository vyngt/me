import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar, VNavbar } from "@/components/Sidebar";

import { Meteors } from "@/components/Meteor";

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
          <Sidebar className="hidden md:block sidebar h-full w-60 shadow-xl fixed" />
          <VNavbar className="md:hidden fixed w-full h-16 navbar z-[99] shadow-md" />
          <div className="pt-16 md:pt-0 md:ml-[242px] mr-[2px]">{children}</div>
          <Meteors number={20} />
        </div>
      </body>
    </html>
  );
}
