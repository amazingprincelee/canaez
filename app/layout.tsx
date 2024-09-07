import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar"; 
import TopBar from "./components/TopBar";
import "./globals.css";
import Footer from "./components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Canaez Group",
  description: "NC royal building company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />
        <NavBar /> 
        {children} 
        <Footer />

      </body>
    </html>
  );
}
