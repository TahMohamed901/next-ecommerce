import React from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import type { Viewport } from 'next'
import QueryProvider from "@/hooks/QueryClient";

const inter = Inter({ subsets: ["latin"] });
export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500','600' , '800'],
})
export const metadata: Metadata = {
  title: "El Khaima | Home ",
  description: "El Khaima home page ",
  icons: {
    icon: '/icons/icon.png',
  },
};
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable:false
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${poppins.className} ` } >
        <QueryProvider>

          <Navbar />
          <div className="mt-[101px] min-h-[150px]">
          {children}
          </div>
          <Footer />

        </QueryProvider>
      </body>
    </html>
  );
}
export default RootLayout
