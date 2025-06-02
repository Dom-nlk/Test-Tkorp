import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./font/font";


export const metadata: Metadata = {
  title: "Tkorp App Test",
  description: "A test of technical skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
