'use client';

import localFont from "next/font/local";
import "./Styles/globals.css";
// import Header from "@/components/shared/client/Header/header";
import { SidebarContext } from "@/components/shared/client/SideBarMenu/sideBarMenu";
import { useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [expanded, setExpanded] = useState(false); // Sidebar state
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
     
 
        {children}
  

      </body>
    </html>
  );
}
