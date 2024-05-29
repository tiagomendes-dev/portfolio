import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";

import "@/app/globals.css";

import TopInfo from "@/app/_components/top-info";
import { cn } from "@/app/_lib/utils";
import Footer from "@/app/_sections/footer";
import Header from "@/app/_sections/header";

import { Toaster } from "./_components/ui/toaster";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Tiago Mendes | Portfolio",
  description:
    "Bem-vindo ao portfólio de Tiago Mendes. Aqui você encontra projetos de desenvolvimento web e soluções criativas para sua você e sua empresa. Explore meu trabalho, habilidades e entre em contato para colaborações.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <TopInfo />
        <div className="flex flex-col bg-zinc-100 md:flex-row">
          <Header />
          <div className="flex-1">
            {children}
            <Footer />
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
