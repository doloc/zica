import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/FooterSection";
import Head from "next/head";

export const metadata: Metadata = {
  title: "ZiCA",
  description: "Môi trường chơi game đầy thú vị",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="mdl-js">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;700;900&display=swap" rel="stylesheet" />
      </Head>
      <body className="font-bevietnampro">
        <main className="w-full flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
