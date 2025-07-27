'use client'

import Floating from "@/components/Floating";
import Header from "@/components/HeaderSection";
import { useRef } from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <div ref={topRef} className="w-full aspect-[1920/2775] flex flex-col items-center bg-cover bg-center bg-no-repeat bg-[url('/images/pc-bg.jpg')]">
      <img src="/images/18+.png" alt="" className="hidden md:block absolute top-[3%] right-[2%] w-[9.5%] object-cover" />
      <Floating onScrollToTop={scrollToTop} />
      <Header />
      <div className="w-[62.5%] mt-[40%] h-full rounded-xl bg-white shadow-lg border-8 border-[#0E99FF]">
        {children}
      </div>
    </div>
  );
}