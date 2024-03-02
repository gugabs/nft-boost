import "./globals.css";

import type { Metadata } from "next";

import { Inter, Poppins } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "NFTBoost | Explore um Universo Digital de Colecionáveis Únicos!",
  description: "Projeto do módulo de Next do curso Codeboost",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={`${poppins.variable} ${inter.variable}`} lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
