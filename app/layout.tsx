import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RestoBytes",
  description: "Your All In One Outlet Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} antialiased container mx-auto w-full min-h-screen  px-10`}
      >
        <Navbar />
        <main className="container mx-auto">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
