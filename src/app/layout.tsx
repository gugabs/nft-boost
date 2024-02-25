import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Container from "@/components/Container";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Container>
          <Header />
          {children}
        </Container>
      </body>
    </html>
  );
}
