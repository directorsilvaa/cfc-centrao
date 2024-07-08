// src/app/layout.tsx
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "./globals.css";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Centrao FSA | Oficial",
  description:
    "O centrão é especializada em aulas teóricas para obtenção da CNH.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextThemesProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
          {/* <PopupWidget /> */}
        </NextThemesProvider>
      </body>
    </html>
  );
}
