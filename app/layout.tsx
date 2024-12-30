import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Importing the new font
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Load the Inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Business For The Youth",
  description: "Join us in making change through business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}> {/* Applying the Inter font */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}