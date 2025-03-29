import React from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

import type { Viewport } from 'next'

const inter = Inter({ subsets: ["latin"] });
export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500','600' , '800'],
})
export const metadata: Metadata = {
  title: "El Khaima | Checkout ",
  description: "El Khaima checkout page ",
};
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable:false
}

const CheckoutLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      {children}
    </>
  );
}
export default CheckoutLayout
