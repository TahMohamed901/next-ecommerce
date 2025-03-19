import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });
export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500','600' , '800'],
})
export const metadata: Metadata = {
  title: "El Khaima | Home ",
  description: "El Khaima home page ",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        
        <Navbar />
        <div className="mt-[101px]">
        {children}
        </div>
        
        <Footer />
      </body>
    </html>
  );
}
export default RootLayout
