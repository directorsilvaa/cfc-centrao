// src/app/layout.tsx
import type { Metadata } from "next";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import 'react-toastify/dist/ReactToastify.css'; // Importe os estilos do react-toastify
import { ToastContainer } from "react-toastify";

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
          <ToastContainer />
          <Navbar />
          <div>{children}</div>
          <Footer />
          {/* <PopupWidget /> */}
        </NextThemesProvider>
      </body>
    </html>
  );
}
