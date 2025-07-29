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
    <div ref={topRef} className="relative w-full bg-cover bg-center bg-no-repeat aspect-[375/1288] md:aspect-[1920/1150] bg-[url('/images/mb-event-newbie-bg.jpg')] md:bg-[url('/images/pc-event-newbie-bg.jpg')]">
      <img src="/images/18+.png" alt="" className="hidden md:block absolute top-[3%] right-[2%] w-[9.5%] object-cover" />
      <Header />
      <Floating onScrollToTop={scrollToTop} />
      {children}
    </div>
  );
}